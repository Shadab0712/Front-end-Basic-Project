import './App.css';
import Expenses from './components/Expenses';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Expenses></Expenses>
      <Footer></Footer>
    </div>
  );
}

export default App;
