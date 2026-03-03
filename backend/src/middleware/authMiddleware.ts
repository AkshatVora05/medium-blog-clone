import { Context, Next } from "hono";
import { verify } from "hono/jwt";

export type Variables = {
    userId: string;
}

export const authMiddleware = async (c: Context<{ 
    Bindings: { JWT_SECRET: string }, 
    Variables: Variables 
}>, next: Next) => {

    const authHeader = c.req.header("Authorization") || "";

    if (!authHeader.startsWith("Bearer ")) {
        return c.json({
            success: false,
            message: "Unauthorized access"
        }, 401);
    }

    const token = authHeader.split(" ")[1];

    try {
        const payload = await verify(token, c.env.JWT_SECRET, "HS256");

        if (payload) {
            c.set("userId", String(payload.id));
            
            await next();
        } else {
            return c.json({
                success: false,
                message: "Invalid Token"
            }, 403);
        }
    }
    catch (err) {
        return c.json({
            success: false,
            message: "Authentication failed"
        }, 403);
    }
}