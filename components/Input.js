const Input = ({ label, value, onChange }) => {
  return (
    <label className="w-full block border border-gray-200 rounded-lg pt-6 pb-2 px-4 relative text-gray-400 font-sans my-2">
      <input
        value={value}
        className="w-full outline-none  peer relative  pl-3 rounded-md text-sm  focus:border-sky-500 space-y-3  font-sans "
        onChange={onChange}
        // type="password"
      />
      <div
        className={`absolute w-full h-full left-4 top-0 flex ${
          !value ? "items-center text-base" : "text-sm pt-1"
        } text-gray-500 peer-focus:items-start peer-focus:text-sm peer-focus:pt-1`}
      >
        <div>{label}</div>
      </div>
    </label>
  );
};

export default Input;
