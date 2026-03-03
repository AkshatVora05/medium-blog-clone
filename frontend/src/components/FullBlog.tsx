import type { Blog } from "../hooks/indes"
import { Avatar } from "./Avatar"

export const FullBlog = ({ blog }: {blog: Blog}) => {
    return <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full mt-2 max-w-7xl pt-12">
            <div className="col-span-8">
                <div className="text-5xl font-extrabold">
                    {blog.title}
                </div>
                <div className="text-slate-500 mt-3.5">
                    {new Date(blog.updatedAt).toLocaleDateString()}
                </div>
                <div className="pt-4">
                    {blog.content}
                </div>
            </div>
            <div className="col-span-4">
                <div className="text-slate-700 text-lg">
                    Author
                </div>
                <div className="flex pt-2">
                    <div className="flex flex-col justify-center pr-4">
                        <Avatar name={blog.author.name || "Anonymous"} />
                    </div>
                    <div>
                        <div className="text-xl font-bold">
                            {blog.author.name || "Anonymous"}
                        </div>
                        <div className="mt-2 text-slate-500">
                            Random catch phrase about the author's ability to grab the user's attention
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}