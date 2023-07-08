import './App.css';
import Accordian from './components/Accordian';
import Accordianv2 from './components/Accordianv2';
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
      <ListRenderer items={items} itemName="faq" ItemComponent={Accordianv2} />
      {/* <Accordian items={items} /> */}
    </div>
  );
}

export default App;
