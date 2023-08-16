import { expenceItemProps } from "@/app/page"
import ExpencesDate from "../ExpencesDate";

function ExpencesItem({ title, amount, date }: expenceItemProps) {
 
    return (
        <div className="mx-5 flex w-full items-center justify-around space-x-8 rounded-2xl border-2 border-[#028090] bg-[#FCE38A] p-4 dark:border-[#FCE38A] dark:bg-[#028090]" >
            <div className="w-28 flex-none">
                <ExpencesDate date={date}/>
            </div>
            <div className=" grow">
                <h2 className=" scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">{title}
                </h2>
            </div>
            <div className="w-28 flex-none rounded-3xl border-4 border-[#003459] bg-[#02C39A] p-4 text-center text-lg dark:border-[#FCE38A] dark:bg-[#003459]">
                {amount} </div>

        </div>
    )
}

export default ExpencesItem