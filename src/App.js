import React, { useState, useEffect } from 'react';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Searchform from './Searchform';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Todo_List')));
  document.title = "To Do List"


  const [search, setSearch] = useState('')

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, item };
    const listItems = [...items, newItem];
    setItems(listItems);
    localStorage.setItem('Todo_List', JSON.stringify(listItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
    console.log('Submitted');
  };

  const [newItem, setNewItem] = useState('');

  return (
    <div className='App'>
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Searchform
        search={search}
        setSearch={setSearch}
      />
      <Content items={items.filter(item => (item.item.toLowerCase()).includes(search.toLowerCase()))} setItems={setItems} />
      <Footer />
    </div>
  );
}

export default App;
