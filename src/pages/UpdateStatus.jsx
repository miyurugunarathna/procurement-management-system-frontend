import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cover from "../assets/images/supply.jpg";

const UpdateStatus = () => {
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
              style={{ height: "150px", width: "800px" }}>
              <h2>Sample</h2>
            </div>
            <br />

            <div
              class="rounded-lg shadow-lg bg-white max-w-m"
              style={{ height: "150px", width: "800px", marginTop: "50px" }}>
              <h2>Sample</h2>
            </div>

            <div
              class="rounded-lg shadow-lg bg-white max-w-m"
              style={{ height: "150px", width: "800px", marginTop: "50px" }}>
              <h2>Sample</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStatus;
