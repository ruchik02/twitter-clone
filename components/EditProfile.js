import Link from "next/link";
import React from "react";

const EditProfile = ({ name, username }) => {
  return (
    <>
      <div class="h-full mt-56">
        <div class="border-b-2 block md:flex">
          <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
            <div class="flex justify-between">
              <span class="text-xl font-semibold block">Ruchika Profile</span>
              <Link
                href={{
                  pathname: "/profile",
                  query: {
                    name: name,
                    username: username,
                  },
                }}
              >
                <a class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">
                  Save
                </a>
              </Link>
            </div>
            <div className="rounded shadow p-6 mt-3">
              <div className="pt-5">
                <label
                  for="name"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  Location
                </label>
                <div class="flex">
                  <input
                    disabled
                    id="username"
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    value="Location"
                  />
                </div>
              </div>
              <div className="pt-5">
                <label
                  for="name"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  DOB
                </label>
                <div class="flex">
                  <input
                    disabled
                    id="username"
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="date"
                    value="Birthday"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
            <div class="rounded mt-10 shadow p-6">
              <div class="pb-6">
                <label
                  for="name"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  Bio
                </label>
                <div class="flex">
                  <input
                    disabled
                    id="username"
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    value="Bio"
                  />
                </div>
              </div>
              <div class="pb-4">
                <label
                  for="about"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  Website
                </label>
                <input
                  disabled
                  id="email"
                  class="border-1  rounded-r px-4 py-2 w-full"
                  type="text"
                  value="Website"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
