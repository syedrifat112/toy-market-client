import React from "react";

const ToysTable = ({tableData}) => {
    const {price,category_name,sellerName,name,quantity} = tableData
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th> Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>{name}</td>
              <td>{category_name}</td>
              <td>{price} $ </td>
              <td>{quantity}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToysTable;
