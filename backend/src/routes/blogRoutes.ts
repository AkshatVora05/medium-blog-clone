import { Hono } from "hono";
import { authMiddleware } from "../middleware/authMiddleware";
import { createBlogController, deleteBlogController, getAllBlogsController, getOneBlogController, getUsersBlogsController, publishBlogController, updateBlogController } from "../controller/blogController";

const app = new Hono();

app.use('/*', authMiddleware);

app.post('/', createBlogController);
app.put('/:id', updateBlogController);
app.patch('/:id/publish', publishBlogController);
app.get('/bulk', getAllBlogsController);
app.get('/myBlogs', getUsersBlogsController);
app.get('/:id', getOneBlogController);
app.delete('/:id/delete', deleteBlogController);

export default app;