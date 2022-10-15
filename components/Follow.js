import Image from "next/image";
const Follow = ({ follow }) => {
  return (
    <div className="hover:cursor-pointer px-4 py-2 flex items-center justify-between hover:bg-[#1D1F23] transition duration-200">
      <div className="flex items-center space-x-3">
        <Image
          className="rounded-full"
          width={50}
          height={50}
          layout="fixed"
          src={follow.img}
          alt=""
        ></Image>
        <div>
          <h6 className="text-white text-md font-bold">{follow.name}</h6>
          <p className=" text-sm font-medium text-gray-500 ">
            @{follow.userName}
          </p>
        </div>
      </div>
      <button className="bg-white items-center text-black px-4 py-2 rounded-full outline-none inline-block font-bold shadow-md hover:brightness-95 text-sm">
        Follow
      </button>
    </div>
  );
};

export default Follow;
