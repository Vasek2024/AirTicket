import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="header flex gap-[34px] items-center mt-[50px] mb-[20px]">
      <img
        className="logo w-[100px] h-[80px] max-screen-tablet:w-[57px] max-screen-tablet:h-[46px] max-screen-tablet:m-auto"
        src={logo}
        alt="logo"
      />
      <h1 className="header-title text-2xl font-bold text-primary-purple max-screen-tablet:hidden">
        Поиск авиабилетов
      </h1>
    </header>
  );
};

export default Header;
