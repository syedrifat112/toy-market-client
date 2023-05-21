import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ToysTable from "./ToysTable";
import ModalBody from "./ModalBody";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toy, setToy] = useState([]);
  const [toyData, setToyData] = useState(null);
  let myTotalToy = toy;
  const handleDelete = (paramsId) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/kidsTruck/${paramsId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = tableData.filter((data) => data._id !== id);
            setToy(remaining);
            myTotalToy = remaining
          }
        });
    }
  };
      //   handle confirm
      const handleConfirm = (paramsId) => {
        fetch(`http://localhost:5000/kidsTruck/${paramsId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = tableData.filter(data => data._id !== id);
                    const updated = tableData.find(data => data._id === id);
                    updated.status = 'confirm'
                    const newData = [updated, ...remaining];
                    setToy(newData);
                    console.log(newData);
                }
            })
    }

  const url = `http://localhost:5000/kidsTruck`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [url, myTotalToy]);
  
  const myToy = toy.filter((t) => t?.sellerEmail === user?.email);
  
  
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th> Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myToy.map((tableData, i) => (
              <ToysTable
                key={tableData._id}
                tableData={tableData}
                setToyData= {setToyData}
                handleDelete={handleDelete}
                
              ></ToysTable>
            ))}
          </tbody>
        </table>
      </div>
      {
        toyData && <ModalBody toyData={toyData} handleConfirm={handleConfirm}></ModalBody>
      }
    </div>
  );
};

export default MyToys;
