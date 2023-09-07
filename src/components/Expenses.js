import ExpenseItem from "./ExpenseItem";

function Expenses(args) {

    return (
        <div>
            <ExpenseItem expense={args.items[0]}></ExpenseItem>
            <ExpenseItem expense={args.items[1]}></ExpenseItem>
            <ExpenseItem expense={args.items[2]}></ExpenseItem>
            <ExpenseItem expense={args.items[3]}></ExpenseItem>
            <ExpenseItem expense={args.items[4]}></ExpenseItem>
        </div>
    );
}

export default Expenses;