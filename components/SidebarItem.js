const SidebarItem = ({ text, Icon, active }) => {
  return (
    <div className="hoverEffect flex items-center text-white justify-center xl:justify-start text-lg space-x-3">
      <Icon className="text-white h-6 w-6" />
      <span className={`${active && "font-bold"} hidden xl:inline`}>
        {text}
      </span>
    </div>
  );
};

export default SidebarItem;
