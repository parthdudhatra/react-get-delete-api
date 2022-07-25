import React ,{ useEffect, useState} from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';


function App() {
    const [data, setData] = useState([])
    useEffect(() => {
      UserList()
    },[])

    function UserList(){
      fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
        result.json().then((res) => {
          console.log("res", res)
          setData(res)
        })
      })
    }
    console.log(data)
    function deleteUser(id){
      // alert(id)
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
        method : 'DELETE'
      }).then((result)=>{
        result.json().then((res)=>{
          console.log("Data delete succesfullu",res);
          UserList()
        })
      })
    }
  return (
    <div className="App">
      <h1>Get API Method</h1>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>userId</td>
            <td>id</td>
            <td>title</td>
            <td>completed</td>
            <td>Action</td>
          </tr>
          {
            data.map((items, index) =>
            <tr key={index}>
              <td>{items.userId}</td>
              <td>{items.id}</td>
              <td>{items.title}</td>
              <td>{items.completed}</td>
              <td><button onClick={()=> deleteUser(items.id)}>Delete</button></td>
            </tr>
            )
          }
        </tbody>
      </Table>
      
    </div>
  );
}

export default App;
