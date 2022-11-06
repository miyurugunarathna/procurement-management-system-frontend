import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cover from "../assets/images/supply.jpg";
import orderRequest from "../api/Order/order.request";
import Swal from "sweetalert2";

const Payment = () => {
  const [orders, setorders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    orderRequest.getOrdersforManager().then((res) => {
      console.log(res.data);
      setorders(res.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    orderRequest
      .saveOrderRequest({
        orderType,
        itemName,
        measuringUnit,
        quantity,
        description,
        supplierID,
        requiredDate,
      })
      .then((res) => {
        console.log(res);
        Swal.fire(
          `Purchase Order Created Successfully!`,
          "Click Ok to continue",
          "success",
        );
        clear();
      })
      .catch((err) => {
        Swal.fire("Error!", "Something went wrong", "error");
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
          <div class="flex justify-center" style={{ marginRight: "40px" }}>
            <div class="rounded-lg shadow-lg bg-white max-w-m">
              <h2
                style={{
                  textAlign: "center",
                  paddingTop: "20px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}>
                Payments
              </h2>
              <div
                style={{
                  width: "600px",
                  marginLeft: "30px",
                  padding: "50px",
                }}></div>
              <div>
                <div class="col">
                  <center>
                    <h3>Bills</h3>
                    <br />
                    <form onSubmit={""}>
                      <div>
                        <div className="form-billItem">
                          <input
                            onChange={handleChange("childId")}
                            value={childId}
                            type="text"
                            className="form-control"
                            placeholder="Enter Child ID"
                            required
                          />
                        </div>
                        <br />
                        <div>
                          <button className="btn btn-primary btn-block">
                            Create Bill
                          </button>
                        </div>

                        <br />
                        <br />

                        {totalBill ? (
                          <div>
                            <h4>
                              <label className="text-muted">
                                Child ID: {childIdNow}
                              </label>
                              <br /> <br />
                              <label className="text-muted">
                                Total Bill: Rs. {totalBill}
                              </label>
                            </h4>
                            <table
                              id="table"
                              class="table"
                              responsive
                              className="table table-hover"
                              style={{ marginTop: "40px", marginLeft: "20px" }}>
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Item Name</th>
                                  <th>Total Price (Rs.)</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {orders.map((orders, i) => (
                                  <tr key={i}>
                                    <th scope="row">{i + 1}</th>

                                    <td>{orders.itemName}</td>
                                    <td>{orders.quantity.toString()}</td>
                                    <td>{orders.unitPrice.toString()}</td>
                                    <td>
                                      {(
                                        orders.unitPrice * orders.quantity
                                      ).toString()}
                                    </td>
                                    <td>
                                      &nbsp;&nbsp;&nbsp;
                                      <a
                                        className=""
                                        href="#"
                                        onClick={() => deleteBill(bill._id)}>
                                        <button
                                          style={{ borderRadius: "25px" }}>
                                          Delete
                                        </button>
                                      </a>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <h4>Please Proceed!</h4>
                        )}
                      </div>
                    </form>
                    <br />
                    {totalBill ? (
                      <button
                        onClick={() => handleSubmit()}
                        className="btn btn-primary btn-block">
                        Save the Bill
                      </button>
                    ) : (
                      <h4></h4>
                    )}
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
