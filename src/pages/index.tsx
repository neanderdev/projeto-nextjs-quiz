import Questao from '../components/Questao';

import QuestaoModel from '../model/questao';
import RespostaModel from '../model/resposta';

export default function Home() {
  const questaoTeste = new QuestaoModel(1, 'Melhor cor?', [
    RespostaModel.errada('Vermelha'),
    RespostaModel.errada('Verde'),
    RespostaModel.errada('Laranja'),
    RespostaModel.certa('Azul'),
  ]);

  return (
    <Questao
      valor={questaoTeste}
    />
  )
}
