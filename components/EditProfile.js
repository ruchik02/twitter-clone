import Link from "next/link";
import React, { useState } from "react";

const EditProfile = ({ name, username }) => {
  const [edit, setEdit] = useState(false);
  const [location, setLocation] = useState("Delhi");
  const [birthday, setBirthday] = useState("02 sep 2000");
  const [website, setWebsite] = useState("abc");
  const [bio, setBio] = useState("Doctor");
  function Edit() {
    setEdit(true);
  }
  async function Location(e) {
    e.preventDefault();
    setLocation(e.target.value);
  }
  async function Birthday(e) {
    e.preventDefault();
    setBirthday(e.target.value);
  }
  async function Website(e) {
    e.preventDefault();
    setWebsite(e.target.value);
  }
  async function Bio(e) {
    e.preventDefault();
    setBio(e.target.value);
  }

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
                onClick={Edit}
              >
                <a class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">
                  {edit ? "EDIT" : "SAVE"}
                </a>
              </Link>
            </div>
            <div className="rounded shadow shadow-black p-6 mt-3">
              <div className="pt-5">
                <label
                  for="name"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  Location
                </label>
                <div class="flex">
                  {edit ? (
                    <input
                      disabled
                      class="border-1  rounded-r px-4 py-2 w-full"
                      type="text"
                      value={location}
                      onChange={Location}
                    />
                  ) : (
                    <input
                      class="border-1  rounded-r px-4 py-2 w-full"
                      type="text"
                      value={location}
                      onChange={Location}
                    />
                  )}
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
                  {edit ? (
                    <input
                      disabled
                      class="border-1  rounded-r px-4 py-2 w-full"
                      type="date"
                      value={birthday}
                      onChange={Birthday}
                    />
                  ) : (
                    <input
                      class="border-1  rounded-r px-4 py-2 w-full"
                      type="date"
                      value={birthday}
                      onChange={Birthday}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
            <div class="rounded mt-11 shadow-black shadow p-6">
              <div class="pb-6">
                <label
                  for="name"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  Bio
                </label>
                <div class="flex">
                  {edit ? (
                    <input
                      disabled
                      class="border-1  rounded-r px-4 py-2 w-full"
                      type="text"
                      value={bio}
                      onChange={Bio}
                    />
                  ) : (
                    <input
                      class="border-1  rounded-r px-4 py-2 w-full"
                      type="text"
                      value={bio}
                      onChange={Bio}
                    />
                  )}
                </div>
              </div>
              <div class="pb-4">
                <label
                  for="about"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  Website
                </label>
                {edit ? (
                  <input
                    disabled
                    id="email"
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    value={website}
                    onChange={Website}
                  />
                ) : (
                  <input
                    id="email"
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    value={website}
                    onChange={Website}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
