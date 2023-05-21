import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CateDetails = () => {
    const categryDetails = useLoaderData()
    console.log(categryDetails);
    const {price , name , rating ,picture,des} = categryDetails
    return (
        <div className='w-[35%] mx-auto mt-8'>
            <div className="card w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={picture} alt="car" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Rating : {rating}</p>
          <p>price : { "$ " + price}</p>
          <p>Description : {des}</p>
        </div>
      </div>
        </div>
    );
};

export default CateDetails;