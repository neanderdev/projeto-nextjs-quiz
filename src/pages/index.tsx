import { useRouter } from 'next/router';
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
  const router = useRouter();

  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock);
  const [respostasCertas, setRespostasCerta] = useState(0);

  async function carregarIdsDasQuestoes() {
    const resposta = await fetch(`${BASE_URL}/questionario`);
    const idsDasQuestoes = await resposta.json();

    setIdsDasQuestoes(idsDasQuestoes);
  }

  const carregarQuestao = useCallback(async (idQuestao: number) => {
    const resposta = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resposta.json();

    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);

    setQuestao(novaQuestao);
  }, []);

  useEffect(() => {
    carregarIdsDasQuestoes();
  }, []);

  useEffect(() => {
    if (idsDasQuestoes.length > 0) {
      carregarQuestao(idsDasQuestoes[0]);
    }
  }, [idsDasQuestoes, carregarQuestao]);

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida);

    const acertou = questaoRespondida.acertou;

    setRespostasCerta(respostasCertas + (acertou ? 1 : 0));
  }

  function idDaProximaPergunta() {
    const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1;

    return idsDasQuestoes[proximoIndice];
  }

  function irPraProximoPasso() {
    const proximoId = idDaProximaPergunta();

    if (proximoId) {
      irParaProximaQuestao(proximoId);
    } else {
      finalizar();
    }
  }

  function irParaProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId);
  }

  function finalizar() {
    router.push({
      pathname: '/resultado',
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas,
      },
    });
  }

  return (
    questao
      ? <Questionario
        questao={questao}
        ultima={idDaProximaPergunta() === undefined}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
      />
      : false
  )
}
