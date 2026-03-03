import z, { string } from "zod";
export const singupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
});
export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});
export const updateUserInput = z.object({
    name: string()
});
export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    published: z.boolean()
});
export const updateBlogBodyInput = z.object({
    title: z.string().optional(),
    content: z.string().optional()
}).refine((data) => data.title || data.content, {
    message: "At least one field (title or content) must be provided"
});
export const publishBlogInput = z.object({
    publish: z.boolean()
});
export const updateBlogParamInput = z.string().uuid();
export const getOneBlogInput = z.string().uuid();
export const publishBlogParamInput = z.string().uuid();
export const getAllBlogsParamInput = z.coerce.number().min(1).default(1);
export const deleteBlogParamInput = z.string().uuid();
export const getUsersBlogsParamInput = z.coerce.number().min(1).default(1);
