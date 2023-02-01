import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import styles from '../styles/Temporizador.module.css';

interface TemporizadorProps {
    duracao: number;
    tempoEsgotado: () => void;
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                size={120}
                duration={props.duracao}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#BCE596', '#F7B801', '#ED827A', '#A30000']}
                colorsTime={[8, 5, 3, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    );
}