import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cover from "../assets/images/supply.jpg";
import UpdateOrderRequest from "../components/models/UpdateOrderRequest";
import Swal from "sweetalert2";
import orderRequest from "../api/Order/order.request";

const PlacedOrderRequest = () => {
  const [orders, setorders] = useState([]);

  useEffect(() => {
    orderRequest.getOrdersforManager().then((res) => {
      console.log(res.data);
      setorders(res.data);
    });
  }, []);

  const deleteOrder = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Please confirm whether you intend to delete this Order`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
        const msgText = err.message.split("Error: ")[1];
        Swal.fire("Error!", msgText, "error");
      });
  };

  return (
    <div>
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header />
        <Sidebar />
        <div
          class="h-full   pt-14 pb-14 md:ml-64"
          style={{
            backgroundImage: `url(${Cover})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "1200px",
          }}>
          <div
            class="flex justify-center"
            style={{ marginRight: "40px", display: "grid" }}>
            {!orders.length ? (
              <div style={{ width: "1300px" }}>
                <div
                  style={{
                    background: "lightblue",
                    marginLeft: "150px",
                    marginTop: "150px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}>
                  <h4>No Order Purchase Created !</h4>
                  <p>No Orders Were Found.</p>
                </div>
              </div>
            ) : (
              orders.map((chi) => (
                <div
                  class="rounded-lg shadow-lg bg-white max-w-m"
                  style={{
                    height: "170px",
                    width: "800px",
                    marginBottom: "50px",
                  }}>
                  <br />

                  <div style={{ display: "flex" }}>
                    <div>
                      <p style={{ marginLeft: "30px", paddingTop: "30px" }}>
                        Order ID
                      </p>

                      <br />
                    </div>
                    <div
                      style={{
                        borderLeft: "6px solid black",
                        height: "140px",
                        marginLeft: "50px",
                      }}></div>

                    <div style={{ display: "flex" }}>
                      <div style={{ marginLeft: "30px" }}>
                        <p>Placed By : sample name</p>
                        <br />
                        <p>Supplier : sample name</p>
                        <br />
                        <p>Order Status : Pending</p>
                        <br />
                      </div>
                      <div style={{ display: "flex" }}>
                        <div style={{ marginLeft: "150px", display: "flex" }}>
                          <p style={{ paddingRight: "20px" }}>Sample Date</p>
                          <UpdateOrderRequest />
                          <div
                            class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                            onClick={deleteOrder}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacedOrderRequest;
