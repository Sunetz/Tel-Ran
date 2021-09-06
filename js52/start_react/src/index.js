import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



//ReactDOM.render(<h1>Hello react!</h1>, document.getElementById('root'))

//const title = React.createElement('h1', {id:'myTitle', className: 'title', style:{color: 'red'}}, "Hello React!");
const pStyle = {
  padding: '5px',
  border: '1px solid yellowgreen',
  width:'200px',
  margin: '0 auto'
}
const div = (
  <div>
    <h1 id="myTitle" className="title" style={{color:'yellowgreen', backgroundColor: 'blueviolet', width: '200px', margin: '0 auto', padding:'5px'}}>Hello React!!!</h1>
    <p style = {pStyle}>some text here</p>
  </div>
)

ReactDOM.render(div, document.getElementById('root'))


/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

