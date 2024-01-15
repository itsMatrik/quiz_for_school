import React from 'react';
import styles from './startGame.module.css'

const StartGame = ({setGameStart}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Апытанне па 16-18 параграфе</h1>
            <button className={styles.button} onClick={() => setGameStart(false)}>Начать</button>
        </div>
    );
};

export default StartGame;