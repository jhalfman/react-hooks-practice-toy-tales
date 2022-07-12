import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  
  function addToy(toy) {
    const newToyList = [...toys, toy];
    setToys(newToyList);
  }

  function deleteToy(id) {
    const newToyList = toys.filter(toy => toy.id !== id);
    setToys(newToyList);
  }

  function patchLikes(updatedToy) {
    const newToyList = toys.map(toy => {
      if (toy.id !== updatedToy.id) {
        return toy;
      }
      else {
        return {...toy, likes: updatedToy.likes}
      }
    })
    setToys(newToyList);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToy={deleteToy} patchLikes={patchLikes}/>
    </>
  );
}

export default App;
