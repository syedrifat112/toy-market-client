import React from "react";

const AllToysCard = ({allToy}) => {
    console.log(allToy);
    const {picture,rating,price} = allToy
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={picture} alt="car" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Rating : {rating}</p>
        <p>Price : {price}</p>
      </div>
    </div>
  );
};

export default AllToysCard;
