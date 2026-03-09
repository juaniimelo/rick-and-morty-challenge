import { ThemeSwitch, Logo } from "../index";

export const HeaderMenu = () => {
  return (
    <header className="w-full flex justify-between items-center border-b border-app-border-gray-light px-10 md:px-20 py-6 bg-app-bg-header-color">
      <div className="flex items-center justify-between w-full">
        <Logo />
        <ThemeSwitch />
      </div>
    </header>
  );
};
