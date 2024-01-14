import React from 'react';
import styles from './Result.module.css'

const Result = ({correct}) => {
    return (
        <div className={styles.root}>
            <img className={styles.img} src={'https://sportishka.com/uploads/posts/2022-11/1667444564_42-sportishka-com-p-dzheison-stetkhem-shakhmati-krasivo-42.jpg'}/>
            <div className={styles.text}>Результат: {correct} из 10</div>
            <div className={styles.text}>
                {correct === 0 ? 'ты совсем дурак что ли.. Стэтхэм теперь никогда тебя не зауважает, даже в глаза ему не смотри.' :
                    correct === 1 ? 'Чисто наугад ткнул и один раз повезло.Стэтхэм все равно тебя не уважает.' :
                        correct === 2 ? 'Стэтхэм официально выписал тебя из беларусов, можешь уже не рассчитывать на его уважение.' :
                            correct === 3 ? 'Минимальный результат для того, чтобы быть выписаным из беларусов. Стэтхэм разочарован.' :
                                correct === 4 ? 'Даже меньше середины. Стэтхэм не доволен, результат не оправдал его ожиданий.' :
                                    correct === 5 ? 'Средний результат. В любом случае братанчиком Стэтхэма ты уже не станешь.Стэтхэм был лучшего мнения о тебе.' :
                                        correct === 6 ? 'Еще бы чуть чуть, и Стэтхэм бы остался доволен. Но он разочарован.' :
                                            correct === 7 ? 'Минимальный результат для того, что бы Стэтхэм был доволен. В общем, приемлемо.' :
                                                correct === 8 ? 'Неплохо, но могло быть и лучше, Стэтхэм тобой доволен.' :
                                                    correct === 9 ? 'Не идеально конечно, но Стэтхэм все равно гордится тобой.' :
                                                        correct === 10 ? 'Стэтхэм гордится тобой, ты настоящий беларус!' : 'ты как это сломать смог'}
            </div>

        </div>
    );
};

export default Result;