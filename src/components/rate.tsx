"use client"

import React, { useState } from 'react';

function Rate() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("stats");
 
  // Function to handle tab change based on select dropdown
  const handleTabChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveTab(e.target.value);
  };
  

  return (
    <div className='py-6 px-10 bg-white w-full'>
      <div className="w-full bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* Mobile view select dropdown */}
        <div className="sm:hidden">
          <label className="sr-only">Select tab</label>
          <select
            id="tabs"
            className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleTabChange} // Adding onChange event
            value={activeTab} // Linking dropdown value to activeTab state
          >
            <option value="stats">Statistics</option>
            <option value="about">Services</option>
            <option value="faq">FAQ</option>
          </select>
        </div>

        {/* Tab buttons for desktop */}
        <ul className="  text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" role="tablist">
          <li className="w-full">
            <button
              type="button"
              className={`inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${activeTab === "stats" ? 'bg-blue-100' : ''}`}
              onClick={() => setActiveTab("stats")}
            >
              Statistics
            </button>
          </li>
          <li className="w-full">
            <button
              type="button"
              className={`inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${activeTab === "about" ? 'bg-blue-100' : ''}`}
              onClick={() => setActiveTab("about")}
            >
              Services
            </button>
          </li>
          <li className="w-full">
            <button
              type="button"
              className={`inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${activeTab === "faq" ? 'bg-blue-100' : ''}`}
              onClick={() => setActiveTab("faq")}
            >
              FAQ
            </button>
          </li>
        </ul>

        {/* Tab content */}
        <div className="border-t border-gray-200 dark:border-gray-600 ">
          <div className={`${activeTab === "stats" ? 'block' : 'hidden'} p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800`} role="tabpanel">
            {/* Statistics content */}
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                <dd className="text-gray-500 dark:text-gray-400">Public repositories</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                <dd className="text-gray-500 dark:text-gray-400">Open source projects</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
                <dd className="text-gray-500 dark:text-gray-400">Contributors</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                <dd className="text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
                <dd className="text-gray-500 dark:text-gray-400">Organizations</dd>
              </div>
            </dl>
          </div>
          <div className={`${activeTab === "about" ? 'block' : 'hidden'} p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800`} role="tabpanel">
            {/* Services content */}
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the world’s potential</h2>
            {/* List of services */}
            <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="leading-tight">Dynamic reports and statistics</span>
              </li>
              {/* Additional services */}
            </ul>
          </div>
          <div className={`${activeTab === "faq" ? 'block' : 'hidden'} p-4 bg-white rounded-lg dark:bg-gray-800`} role="tabpanel">
            {/* FAQ content */}
            <div id="accordion-flush">
              <h2 id="accordion-flush-heading-1">
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                  <span>What is e-store all about</span>
                </button>
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                  <span>knowledge is the key to success</span>
                </button>
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                  <span>educational purpose</span>
                </button>
              </h2>
              {/* Additional FAQ items */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rate;
