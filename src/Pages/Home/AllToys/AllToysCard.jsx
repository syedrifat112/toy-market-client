import React from "react";
import { Link } from "react-router-dom";

const AllToysCard = ({allToy}) => {
    console.log(allToy);
    const {picture,rating,price,_id ,category_name,sellerName,name} = allToy
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={picture} alt="car" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">{sellerName}</h2>
        <p>Rating : {rating}</p>
        <p>Price : {price}</p>
        <p>Category : {category_name}</p>
        <div className="card-actions">
        <Link to = {`/kidsTruck/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
      </div>
    </div>
      </div>
  );
};

export default AllToysCard;
