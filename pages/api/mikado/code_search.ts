import { NextApiRequest, NextApiResponse } from "next";
import convert from "xml-js";
import { FromStock } from "../../../app/services/Mikado";
import { MikadoCodeSearchRes } from "../../../types/api/mikado";

export const BASE_MIKADO_URL = "https://mikado-parts.ru/ws1/service.asmx";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: string;
}

async function codeSearch(code: string, from: FromStock) {
  const data = await fetch(
    `${BASE_MIKADO_URL}/Code_Search?Search_Code=${code}&ClientID=${"48566"}&Password=${"microbus5a"}&FromStockOnly=${from}`
  );

  const result = await data.text();

  return result;
}

export default async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  if (!req.body) {
    res.status(400);
    res.json({ error: "missing body parts" });
  }
  if (req.method === "POST") {
    const xmlData = await codeSearch(body.code, body.from);

    const jsData = convert.xml2js(xmlData, {
      compact: true,
      ignoreAttributes: true,
      ignoreDeclaration: true,
      textKey: "text",
    }) as MikadoCodeSearchRes;

    res.json(jsData);
  }
};
