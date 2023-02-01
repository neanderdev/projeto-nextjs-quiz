import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(1, "Qual time foi campeão da Supercopa do Brasil de 2023?", [
    RespostaModel.errada("Flamengo"),
    RespostaModel.errada("Ibis"),
    RespostaModel.errada("Santos"),
    RespostaModel.certa("Palmeiras"),
  ]),
  new QuestaoModel(
    2,
    "Qual time foi campeão da Libertadores da América de 2022?",
    [
      RespostaModel.errada("Palmeiras"),
      RespostaModel.errada("Ibis"),
      RespostaModel.errada("Santos"),
      RespostaModel.certa("Flamengo"),
    ]
  ),
];

export default questoes;
