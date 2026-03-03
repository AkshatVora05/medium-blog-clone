import { Link } from "react-router-dom"

export const AuthLink = ({ text, link, linkText }: {
    text: string,
    link: string,
    linkText: string
}) => {
    return <div className="pt-4 text-center text-slate-500">
        { text }
        <Link className="ml-2 underline hover:text-black" to={link}>{linkText}</Link>
    </div>
}