import { Hono } from "hono";
import { signupController, signinController, meController, updateUserController } from "../controller/authController";
import { authMiddleware } from "../middleware/authMiddleware";

const app = new Hono();

app.post('/signup', signupController);
app.post('/signin', signinController);
app.put('/update', authMiddleware, updateUserController);
app.get('/me', authMiddleware, meController);

export default app;