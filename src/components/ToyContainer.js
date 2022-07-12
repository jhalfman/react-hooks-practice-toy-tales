import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToy, patchLikes}) {
  return (
    <div id="toy-collection">{toys.map(toy => {
      return <ToyCard toy={toy} key={toy.name} deleteToy={deleteToy} patchLikes={patchLikes}/>
    })}</div>
  );
}

export default ToyContainer;
