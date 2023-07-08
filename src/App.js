import './App.css';
import Accordian from './components/Accordian';
import ListRenderer from './components/ListRenderer';

function App() {
  const items = [
    {
      id: 1,
      ques: "Who is Abu?",
      ans: "IT Engineer"
    },
    {
      id: 2,
      ques: "Who is Abu?",
      ans: "IT Engineer"
    },
    {
      id: 3,
      ques: "Who is Abu?",
      ans: "IT Engineer"
    },
  ]
  return (
    <div className="App">
      <ListRenderer items={items} itemName="faq" ItemComponent={Accordian} />
      {/* <Accordian items={items} /> */}
    </div>
  );
}

export default App;
