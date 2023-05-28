import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [Data, setData] = useState([])
  const url = 'http://localhost:8000/api/products'
  async function fetchData () {
    try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return (setData(data))
    }catch(error){
      console.error('errorr')
    }
  }

  useEffect(()=>{
    fetchData() 
  }, [])

  return (
    <div className="App">
      {Data.map(item =>(
        <div key={item.id}>
          <h1>{item.title}</h1>
          <div>
            <p>{item.desc}</p>
            <p>{item.added}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
