import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  console.log(props.expenses)
  return (
    <Card className="expenses">
      {
        props.expenses.map((expense)=>{
          return <ExpenseItem expense={expense} />
        })
      }
    </Card>
  );
};

export default Expenses;
