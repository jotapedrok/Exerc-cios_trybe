import './App.css';
const tasks = ['comer', 'dormir', 'jogar bola', 'codar', 'sei lá'];
const Task = (array) => {
  return (
    array.map((task) => {
      return (<li>{task}</li>)
    })
  );
}

function App() {
  return (
    <div>
      <ol>
        {Task(tasks)}
      </ol>
    </div>
  );
}

export default App;
