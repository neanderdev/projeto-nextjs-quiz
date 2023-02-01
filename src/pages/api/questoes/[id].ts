import type { NextApiRequest, NextApiResponse } from "next";

import questoes from "../bancoDeQuestoes";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(questoes[0].converterParaObjeto());
}
