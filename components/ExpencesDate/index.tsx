
export type ExpencesDate = {
    date: Date;
}

function ExpencesDate({ date }: ExpencesDate) {
    const month = date.toLocaleDateString("en-US", { month: "short"});
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const year = date.getFullYear();
    return (
        <div className="text-md flex w-full flex-col items-center justify-center rounded-2xl border-2 border-[#003459] p-2 ">
            <div>{day}</div>
            <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                    <span className="uppercase">  {month} </span>
                </p>
            </div>
            <div>{year}</div>
        </div>
    )
}

export default ExpencesDate;
