import { useCallback, useEffect, useState } from 'react';

import Questionario from '../components/Questionario';

import QuestaoModel from '../model/questao';
import RespostaModel from '../model/resposta';

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Laranja'),
  RespostaModel.certa('Azul'),
]);

const BASE_URL = 'http://localhost:3000/api';

export default function Home() {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState(questaoMock);

  async function carregarIdsDasQuestoes() {
    const resposta = await fetch(`${BASE_URL}/questionario`);
    const idsDasQuestoes = await resposta.json();

    setIdsDasQuestoes(idsDasQuestoes);
  }

  const carregarQuestao = useCallback(async (idQuestao: number) => {
    const resposta = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resposta.json();

    console.log(json);
  }, []);

  useEffect(() => {
    carregarIdsDasQuestoes();
  }, []);

  useEffect(() => {
    if (idsDasQuestoes.length > 0) {
      carregarQuestao(idsDasQuestoes[0]);
    }
  }, [idsDasQuestoes, carregarQuestao]);

  function questaoRespondida(questao: QuestaoModel) { }

  function irPraProximoPasso() { }

  return (
    <Questionario
      questao={questao}
      ultima={true}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  )
}
