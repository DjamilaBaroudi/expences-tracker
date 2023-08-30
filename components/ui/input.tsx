import { cn } from "@/lib/utils";

export type InputType = {
    type: string,
    className?: string,
    title: string
}

const Input = ({ type, className, title }: InputType) => {
    return (
        <div className="flex w-full items-center justify-center space-x-2 ">
            <label htmlFor="">{ title }</label>
            <input type={type} className={cn("h-8 rounded-xl border border-gray-200", className)} />
        </div>
    )
}

export default Input;