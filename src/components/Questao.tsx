import styles from '../styles/Questao.module.css';

import QuestaoModel from '../model/questao';

import Enunciado from './Enunciado';
import Temporizador from './Temporizador';
import Resposta from './Resposta';

const letras = [
    { valor: 'A', cor: '#F2C866' },
    { valor: 'B', cor: '#F266BA' },
    { valor: 'C', cor: '#85D4F2' },
    { valor: 'D', cor: '#BCE596' },
];

interface QuestaoProps {
    valor: QuestaoModel;
    tempoParaResposta?: number;
    respostaFornecida: (indice: number) => void;
    tempoEsgotado: () => void;
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor;

    function renderizarRespostas() {
        return questao.respostas.map((resposta, i) => {
            return <Resposta
                key={i.toString()}
                valor={resposta}
                indice={i}
                letra={letras[i].valor}
                corFundoLetra={letras[i].cor}
                respostaFornecida={props.respostaFornecida}
            />
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado
                texto={questao.enunciado}
            />

            <Temporizador
                duracao={props.tempoParaResposta ?? 10}
                tempoEsgotado={props.tempoEsgotado}
            />

            {renderizarRespostas()}
        </div>
    );
}