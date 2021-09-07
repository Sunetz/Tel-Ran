import BookList from './BookList';
import '../css/App.css';
import {getBooks} from '../store/Store'

function App() {
  return (
    <div className="App">
      <BookList books = {getBooks()} />        
    </div>
  );
}


export default App;
