import React from "react";

const Dummy = () => {
  return (
    <div className="flex flex-col gap-6 justify-between">
      {/* <!-- Test 001 --> */}
      <div className="border-b pb-5 last:pb-0 last:border-none min-h-24">
        <div className="flex justify-between">
          <span className="self-end text-sm text-gray-600">
            test 001 <span> | 34.34.234.423:34234</span>
          </span>
          <button className="bg-secondary-punchPink p-2 rounded-md hover:scale-110 h-fit ml-auto block" type="button">
            <img src="/src/assets/svgs/refresh.svg" alt="refetch" />
          </button>
        </div>
        <h1 className="text-sm text-gray-600">Uncanny Cameras</h1>

        {/* <!-- Saved Cameras Section --> */}
        <div className="flex flex-wrap gap-2 mt-2 flex-col">
          <h1>Saved Cameras</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            <span>No cameras</span>
          </div>
        </div>

        {/* <!-- UnSaved Cameras Section --> */}
        <div className="flex flex-wrap gap-2 mt-2 flex-col">
          <h1>UnSaved Cameras</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="cursor-pointer border-none">
              <div className="px-4 py-2 border border-primary-dark mb-2 rounded-md flex items-center h-12 bg">
                <span className="text-gray-500 mr-1"></span>EntryGate anpr 1 name changed
                <span className="bg-blue-500 text-white px-3 py-1 rounded-3xl hover:bg-blue-600 ml-2">+</span>
              </div>
            </button>
            <button className="cursor-pointer border-none">
              <div className="px-4 py-2 border border-primary-dark mb-2 rounded-md flex items-center h-12 bg">
                <span className="text-gray-500 mr-1"></span>ExitGate anpr 1<span className="bg-blue-500 text-white px-3 py-1 rounded-3xl hover:bg-blue-600 ml-2">+</span>
              </div>
            </button>
            <button className="cursor-pointer border-none">
              <div className="px-4 py-2 border border-primary-dark mb-2 rounded-md flex items-center h-12 bg">
                <span className="text-gray-500 mr-1"></span>hidden gate anpr 1<span className="bg-blue-500 text-white px-3 py-1 rounded-3xl hover:bg-blue-600 ml-2">+</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* This is where we split things between us */}
      <div className="border-b pb-5 last:pb-0 last:border-none min-h-24">
        <div className="flex justify-between">
          <span className="self-end text-sm text-gray-600">
            test 002 <span> | 43.32.23.4:432</span>
          </span>
          <button className="bg-secondary-punchPink p-2 rounded-md hover:scale-110 h-fit ml-auto block" type="button">
            <img src="/src/assets/svgs/refresh.svg" alt="refetch" />
          </button>
        </div>
        <h1 className="text-sm text-gray-600">Uncanny Cameras</h1>

        {/* <!-- Saved Cameras Section --> */}
        <div className="flex flex-wrap gap-2 mt-2 flex-col">
          <h1>Saved Cameras</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="cursor-pointer border-none">
              <div className="px-4 py-2 border border-primary-dark mb-2 rounded-md flex items-center h-12 bg">
                <span className="text-gray-500 mr-1">#1</span>cam 012
                <span className="bg-blue-500 text-white px-2 py-1 rounded-3xl hover:bg-blue-600 ml-2">sync</span>
              </div>
            </button>
          </div>
        </div>

        {/* <!-- UnSaved Cameras Section --> */}
        <div className="flex flex-wrap gap-2 mt-2 flex-col">
          <h1>UnSaved Cameras</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="cursor-pointer border-none">
              <div className="px-4 py-2 border border-primary-dark mb-2 rounded-md flex items-center h-12 bg">
                <span className="text-gray-500 mr-1"></span>ExitGate anpr 1<span className="bg-blue-500 text-white px-3 py-1 rounded-3xl hover:bg-blue-600 ml-2">+</span>
              </div>
            </button>
            <button className="cursor-pointer border-none">
              <div className="px-4 py-2 border border-primary-dark mb-2 rounded-md flex items-center h-12 bg">
                <span className="text-gray-500 mr-1"></span>hidden gate anpr 1<span className="bg-blue-500 text-white px-3 py-1 rounded-3xl hover:bg-blue-600 ml-2">+</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Test 003 --> */}
      <div className="border-b pb-5 last:pb-0 last:border-none min-h-24">
        <div className="flex justify-between">
          <span className="self-end text-sm text-gray-600">
            test 0003 <span> | 234.34.234.3:342</span>
          </span>
          <button className="bg-secondary-punchPink p-2 rounded-md hover:scale-110 h-fit ml-auto block" type="button">
            <img src="/src/assets/svgs/refresh.svg" alt="refetch" />
          </button>
        </div>
        <h1 className="text-sm text-gray-600">Uncanny Cameras</h1>

        {/* <!-- Saved Cameras Section --> */}
        <div className="flex flex-wrap gap-2 mt-2 flex-col">
          <h1>Saved Cameras</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            <span>No cameras</span>
          </div>
        </div>

        {/* <!-- UnSaved Cameras Section --> */}
        <div className="flex flex-wrap gap-2 mt-2 flex-col">
          <h1>UnSaved Cameras</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="cursor-pointer border-none">
              <div className="px-4 py-2 border border-primary-dark mb-2 rounded-md flex items-center h-12 bg">
                <span className="text-gray-500 mr-1"></span>EntryGate anpr 1 name changed
                <span className="bg-blue-500 text-white px-3 py-1 rounded-3xl hover:bg-blue-600 ml-2">+</span>
              </div>
            </button>
            <button className="cursor-pointer border-none">
              <div className="px-4 py-2 border border-primary-dark mb-2 rounded-md flex items-center h-12 bg">
                <span className="text-gray-500 mr-1"></span>ExitGate anpr 1<span className="bg-blue-500 text-white px-3 py-1 rounded-3xl hover:bg-blue-600 ml-2">+</span>
              </div>
            </button>
            <button className="cursor-pointer border-none">
              <div className="px-4 py-2 border border-primary-dark mb-2 rounded-md flex items-center h-12 bg">
                <span className="text-gray-500 mr-1"></span>hidden gate anpr 1<span className="bg-blue-500 text-white px-3 py-1 rounded-3xl hover:bg-blue-600 ml-2">+</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Test 004 --> */}
      <div className="border-b pb-5 last:pb-0 last:border-none min-h-24">
        <div className="flex justify-between">
          <span className="self-end text-sm text-gray-600">
            test 004 <span> | 43.43.23.23:543</span>
          </span>
          <button className="bg-secondary-punchPink p-2 rounded-md hover:scale-110 h-fit ml-auto block" type="button">
            <img src="/src/assets/svgs/refresh.svg" alt="refetch" />
          </button>
        </div>
        <h1 className="text-sm text-gray-600">Uncanny Cameras</h1>

        {/* <!-- Saved Cameras Section --> */}
        <div className="flex flex-wrap gap-2 mt-2 flex-col">
          <h1>Saved Cameras</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="cursor-pointer border-none">
              <div className="px-4 py-2 border border-primary-dark mb-2 rounded-md flex items-center h-12 bg">
                <span className="text-gray-500 mr-1">#1</span>camera 110011
                <span className="bg-blue-500 text-white px-2 py-1 rounded-3xl hover:bg-blue-600 ml-2">sync</span>
              </div>
            </button>
          </div>
        </div>

        {/* <!-- UnSaved Cameras Section --> */}
        <div className="flex flex-wrap gap-2 mt-2 flex-col">
          <h1>UnSaved Cameras</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="cursor-pointer border-none">
              <div className="px-4 py-2 border border-primary-dark mb-2 rounded-md flex items-center h-12 bg">
                <span className="text-gray-500 mr-1"></span>ExitGate anpr 1<span className="bg-blue-500 text-white px-3 py-1 rounded-3xl hover:bg-blue-600 ml-2">+</span>
              </div>
            </button>
            <button className="cursor-pointer border-none">
              <div className="px-4 py-2 border border-primary-dark mb-2 rounded-md flex items-center h-12 bg">
                <span className="text-gray-500 mr-1"></span>hidden gate anpr 1<span className="bg-blue-500 text-white px-3 py-1 rounded-3xl hover:bg-blue-600 ml-2">+</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dummy;
