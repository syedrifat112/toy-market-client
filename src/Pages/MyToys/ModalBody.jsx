import React from "react";

const ModalBody = ({toyData , handleConfirm}) => {
    const { price,rating,des,picture, name, quantity, _id } = toyData;

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div>
                  <label className="font-medium">Picture URL</label>
                  <input
                    type="text"
                    name="url"
                    required
                    placeholder={picture}
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder={name}
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="font-medium">Price</label>
                  <input
                  placeholder={price}
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
                    placeholder={rating}
                    name="rating"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium"> Quantity</label>
                  <input
                    type="number"
                    placeholder={quantity}
                    name="quantity"
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
                placeholder={des}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <button onClick={ ()=>handleConfirm(_id)} className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Update Data 
            </button>
          </form>
          <div className="modal-action">
            <label  htmlFor="my-modal-6" className="btn">
              Skip Update
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBody;
