import { useState } from 'react';

import Questao from '../components/Questao';

import QuestaoModel from '../model/questao';
import RespostaModel from '../model/resposta';

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Laranja'),
  RespostaModel.certa('Azul'),
]);

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);

  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice));
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Questao
        valor={questao}
        respostaFornecida={respostaFornecida}
      />
    </div>
  )
}
