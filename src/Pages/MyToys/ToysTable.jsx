import React from "react";

const ToysTable = ({ tableData,handleDelete}) => {
  const { price, category_name, name, quantity, _id } = tableData;

  return (
      
         
          
            <tr>
              <td>{name}</td>
              <td>{category_name}</td>
              <td>{price} $ </td>
              <td>{quantity}</td>
              <td>
                <button onClick={ ()=>handleDelete(_id)} class="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
        
  );
};

export default ToysTable;
