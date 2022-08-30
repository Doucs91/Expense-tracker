import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  const onFilterHandler = (year) => {
    console.log(year);
  };
  return (
    <div className="expenses">
      <ExpensesFilter onFilter={onFilterHandler} />
      <Card className="expenses">
        {props.expenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </Card>
    </div>
  );
};

export default Expenses;
