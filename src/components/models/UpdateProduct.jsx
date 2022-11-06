import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import productRequest from "../../api/product/product.request";
import Swal from "sweetalert2";

const UpdateProduct = ({ order }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [itemName, setitemName] = useState("");
  const [title, settitle] = useState("");
  const [itemBrand, setitemBrand] = useState("");
  const [image, setimage] = useState("");
  const [availableQty, setavailableQty] = useState("");
  const [description, setdescription] = useState("");
  const [measuringUnit, setmeasuringUnit] = useState("");
  const [price, setprice] = useState(0);
  const [inStock, setinStock] = useState(false);

  const fetchProduct = () => {
    productRequest.getProductsForSupplier().then((res) => {
      console.log(res.data);
      setorders(res.data);
    });
  };

  useEffect(() => {
    if ({ order }) {
      setitemName(order.itemName);
      settitle(order.title);
      setitemBrand(order.itemBrand);
      setimage(order.image);
      setavailableQty(order.availableQty);
      setdescription(order.description);
      setmeasuringUnit(order.measuringUnit);
      setprice(order.price);
    }
  }, [order]);

  const handleSubmit = (e) => {
    e.preventDefault();
    productRequest
      .updateProduct(
        {
          itemName,
          title,
          itemBrand,
          image,
          availableQty,
          description,
          measuringUnit,
          price,
          inStock: true,
        },
        order._id,
      )
      .then((res) => {
        console.log(res);
        Swal.fire(
          `Product Updated Successfully!`,
          "Click Ok to continue",
          "success",
        );
        fetchProduct();
      })
      .catch((err) => {
        Swal.fire("Error!", "Something went wrong", "error");
      });
  };

  return (
    <>
      <div
        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
        onClick={() => setShowModal(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div>
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Update Product</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

                <div class="flex items-center justify-center p-12">
                  <div class="w-full px-3 ">
                    <form onSubmit={handleSubmit}>
                      <div class="mb-1">
                        <div class="mb-3 " style={{ width: "600px" }}>
                          <label
                            for="exampleFormControlInput1"
                            class="form-label inline-block mb-1 text-gray-700"
                            style={{ marginRight: "500px" }}>
                            Item Name
                          </label>
                          <input
                            type="text"
                            class="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                            id="exampleFormControlInput1"
                            placeholder="Enter Item Name"
                            value={itemName}
                            onChange={(e) => setitemName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="mb-1 ">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label inline-block mb-1 text-gray-700"
                          style={{ marginRight: "560px" }}>
                          title
                        </label>
                        <input
                          type="text"
                          class="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                          id="exampleFormControlInput1"
                          placeholder="Enter Item Name"
                          value={title}
                          onChange={(e) => settitle(e.target.value)}
                        />
                      </div>

                      <div class="w-full">
                        <div class="mb-1">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label inline-block mb-1 text-gray-700"
                            style={{ marginRight: "500px" }}>
                            Measuring Unit
                          </label>
                          <select
                            class="form-select appearance-none
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            aria-label="Default select example"
                            onChange={(e) => setmeasuringUnit(e.target.value)}>
                            <option selected>select</option>
                            <option value="Kg">Killogram(Kg)</option>
                            <option value="g">gram(g)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <div class="mb-1">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label inline-block mb-1 text-gray-700"
                            style={{ marginRight: "560px" }}>
                            ItemBrand
                          </label>
                          <input
                            type="text"
                            class="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                            id="exampleFormControlInput1"
                            placeholder="Enter Item Name"
                            value={itemBrand}
                            onChange={(e) => setitemBrand(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <div class="mb-1">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label inline-block mb-1 text-gray-700"
                            style={{ marginRight: "560px" }}>
                            Qantity
                          </label>
                          <input
                            type="number"
                            class="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                            id="exampleFormControlInput1"
                            placeholder="Enter Qantity"
                            value={availableQty}
                            onChange={(e) => setavailableQty(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="mb-1">
                        <label
                          for="message"
                          class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400"
                          style={{ marginRight: "560px" }}>
                          Description
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter a Description"
                          value={description}
                          onChange={(e) =>
                            setdescription(e.target.value)
                          }></textarea>
                      </div>

                      <div>
                        <div class="mb-1">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label inline-block mb-1 text-gray-700"
                            style={{ marginRight: "560px" }}>
                            price
                          </label>
                          <input
                            type="number"
                            class="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                            id="exampleFormControlInput1"
                            placeholder="Enter Qantity"
                            value={price}
                            onChange={(e) => setprice(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="w-full">
                        <div class="mb-1">
                          <label
                            for="hobby"
                            class="mb-1  text-base font-medium text-[#07074D]"
                            style={{ marginRight: "500px" }}>
                            Product Image
                          </label>
                          <br />
                          <FileBase
                            type="file"
                            id="img"
                            multiple={false}
                            onDone={({ base64 }) => setimage(base64)}
                            required
                          />
                          <br />
                        </div>
                      </div>

                      <div className="flex">
                        <button
                          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                          type="submit">
                          Submit
                        </button>

                        <button
                          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none ml-2"
                          onClick={() => setShowModal(false)}>
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default UpdateProduct;
