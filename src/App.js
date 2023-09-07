import './App.css';
import Expenses from './components/Expenses';

function App() {

  const expenses = [
    {
      date: "2023-08-30",
      item: "Car Insurance",
      price: "Rs 5000"
    },
    {
      date: "2023-09-30",
      item: "Bike Insurance",
      price: "Rs 6000"
    },
    {
      date: "2023-10-30",
      item: "Aeroplane Insurance",
      price: "Rs 7000"
    },
    {
      date: "2023-11-30",
      item: "Helicopter Insurance",
      price: "Rs 8000"
    },
    {
      date: "2023-08-30",
      item: "Jet Insurance",
      price: "Rs 9000"
    },
  ];

  return (
    <div className="App">
      <Expenses items={expenses}></Expenses>
    </div>
  );

}

export default App;
