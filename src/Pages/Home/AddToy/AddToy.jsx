import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handlePostData = (event) => {
    event.preventDefault();
    const form = event.target;
    const picture = form.url.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const category_name = form.category_name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const des = form.des.value;
    const toyData = {
      name,
      sellerEmail,
      sellerName,
      category_name,
      price,
      rating,
      quantity,
      des,
      picture,
    };
    fetch("http://localhost:5000/kidsTruck", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          window.alert("Data Added");
          form.reset();
        }
      });
  };

  return (
    <div>
      <form onSubmit={handlePostData} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div>
              <label className="font-medium">Picture URL</label>
              <input
                type="text"
                name="url"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Seller Name</label>
              <input
                type="text"
                name="sellerName"
                defaultValue={user?.displayName} 
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <select
                name="category_name"
                className="select select-bordered w-full  mt-2 px-3 py-2"
              >
                <option disabled selected>
                  Sub-Category
                </option>
                <option value="Dumper">Dumper</option>
                <option value="Monster Truck">Monster Truck</option>
                <option value="Marcedes Actors">Marcedes Actors</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <label className="font-medium">Price</label>
              <input
                type="number"
                name="price"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Rating</label>
              <input
                type="number"
                name="rating"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium"> Quantity</label>
              <input
                type="number"
                name="quantity"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium"> Seller Email</label>
              <input
                type="email"
                name="sellerEmail"
                defaultValue={user?.email}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
          </div>
        </div>
        <div>
          <label className="font-medium">Description</label>
          <input
            type="text"
            name="des"
            required
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
          Create account
        </button>
      </form>
    </div>
  );
};

export default AddToy;
