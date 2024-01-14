import React from 'react';
import styles from './startGame.module.css'

const StartGame = ({setGameStart}) => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={'https://live.staticflickr.com/7271/7131884899_f99efd9b76_b.jpg'}/>
            <h1 className={styles.h1}>Опрос от Джейсона Стэтхэма по белорусскому языку</h1>
            <button className={styles.button} onClick={() => setGameStart(false)}>Начать</button>
        </div>
    );
};

export default StartGame;