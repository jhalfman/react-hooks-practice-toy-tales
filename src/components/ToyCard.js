import React from "react";

function ToyCard({toy: {id, name, image, likes}, deleteToy, patchLikes}) {

  function donate() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() => deleteToy(id))
  }

  function updateLikes() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: likes + 1
      }),
    })
    .then(resp => resp.json())
    .then((data) => patchLikes(data))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={updateLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={donate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
