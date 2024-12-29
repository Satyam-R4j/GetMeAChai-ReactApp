"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const {data:session} = useSession()

  const router = useRouter();
//   const [form, set ] = useState()

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [router, session]);

  return (
    <div className="flex flex-col w-1/2 justify-center m-4 mx-auto">
      <h1 className="item-center  text-3xl mb-4 font-bold mx-auto">
        Welcome to your Dashboard
      </h1>

      <div>
        <label
          htmlFor="default-input"
          className="block mt-4 text-center  mb-1 text-xl  font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          type="text"
          id="default-input"
          className="bg-gray-50 w-1/2 mx-auto border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="default-input"
          className="block mt-4 mb-1 text-center px-4 text-xl  font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="text"
          id="default-input"
          className="bg-gray-50 w-1/2 text-lg mx-auto  border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="default-input"
          className="block mt-4 mb-1 px-4 text-xl text-center font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <input
          type="text"
          id="default-input"
          className="bg-gray-50 w-1/2 text-lg mx-auto border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="default-input"
          className="block mt-4 mb-1 px-4 text-xl text-center font-medium text-gray-900 dark:text-white"
        >
          Profile Picture
        </label>
        <input
          type="text"
          id="default-input"
          className="bg-gray-50 w-1/2 text-lg mx-auto border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="default-input"
          className="block mt-4 mb-1 px-4 text-xl text-center font-medium text-gray-900 dark:text-white"
        >
          Cover Picture
        </label>
        <input
          type="text"
          id="default-input"
          className="bg-gray-50 w-1/2 text-lg mx-auto border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="default-input"
          className="block mt-4 mb-1 px-4 text-xl text-center font-medium text-gray-900 dark:text-white"
        >
          Razorpay ID
        </label>
        <input
          type="text"
          id="default-input"
          className="bg-gray-50 w-1/2 text-lg mx-auto border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="default-input"
          className="block mt-4 mb-1 px-4 text-xl text-center font-medium text-gray-900 dark:text-white"
        >
          Razorpay Secret
        </label>
        <input
          type="text"
          id="default-input"
          className="bg-gray-50 w-1/2 text-lg mx-auto border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className=" flex justify-center">
        <button
          type="button"
          className="text-white my-3 text-lg bg-gradient-to-r w-20 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
