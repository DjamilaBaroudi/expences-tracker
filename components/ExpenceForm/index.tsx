import { Button } from "../ui/button"
import Input from "../ui/input";

const ExpenceForm = () => {
    return (
        <div className="container w-full">
            <form action="" method="post">
                <div className="container flex flex-col items-start space-y-8">
                    <div className="mx-3 flex w-full justify-around p-1">
                        <Input title={"Title"} type="text" className="w-full" />
                        <Input title={"Price"} type="number" className="w-full"/>
                    </div>
                    <div className="mx-3 flex w-1/2 space-x-2 p-1">
                        <Input title={"Date"} type="date" className="w-full"/>
                    </div>
                </div>
                <div className="flex w-full justify-end">
                    <Button
                        type="submit"
                        className="text-md border-[#003459] bg-[#02C39A] p-2 text-center dark:border-[#FCE38A] dark:bg-[#003459] dark:text-white"> Add new expense </Button>
                </div>
            </form>
        </div>
    )
}

export default ExpenceForm;