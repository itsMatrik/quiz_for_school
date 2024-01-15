import React from 'react';
import styles from './Result.module.css'

const Result = ({correct}) => {
    return (
        <div className={styles.h1}>Рэзультат: {correct} из 10</div>
    );
};

export default Result;