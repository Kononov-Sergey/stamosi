import React, { ChangeEvent, useState } from "react";
import type { NextPage } from "next";

import { useQuery } from "react-query";
import Input from "../components/header/UI/Input";
import MikadoService, { FromStock } from "../app/services/Mikado";

const Home: NextPage = () => {
  const [searchInputVal, setSearchInputVal] = useState<string>("");

  const onChangeSearchInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputVal(event.target.value);
  };

  const { data, refetch } = useQuery(
    "mikado",
    () =>
      MikadoService.codeSearch({
        code: searchInputVal,
        from: FromStock.FROM_STOCK_ONLY,
      }),
    { refetchOnWindowFocus: false, enabled: false }
  );
  return (
    <main className="font-mulish pt-14 flex justify-center ">
      <Input
        className="mt-4"
        label="Введите название детали"
        placeholder="tc-3456"
        onChange={onChangeSearchInputHandler}
        value={searchInputVal}
      />
      <button type="button" onClick={() => refetch()}>
        click me
      </button>
      <h1>{data && data.Code_List.Code_Search.text}</h1>
    </main>
  );
};

export default Home;
