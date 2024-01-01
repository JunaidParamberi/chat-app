import React from "react";
import avtar from "../assets/avatar.jpeg";

function List() {
  return (
    <div className="list-container">
      <nav>
        <img className="avatar" src={avtar} alt="" />
      </nav>
      <div className="messages-container">
        <h3>Junaid paraberi</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          aperiam, ipsa illum mollitia nesciunt accusamus doloremque suscipit
          maiores vel dolore corporis cum nisi impedit non, nobis consequuntur
          veritatis? Cum, porro.
        </p>
      </div>
    </div>
  );
}

export default List;
