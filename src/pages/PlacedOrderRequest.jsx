import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cover from "../assets/images/supply.jpg";

const PlacedOrderRequest = () => {
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
            <div
              class="rounded-lg shadow-lg bg-white max-w-m"
              style={{ height: "170px", width: "800px", marginBottom: "50px" }}>
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
                  <div style={{ marginLeft: "150px" }}>
                    <p>Sample Date</p>
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div
              class="rounded-lg shadow-lg bg-white max-w-m"
              style={{ height: "170px", width: "800px", marginBottom: "50px" }}>
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
                  <div style={{ marginLeft: "150px" }}>
                    <p>Sample Date</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="rounded-lg shadow-lg bg-white max-w-m"
              style={{ height: "170px", width: "800px", marginBottom: "50px" }}>
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
                  <div style={{ marginLeft: "150px" }}>
                    <p>Sample Date</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacedOrderRequest;
