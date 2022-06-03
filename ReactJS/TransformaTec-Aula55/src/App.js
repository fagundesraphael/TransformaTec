import './App.css';
import HelloWorld from './components/HelloWorld';
import Car from './components/Car'
import PersonRegister from './components/PersonRegister'
import GameScore from './components/GameScore';

function App() {
  return (
    <div className="App">
      <HelloWorld name="Raphael" />
      <Car owner="Raphael Fagundes"/>
      <PersonRegister name="Raphael" age={30} lastName="Fagundes" job="Dev" />
      <GameScore points={0}/>
    </div>
  );
}

export default App;
