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
  new QuestaoModel(
    3,
    "Qual time foi campeão do Campeonato Brasileiro de 2022?",
    [
      RespostaModel.errada("Flamengo"),
      RespostaModel.errada("Ibis"),
      RespostaModel.errada("Santos"),
      RespostaModel.certa("Palmeiras"),
    ]
  ),
  new QuestaoModel(4, "Qual time foi campeão da Copa do Brasil de 2022?", [
    RespostaModel.errada("Flamengo"),
    RespostaModel.errada("Ibis"),
    RespostaModel.errada("Santos"),
    RespostaModel.certa("Palmeiras"),
  ]),
  new QuestaoModel(
    5,
    "Qual time foi campeão da Liga dos Campeões de 2021/2022?",
    [
      RespostaModel.errada("PSG"),
      RespostaModel.errada("Juventus"),
      RespostaModel.errada("Barcelona"),
      RespostaModel.certa("Real Madrid"),
    ]
  ),
];

export default questoes;
