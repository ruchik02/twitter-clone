import React from "react";

const Input = ({ type, id, value, onChange, placeholder }) => {
  return (
    <>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          className="relative w-72 h-12 outline-none border border-2 border-solid border-zinc-300 pl-3 rounded-md text-sm focus:border focus:border-2 focus:border-sky-500 my-1 font-sans "
        />
      </div>
    </>
  );
};

export default Input;
