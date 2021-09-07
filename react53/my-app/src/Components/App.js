import CardList from './CardList';
import '../css/App.css';
import Title from './Title';


const cards = [
  {title:"Card-1",
  subtitle:"Description-1",
  text:"some text-1",
  src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/227px-React-icon.svg.png"},
  
  {title:"Card-2",
  subtitle:"Description-2",
  text:"some text-2",
  src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/227px-React-icon.svg.png"},
  
  {title:"Card-3",
  subtitle:"Description-3",
  text:"some text-3",
  src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/227px-React-icon.svg.png"}]


function App() {
  return (
    <div className="App">
      <Title title='Hi there'/>
      <CardList cards = {cards} />
    </div>
  );
}

export default App;
