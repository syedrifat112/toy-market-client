import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import ToysTable from './ToysTable';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [toy ,setToy] = useState([])
    const url = `http://localhost:5000/kidsTruck`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToy(data))
            
    }, [url]);
    console.log(toy)
    const myToy = toy.filter(t => t?.sellerEmail === user?.email);
    console.log(myToy)
    return (
        <div>
            {
                myToy.map((tableData , i) => <ToysTable key ={tableData._id} tableData = {tableData  }></ToysTable>)
            }
        </div>
    );
};

export default MyToys;