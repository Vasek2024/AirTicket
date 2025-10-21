import CompanyName from "./CompanyName";
import Transfers from "./Transfers";

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col min-w-[272px] gap-[40px] max-screen-tablet:flex-row max-screen-tablet:contant-start max-screen-mobile:gap-[15px] max-screen-mobile:py-[10px]">
      <Transfers />
      <CompanyName />
    </div>
  );
};

export default Sidebar;
