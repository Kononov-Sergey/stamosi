import React from "react";
import type { NextPage } from "next";
import Input from "../components/header/UI/Input";

const Home: NextPage = () => {
  return (
    <main className="font-mulish pt-14 flex justify-center ">
      <Input
        className="mt-4"
        label="Введите название детали"
        placeholder="tc-3456"
      />
    </main>
  );
};

export default Home;
