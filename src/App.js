import React from "react";
import './App.css';
import ListTask from './Components/ListTask';
import AddTask from "./Components/AddTask";

function App() {
  return (
    <div className='container bg-white p-4 mt-5'>
    <h1 style={{textAlign:'center'}}>Todo List</h1>

    <ListTask />
    <br></br>
<AddTask />
  </div>
  );
}

export default App;