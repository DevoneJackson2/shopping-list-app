import { useState } from 'react'
import './App.css'

function App() {
  const [items, SetItems] = useState([]);

  function deleteItem(event){
    event.preventDefault();
    const itemToDelete = event.target[0].value;
    let i;
    for(i = 0 ; i < items.length && items[i].toLowerCase() !== itemToDelete.toLowerCase(); i++ );

    if(i < items.length){
      let firstHalf = items.slice(0, i);
      let secondHalf = items.slice(i+1);
      const newItems = firstHalf.concat(secondHalf);
      SetItems(newItems);
      event.target.reset();
    }
  }

  function addItem(event){
    event.preventDefault()
    const newItem = event.target[0].value;
    for(const item of items){
      if(item.toLowerCase() === newItem.toLowerCase()) return;
    }

    SetItems([...items, newItem]);
    event.target.reset();
  }

  return (
    <div class="container">
      <h1>Items To Buy</h1>
      <ol>
        {items.map((element, index) => (<li key={index}>{element}</li>))}
      </ol>
      <div class="forms">
        <form onSubmit={addItem}>
          <input type="text" placeholder="Add a new item" id="add" name="add" required></input>
          <button type="submit" name='add'>Add</button>
        </form>
        <form onSubmit={deleteItem}>
          <input type="text" placeholder="Delete an item" id="del" name="del" required></input>
          <button type="submit" name='del'>Delete</button>
        </form>
      </div>
    </div>
  )
}

export default App
