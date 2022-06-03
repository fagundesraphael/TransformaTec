import './App.css';

//Importando um componente externo
import HelloWorldDIO from './components/HelloWorldDIO';
import HelloWorldDIOClass from './components/HelloWorldDIOClass';
import HelloPeople from './components/HelloPeople';
import Calculator from './components/Calculator';
import HelloPerson from './components/HelloPerson';
import HelloCalc from './components/HelloCalc';
import HelloBaseClass from './components/HelloBaseClass';

//Função que agrupa todos os componentes que serão renderizados
function App() {

  let a = 10
  let b = 15

  let person = {
    name: 'Raphael',
    surName: 'Fagundes'
  }

  //Retorno da função
  return (

    <div className="App">

      {/* Chamando o componente importado */}
      <HelloWorldDIO />
      <HelloWorldDIOClass />
      <HelloPeople name="Raphael" age={30}/>
      <Calculator n1={a} n2={b}/>
      <HelloPerson person={person}/>
      <HelloCalc />
      <HelloBaseClass />

    </div>
  );
}

//Exportar o componente App para ser renderizado
export default App;
