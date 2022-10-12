import Image from "next/image";
const Follow = ({ follow }) => {
  return (
    <div className="hover:cursor-pointer px-2 py-2 hover:bg-[#1D1F23] transition duration-200">
      <div>
        <div className=" flex items-center justify-around">
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
        <button className="bg-white items-center text-black px-2 rounded-full outline-none inline-block font-bold shadow-md hover:brightness-95 text-lg">
          Follow
        </button>
      </div>
      </div>
    </div>
  );
};

export default Follow;
