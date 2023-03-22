import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserList from './components/UserList';

function App() {
  const [listOfUsers, setListOfUsers] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((users) => setListOfUsers(users.data))
      .catch((err) => console.log("error:", err))
  }, [])

  return (
    <div className="App">
      <header className="App-header"> 
      <h1> List Of  Users </h1> 
      {listOfUsers ? <UserList listOfUsers={listOfUsers}></UserList>:null}  
      </header>
    </div>
  );
}

export default App;
