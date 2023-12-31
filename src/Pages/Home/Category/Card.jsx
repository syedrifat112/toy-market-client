import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({toyData}) => {
    const {price , name , rating ,_id,picture ,quantity,sellerName, sellerEmail,des} = toyData
    return <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={picture} alt="car" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{name}</h2>
      <h2 className="card-title">{sellerName}</h2>
      <p>Rating : {rating}</p>
      <p>price : {price}</p>
      <div className="card-actions">
        <Link to = {`/kidsTruck/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
      </div>
    </div>
  </div>
}

export default Card;