//import { bodyParser } from "json-server";
import React, {useState} from "react";

function ToyForm({addToy}) {

  const [newToyForm, setNewToyForm] = useState({
    name: "",
    image: "",
    likes: 0,
  })

  function updateToyForm(e) {
    const newToy = {...newToyForm, [e.target.name]: e.target.value};
    setNewToyForm(newToy);
  }

  function toySubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToyForm),
    })
    .then(resp => resp.json())
    .then(toy => addToy(toy))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={toySubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={updateToyForm}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={updateToyForm}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
