import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysCard from './AllToysCard';

const AllToys = () => {
    const allToys = useLoaderData()
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                allToys.map((allToy)=>(
                    <AllToysCard key = {allToy._id} allToy={allToy}></AllToysCard>
                ))
            }
        </div>
    );
};

export default AllToys;