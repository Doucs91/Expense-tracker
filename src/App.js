import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [expensesList, setExpensesList] = useState(expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((oldExpenses) => {
      return [
        {
          id: "e" + (expenses.length + 1),
          ...expense,
        },
        ...oldExpenses,
      ];
    });
  };
  const yearFilterHandler = (year) => {
    setExpensesList(
      expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === year;
      })
    );
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses onFilter={yearFilterHandler} expenses={expensesList} />
    </div>
  );
};

export default App;
