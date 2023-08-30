import { CardItem } from "../CardItem"
import ExpenceForm from "../ExpenceForm"
import { Button } from "../ui/button"

const NewExpenseItem = () => {
    return (
        <CardItem className="flex w-full bg-[#003459] p-8 dark:bg-[#FCE38A] md:max-w-4xl">
           <ExpenceForm/>
        </CardItem>
    )
}

export default NewExpenseItem