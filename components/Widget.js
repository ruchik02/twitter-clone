import { BsSearch } from "react-icons/bs";
import Follow from "./Follow";
import News from "./News";
import FooterFollow from "../components/FooterFollow";
export const Widget = () => {
  const news = [
    {
      id: "1",
      article: "Entertainment . Live",
      source: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
    },
    {
      id: "2",
      article: "Politics . Trending",
      source: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "3",
      article: "#ixigoNikLoSale",
      source: "Get upto 30% off on the flights with ixigo .",
    },
    {
      id: "4",
      article: "Sports . yesterday",
      source: "Lorem ipsum dolor sit amet,.",
      img: "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];
  const follow = [
    {
      id: "1",
      name: "Vanshika Garg",
      userName: "vanshika_garg17",
      img: "/user1.jpg",
    },
    {
      id: "2",
      name: "Rajat",
      userName: "Rajatrajat",
      img: "/user2.jpg",
    },
    {
      id: "3",
      name: "Ishan Sharma",
      userName: "Ishansharma4321",
      img: "/user3.jpg",
    },
    {
      id: "4",
      name: "Namita",
      userName: "namitasharma",
      img: "/user4.jpg",
    },
  ];

  return (
    <>
      <div className="xl:w-[450px] hidden lg:inline ml-8 space-y-5">
        <div className="w-[90%] xl:w-3/4 sticky top-0 bg-transparent py-1.5 z-50">
          <div className="flex items-center p-3 rounded-full relative">
            <BsSearch className="h-5 z-50 text-gray-500" />
            <input
              className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-transparent bg-gray-600 "
              type="text"
              placeholder="Search Twitter"
            />
          </div>
        </div>
        <div className="text-gray-700 space-y-3 bg-zinc-900 rounded-xl pt-2 w-10/12 xl:w-3/4">
          <h4 className="text-white pl-3 px-2 py-1 font-extrabold text-xl">
            What's happening
          </h4>
          {news.map((news) => (
            <News key={news.id} news={news} />
          ))}
          <div className=" hover: cursor-pointer hover:bg-zinc-900 transition duration-200 flex items-center space-x-1 space-y-2 py-4">
            <button className="text-sky-500  pl-4 ">Show more</button>
          </div>
        </div>
        <div className="flex flex-col rounded-xl w-10/12 xl:w-3/4 space-y-2 bg-zinc-900 ">
          <h4 className="text-white font-extrabold text-xl px-4 mt-2 py-2">
            Who to follow
          </h4>
          {follow.map((follow) => (
            <Follow key={follow.id} follow={follow} />
          ))}
          <div className=" hover: cursor-pointer rounded-xl  hover:bg-zinc-900 transition duration-200 flex items-center">
            <button className="text-sky-500 pl-4 ">Show more</button>
          </div>
        </div>
        <FooterFollow />
      </div>
    </>
  );
};
