import { useRouter } from 'next/router';

import styles from '../styles/Resultado.module.css';

export default function Resultado() {
    const router = useRouter();

    const total = Number(router.query.total);
    const certas = Number(router.query.certas);
    const percentual = Math.round((certas / total) * 100);

    return (
        <div>
            <h1>Resultado Final</h1>

            <div>{total}</div>

            <div>{certas}</div>

            <div>{`${percentual}%`}</div>
        </div>
    );
}