    import { Context } from "hono";
import { getPrisma } from '../lib/getPrisma';
import { hash, genSalt, compare } from "bcryptjs";
import { sign } from "hono/jwt";
import { Variables } from "../middleware/authMiddleware";
import { SigninInput, signinInput, SignupInput, singupInput, updateUserInput, UpdateUserInput } from "@voraakshat05/writers-hub";

type Bindings = {
    DATABASE_URL: string
    JWT_SECRET: string
}

export const signupController = async (c: Context<{ Bindings: Bindings }>) => {
    try{
        const body = await c.req.json<SignupInput>();
        const { success } = singupInput.safeParse(body);

        if(!success){
            return c.json({
                success: false,
                message: "Invalid input data"
            }, 400);
        }

        const { email, password, name } = body;

        const prisma = getPrisma(c.env.DATABASE_URL);
        
        const res = await prisma.user.findUnique({
            where: {
                email
            },
            select: { 
                id: true
            }
        });

        if(res){
            return c.json({
                success: false,
                message: "User already exists"
            }, 409);
        }

        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);

        await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name
            }
        });

        return c.json({
            success: true,
            message: "New user created successfully"
        }, 201);
    }
    catch(err){
        return c.json({
            success: false,
            message: "Internal server error"
        }, 500);
    }
}

export const signinController = async (c: Context<{ Bindings: Bindings }>) => {
    try{
        const body = await c.req.json<SigninInput>();
        const { success } = signinInput.safeParse(body);

        if(!success) {
            return c.json({
                success: false,
                message: "Invalid input data"
            }, 400);
        }

        const { email, password } = body;

        const prisma = getPrisma(c.env.DATABASE_URL);
        
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if(!user){
            return c.json({
                success: false,
                message: "Invalid credentials"
            }, 401)
        }

        const isValid = await compare(password, user.password);

        if(!isValid){
            return c.json({
                success: false,
                message: "Invalid credentials"
            }, 401)
        }

        const token = await sign({
            id: user.id,
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 4
        }, 
        c.env.JWT_SECRET,    
        "HS256"
        );

        return c.json({
            success: true,
            message: "User login successful",
            token
        }, 200)
    }
    catch(err){
        return c.json({
            success: false,
            message: "Internal server error"
        }, 500)
    }
}

export const updateUserController = async (c: Context<{
    Bindings: Bindings,
    Variables: Variables
}>) => {
    try{
        const userId = c.get("userId");
        const body = await c.req.json<UpdateUserInput>();
        const { success } = updateUserInput.safeParse(body);

        if(!success) {
            return c.json({
                success: false,
                message: "Invalid input field"
            }, 400);
        }

        const { name } = body;

        const prisma = getPrisma(c.env.DATABASE_URL);

        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                name
            }
        });

        return c.json({
            success: true,
            message: "Data updated successfully"
        }, 200);
    }
    catch(err) {
        return c.json({
            success: false,
            message: "Internal server error"
        }, 500);
    }
}

export const meController = async (c: Context<{
    Bindings: Bindings,
    Variables: Variables
}>) => {
    try{
        const prisma = getPrisma(c.env.DATABASE_URL);
        const id = c.get("userId");

        if (!id) {
            return c.json({
                success: false,
                message: "User ID missing"
            }, 401);
        }

        const user = await prisma.user.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return c.json({
            success: true,
            user
        }, 200);
    }
    catch(err) {
        console.error("ME ERROR:", err);
        return c.json({
            success: false,
            message: "Internal server error"
        }, 500)
    }
}