import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cover from "../assets/images/supply.jpg";

const DeliveryAdvice = () => {
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
            <div class="overflow-x-auto ml-10">
              <div class="w-full lg:w-5/6">
                <div class="bg-white shadow-md rounded my-6">
                  <table class="min-w-max w-full table-auto">
                    <thead>
                      <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-left">ChildID</th>
                        <th class="py-3 px-6 text-left">ChildName</th>
                        <th class="py-3 px-6 text-center">MedicineName</th>
                        <th class="py-3 px-6 text-center">Morning</th>
                        <th class="py-3 px-6 text-center">Evening</th>
                        <th class="py-3 px-6 text-center">beforeAfterMeal</th>
                        <th class="py-3 px-6 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody class="text-gray-600 text-sm font-light">
                      <tr class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="mr-2"></div>
                            <span class="font-medium">test</span>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="mr-2"></div>
                            <span class="font-medium">test</span>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="mr-2"></div>
                            <span class="font-medium">test</span>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="mr-2"></div>
                            <span class="font-medium">test</span>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="mr-2"></div>
                            <span class="font-medium">test</span>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="mr-2"></div>
                            <span class="font-medium">test</span>
                          </div>
                        </td>
                        <td class="py-3 px-6 ">
                          <div class="flex item-center justify-center">
                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAdvice;
