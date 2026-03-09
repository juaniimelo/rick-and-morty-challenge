import { ThemeSwitch, Logo } from "../index";

export const HeaderMenu = () => {
  return (
    <header className="w-full flex justify-between items-center border-b border-app-border-gray-light px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-6 bg-app-bg-header-color">
      <div className="flex items-center justify-between w-full">
        <Logo />
        <ThemeSwitch />
      </div>
    </header>
  );
};
