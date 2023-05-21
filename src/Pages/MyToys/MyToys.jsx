import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ToysTable from "./ToysTable";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toy, setToy] = useState([]);
  const url = `http://localhost:5000/kidsTruck`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [url, toy]);
  console.log(toy);
  const myToy = toy.filter((t) => t?.sellerEmail === user?.email);
  console.log(myToy);
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
          }
        });
    }
  };
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
                handleDelete={handleDelete}
              ></ToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
