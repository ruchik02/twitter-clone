import { BsSearch } from "react-icons/bs";
export const Widget = () => {
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
        <div className="w-[90%] xl:w-[75%] sticky top-0 bg-transparent py-1.5 z-50">
            <div className="flex items-center p-3 rounded-full relative">
                <BsSearch className="h-5 z-50 text-gray-500"/>
                <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-transparent bg-gray-600 " type="text" placeholder="Search Twitter" />
            </div>
        </div>
    </div>
  );
};
