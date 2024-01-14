import React from 'react';
import styles from './question.module.css'

const Question = ({question, onClickVariant}) => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>{question.title}</div>
            <ul className={styles.ul}>
                {question.variants.map(function (variant, index) {
                    return <li className={styles.li} onClick={() => onClickVariant(index)}>
                        {variant}
                    </li>
                })}
            </ul>
        </div>
    );
};

export default Question;