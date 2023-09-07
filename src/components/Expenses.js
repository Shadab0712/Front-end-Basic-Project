import ExpenseItem from "./ExpenseItem";

function Expenses() {

    return (
        <div>
            <ExpenseItem date = "30 March 2023" item = "Car Insurance" price = "Rs 5000"></ExpenseItem>
            <ExpenseItem date = "30 April 2023" item = "Netflix Subscription" price = "Rs 7000"></ExpenseItem>
            <ExpenseItem date = "30 May 2023" item = "Mobile Recharge" price = "Rs 2000"></ExpenseItem>

        </div>
    );
}

export default Expenses;