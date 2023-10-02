import './App.css';
import image from './done.jpg';
import imageTwo from './man.jpg';
import {TodoList} from './TodoList';
  
function App () {
  return (
    <div className="app">
      <div className="container">
        <img src = {image} alt = "shopping" width = "250px"/>
      </div>
      <div className="container">
        <h1>Grocery List</h1>
      </div>
      <TodoList/>
      <div className="container">
        <img src = {imageTwo} alt="man" width = "250px"/>
      </div>
    </div>
  );
}

export default App;