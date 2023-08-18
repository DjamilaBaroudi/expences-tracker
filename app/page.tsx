import { CardItem } from "@/components/CardItem";
import ExpensesItem from "@/components/ExpensesItem"

export type expenseItemProps = {
  id?: string;
  title: string;
  amount: number;
  date: Date;
}
const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
export default function IndexPage() {
  return (
    <section className="container flex w-full items-center justify-center gap-6 md:max-w-4xl md:py-10">
    <CardItem className="flex w-full max-w-sm flex-wrap gap-6 bg-[#003459] p-8 dark:bg-[#FCE38A] md:max-w-4xl">
      {expenses.map((expense) => (
        <ExpensesItem key={expense.id} date={expense.date} amount={expense.amount} title={expense.title} />
      ))}
    </CardItem>
  </section>
  
  )
}
