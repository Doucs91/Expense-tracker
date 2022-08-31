import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onFilterHandler = (year) => {
    setFilteredYear(year);
    props.onFilter(year);
  };

  let expensesContent = <p>No expenses found.</p>;
  if (props.expenses.length > 0) {
    expensesContent = props.expenses.map((expense) => {
      return <ExpenseItem key={expense.id} expense={expense} />;
    });
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilter={onFilterHandler} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
