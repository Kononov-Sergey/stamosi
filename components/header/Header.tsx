import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between p-4 bg-block-gray font-mulish fixed w-full">
      <h1 className="font-bold uppercase text-xl text-main-black">
        Stamosi.ru
      </h1>
      <nav>
        <ul className="flex gap-4">
          <li>Настройки</li>
          <li>Войти</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
