import React from "react";
import { Link } from "react-router-dom";

function Productcards({ products }) {
  
  return (
    <>
      {products.map((user) => {
        return (
          <div className="card" key={user.id}>
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <h3>{user.username}</h3>
              <h5>{user.email}</h5>
              <h5>{user.website}</h5>
              <h5>{user.company.name}</h5>
              <h5>{user.address.street}</h5>
              <Link to={`/details/${user.id}`}>Learn More</Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Productcards;