import React, { useState, useEffect } from "react";
import orderRequest from "../../api/Order/order.request";
import Swal from "sweetalert2";

const UpdateStatusModel = ({ order }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [approval, setapproval] = useState("");

  const fetchOrder = () => {
    orderRequest
      .getOrders()
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    orderRequest
      .updateOrderRequest(
        {
          approval,
        },
        order._id,
      )
      .then((res) => {
        console.log(res);
        Swal.fire(
          `Purchase Order Created Successfully!`,
          "Click Ok to continue",
          "success",
        );
        fetchOrder();
      })
      .catch((err) => {
        Swal.fire("Error!", "Something went wrong", "error");
      });
  };

  return (
    <>
      <button
        className=" text-black  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 max-w-[20rem]"
        type="button"
        onClick={() => setShowModal(true)}>
        Update Status
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div>
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Approve Order</h3>
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
                  <div class="w-full px-3 " style={{ width: "500px" }}>
                    <form onSubmit={handleSubmit}>
                      <div class="mb-3">
                        <label
                          for="guest"
                          class="mb-3 block text-base font-medium text-[#07074D]">
                          Status
                        </label>
                        <select
                          id="countries"
                          class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                          onChange={(e) => setapproval(e.target.value)}>
                          <option value="Select">Select </option>
                          <option value="PENDING">PENDING</option>
                          <option value="REJECTED">REJECTED</option>
                          <option value="APPROVED">APPROVED</option>
                        </select>
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

export default UpdateStatusModel;
