export const Avatar = ({ name, size="small" }: { name: string, size?: "small" | "big" }) => {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full ${size === "small" ? 'w-8 h-8' : 'w-10 h-10'}`}>
        <span className={`text-gray-600 ${size === "small" ? 'text-base' : 'text-lg'}`}>{name[0]}</span>
    </div>
}