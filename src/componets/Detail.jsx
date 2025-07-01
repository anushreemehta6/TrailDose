import React, { useState } from 'react';
import Navbar from './Navbar';

function Detail() {
  const existingUserInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [firstName, setFirstName] = useState(existingUserInfo?.firstName || "");
  const [lastName, setLastName] = useState(existingUserInfo?.lastName || "");
  const [selectedRole, setSelectedRole] = useState(existingUserInfo?.role || "");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const roles = [
    {
      title: 'Principal Investigator (PI)',
      desc: 'Registers, manages, and updates clinical trials on-chain.'
    },
    {
      title: 'Verifier / Ethics Reviewer',
      desc: 'Reviews submitted trials and flags them as verified or not.'
    },
    {
      title: 'Public Viewer',
      desc: 'Searches and views publicly available trial data and documents.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      role: selectedRole
    };

    localStorage.setItem('userInfo', JSON.stringify(userData));

    if (selectedRole === "Principal Investigator (PI)") {
      window.location.href = "/dashboard/pi";
    } else if (selectedRole === "Verifier / Ethics Reviewer") {
      window.location.href = "/dashboard/verifier";
    } else {
      window.location.href = "/dashboard/viewer";
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-sm mx-auto flex flex-col gap-4 m-4 p-4 bg-[#cfd8cec1] rounded-sm">
        <div className="relative z-0">
          <input
            type="text"
            id="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={!!existingUserInfo}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="first_name"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First Name
          </label>
        </div>

        <div className="relative z-0">
          <input
            type="text"
            id="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            disabled={!!existingUserInfo}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="last_name"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last Name
          </label>
        </div>

        <div className="relative">
          <button
            onClick={() => {
              if (!existingUserInfo?.role) setDropdownOpen(!dropdownOpen);
            }}
            disabled={!!existingUserInfo?.role}
            className={`text-white ${existingUserInfo?.role ? "bg-gray-400 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"} focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 inline-flex items-center`}
          >
            {selectedRole || "Select role"}
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {dropdownOpen && (
            <ul className="absolute z-10 mt-2 w-64 bg-white border rounded-lg shadow-lg text-sm">
              {roles.map((role, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedRole(role.title);
                    setDropdownOpen(false);
                  }}
                >
                  <div className="font-medium text-gray-900">{role.title}</div>
                  <p className="text-xs text-gray-500">{role.desc}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {!existingUserInfo?.role && (
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 inline-flex items-center"
          >
            Submit
          </button>
        )}

        <button
          onClick={() => {
            localStorage.removeItem("userInfo");
            window.location.reload();
          }}
          className="mt-4 text-sm text-red-500 underline"
        >
          Reset & choose role again
        </button>
      </div>
    </>
  );
}

export default Detail;
