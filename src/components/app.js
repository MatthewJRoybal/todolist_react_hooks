import React, { useState, useEffect } from 'react';
import './styles.css';

import Form from './form';
import Items from './items';

const App = () => {

  const [loads, setLoads] = useState(true);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([ "Eggs", "Milk", "Toilet Paper" ]);

  useEffect(() => {
    const timer = setTimeout(() => setLoads(false), 5000)
    return () => clearTimeout(timer);
  }, []);

  const handleChange = event => setValue(event.target.value)

  const handleDelete = item => setItems(items.filter(value => item !== value))

  const handleSubmit = (event, value) => {
    event.preventDefault();
    setItems(items => [...items, value]);
    setValue('');
  }

  const html = loads ? <div data-testid="spinner">Spinner</div> :
    <div data-testid="app" className="app">
      <h1>State Management Using React Hooks</h1>
      <h2>A friendly to do list example</h2>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} value={value} />
      <Items handleDelete={handleDelete} items={items} />
    </div>

    console.log(loads);

  return html;


}

export default App;
