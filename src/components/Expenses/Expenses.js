import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onFilterHandler = (year) => {
    setFilteredYear(year);
    props.onFilter(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilter={onFilterHandler} />
      <ExpensesList items={props.expenses}/>
    </Card>
  );
};

export default Expenses;
