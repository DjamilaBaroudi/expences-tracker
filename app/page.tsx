import ExpencesItem from "@/components/ExpencesItem"

export type expenceItemProps = {
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
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"> Lets get started!</h1>
      </div>
      {expenses.map((expense) => (
        <ExpencesItem key={expense.id} date={expense.date} amount={expense.amount} title={expense.title} />
      ))}

    </section>
  )
}
