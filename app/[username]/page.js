import React from "react";

const Username = ({ params }) => {
  return (
    <>
      {" "}
      <div className="cover w-full relative ">
        <img
          className="object-cover w-full h-[350px]  "
          src="/threebeans.jpg"
          alt=""
        />
        <div className="absolute -bottom-12 border-white rounded-lg  border-4 right-[47%]">
          <img className="w-20" src="threebeansProfile.jpg " alt="" />
        </div>
      </div>
      <div className="info flex justify-center flex-col items-center  my-12">
        <div className="font-bold text-lg mb-2">@{params.username}</div>
        <div className="text-slate-400 mb-2">
          Developer for all over the world!!
        </div>
        <div className="text-slate-400 mb-2">
          100 members . 30 post . $400/release
        </div>
        <div className="payment flex gap-3 w-[80%]">
          <div className="supporters w-1/2 rounded-lg px-4 py-2 bg-slate-900">
            <h2 className="my-2 font-bold text-2xl">Supporters</h2>
            {/* show list of all the supporters as a leaderboard */}
            <ul className="mx-4">
              <li className="mb-2 items-center  flex gap-2">
                <img width={33} src="/avatar.gif" alt="userAvatar" />
                <span>Subham donated <span className="text-green-500 font-bold">$23</span> with a message "i supporters you bro❤️"</span>
              </li>
              <li className="mb-2">Subham donated $23 with a message ""</li>
              <li className="mb-2">Subham donated $23 with a message ""</li>
              <li className="mb-2">Subham donated $23 with a message ""</li>
              <li className="mb-2">Subham donated $23 with a message ""</li>
              <li className="mb-2">Subham donated $23 with a message ""</li>
              <li className="mb-2">Subham donated $23 with a message ""</li>
              <li className="mb-2">Subham donated $23 with a message ""</li>
              <li className="mb-2">Subham donated $23 with a message ""</li>
              <li className="mb-2">Subham donated $23 with a message ""</li>
            </ul>
          </div>
          <div className="makePayment  w-1/2 rounded-lg px-4 py-2 bg-slate-900">
            <h2 className="text-2xl font-bold my-5">Make a payment</h2>
            <div className="flex gap-2  items-center  flex-col">
              <input
                className="w-full p-3 rounded-lg bg-slate-800 "
                placeholder="Enter Name"
                type="text"
              />
              <input
                className="w-full p-3 rounded-lg bg-slate-800 "
                placeholder="Enter Message"
                type="text"
              />
              <input
                className="w-full p-3 rounded-lg bg-slate-800 "
                placeholder="Enter Amount"
                type="text"
              />
              <button
                type="button"
                className="text-white  text-lg bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg  px-5 py-2 text-center me-2 "
              >
                Pay
              </button>
            </div>
            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg">Pay $10</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $20</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
