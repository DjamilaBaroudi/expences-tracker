
export type ExpencesDate = {
    date: Date;
}

const ExpensesDate = ({ date }: ExpencesDate) => {
    const month = date.toLocaleDateString("en-US", { month: "short"});
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const year = date.getFullYear();
    return (
        <div className="md:text-md flex items-center justify-center rounded-2xl border-2 border-[#003459] p-1 text-xs  md:w-36 md:flex-col md:p-2">
            <div>{day}</div>
            <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white md:text-lg">
                    <span className="uppercase">  {month} </span>
                </p>
            </div>
            <div>{year}</div>
        </div>
    )
}

export default ExpensesDate;
