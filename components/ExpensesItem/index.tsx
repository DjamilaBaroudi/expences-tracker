import { expenseItemProps } from "@/app/page"
import ExpensesDate from "../ExpensesDate";
import { CardItem } from "../CardItem";

const ExpensesItem = ({ title, amount, date }: expenseItemProps) => {

    return (
        <CardItem className="container mx-5 flex w-full max-w-sm flex-wrap items-center justify-around space-x-8 rounded-2xl border-2 border-[#028090] bg-[#FCE38A] p-4 dark:border-[#FCE38A] dark:bg-[#028090] md:max-w-3xl md:flex-nowrap">
            <div className="flex w-24 flex-nowrap md:w-36 md:flex-none md:text-lg">
                <ExpensesDate date={date} />
            </div>
            <div className="flex items-center justify-center">
                <div className="grow">
                    <h2 className="w-20 scroll-m-20 text-sm font-semibold tracking-tight transition-colors first:mt-0 md:w-36 md:text-2xl">
                        {title}
                    </h2>
                </div>
                <div className="w-20 flex-none rounded-3xl border-[2px] border-[#003459] bg-[#02C39A] p-1 text-center text-xs dark:border-[#FCE38A] dark:bg-[#003459] md:w-36 md:p-4 md:text-lg">
                    {amount} €
                </div>
            </div>
        </CardItem>

    )
}

export default ExpensesItem