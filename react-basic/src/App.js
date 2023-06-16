import logo from './logo.svg';
import './App.css';
import FormComponent from './components/FormComponent';
import Transaction from './components/Transaction';
import { useState } from 'react';


function App() {

  const design = { color: 'red', textAlign: 'center', fontSize: '1.5rem' }
  // const initData = [
  //   { id: 1, title: 'Food', amount: 60 },
  //   { id: 2, title: 'Fuel', amount: 500 },
  //   { id: 3, title: 'Condo', amount: 5500 },
  // ]
  const [items, setItems] = useState([])
  const addNewItems=(newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  return (
    <div className="container"> 
      <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
      <FormComponent onAddItem={addNewItems} />
      <Transaction items={items} />
    </div>
  );
}

export default App;
