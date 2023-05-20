import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CateDetails = () => {
    const categryDetails = useLoaderData()
    const {price} = categryDetails
    return (
        <div>
            <h1>ggggg{price}</h1>
        </div>
    );
};

export default CateDetails;