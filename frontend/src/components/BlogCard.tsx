import { Avatar } from "./Avatar";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <div className="p-4 border-b border-slate-300 w-screen max-w-[80vw]">
        <div className="flex">
            <Avatar name={authorName} size="small"></Avatar> 
            <div className="ml-2 font-extralight flex flex-col justify-center"> {authorName} </div>
            <div className="ml-1 font-semibold text-slate-500 text-sm flex flex-col justify-center"> &#183; </div>
            <div className="ml-1 font-thin text-slate-500 text-sm flex flex-col justify-center">{publishedDate}</div>
        </div>
        <div className="text-xl font-semibold mt-2">
            {title}
        </div>
        <div className="font-thin">
            {content.length > 100 ? content.substring(0, 100) + "..." : content.substring(0, 100)}
        </div>
        <div className="text-slate-500 text-sm font-thin mt-4 mb-4">
            {`${Math.ceil(content.length/100)} min read`}
        </div>
    </div>
}