import React from "react";
// import Photolist from "../PhotoList"; 

function Modal({ currentPhoto }) {
  const {name, category, description, index} = currentPhoto;
  return (
    //jsx
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
        <p>{description}</p>
        <button type="button">Close this modal</button>
      </div>
    </div>
  );
}

export default Modal;
