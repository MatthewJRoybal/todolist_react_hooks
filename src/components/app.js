import React, { useState } from "react"
import "./styles.css"

import Form from "./form"
import List from "./list"

const App = () => {
  const [value, setValue] = useState("")
  const [list, setList] = useState(["Eggs", "Milk", "Toilet Paper"])

  const handleChange = event => setValue(event.target.value)
  const handleDelete = item => setList(list.filter(value => item !== value))
  const handleSubmit = (event, value) => {
    event.preventDefault()
    setList(list => [...list, value])
    setValue("")
  }

  return (
    <div data-testid="app" className="app">
      <h1>State Management Using React Hooks</h1>
      <h2>A friendly to do list example</h2>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
      />
      <List handleDelete={handleDelete} list={list} />
    </div>
  )
}

export default App
