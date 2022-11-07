import MIKADO_URLS from "../../pages/api/mikado";
import { MikadoCodeSearchRes } from "../../types/api/mikado";

export enum FromStock {
  FROM_STOCK_ONLY = "FromStockOnly",
  FROM_STOCK_AND_BY_ORDER = "FromStockAndByOrder",
}

export interface MikadoReqCodeSearch {
  code: string;
  from: FromStock;
}

const MikadoService = {
  async codeSearch(body: MikadoReqCodeSearch) {
    const res = await fetch(MIKADO_URLS.code_search, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.dir(data);
    return data as MikadoCodeSearchRes;
  },
};

export default MikadoService;
