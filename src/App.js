import {useState} from "react";
import Question from "./components/question/question";
import Result from "./components/result/Result";
import StartGame from "./components/startGame/startGame";

function App() {

    const questions = [
        {
            title: 'На якую тэму будуць пытанні?',
            variants: ['Правапiс д i дз, т i ц', 'Правапiс спалучэнняу галосных у запазычаных словах', 'Правапiс падоужаных зычных'],
            correct: 2
        },
        {
            title: 'У якiх словах зычныя гукi звычайна не падаужаюцца?',
            variants: ['Ка(лл/л)екцыя, навак(лл/ль)ое, пiсьме(н/нн)iк', 'І(лл/ль)я, У(лл/ль)яна, Ка(сс/сь)ян, Емя(лл/ль)ян, Ю(лл/ль)ян, Ю(лл/ль)яна', 'разро(с/сс)я, нямечы(нн/н)е, рва(ц/цц)а, жы(ц/цц)я'],
            correct: 1
        },
        {
            title: 'падвоеныя літары звычайна не пішуцца:',
            variants: ['узвыша, пешу, вуголье','узбярэжа, раздолье, наваколье', 'калектыў, сума, група, калона'],
            correct: 2
        },
        {
            title: 'якiя бываюць выключэння?',
            variants: ['гамматыка, тэррыторыя, падсвечанна', 'ванна, манна, панна, бонна, мадонна', 'клiчча, пiцца, эффектыуны'],
            correct: 1
        },
        {
            title: 'Запiшыце словы правiльна: Кал..екцыя, палоз..е, дванац..аць, гдездаван..е',
            variants: ['Каллекцыя, палоззе, дванаццаць, гнездаванне', 'Калекцыя, палоззе, дванаццаць, гнездаванне', 'Калекцыя, палозье, дванаццаць, гнездаванне', 'Каллекцыя, палозье, дванаццаць, гнездаванне'],
            correct: 1
        },
        {
            title: 'У якiм становiшчы зычныя гукi могуць вымауляцца падоужана?',
            variants: ['ў становішчы паміж галоснымі', 'ў становішчы паміж зычных', 'у любым становішчы'],
            correct: 0
        },
        {
            title: 'выберыце слова, якое запісана няправільна',
            variants: ['конскi', 'любанскi', 'цянь-шанскi', 'Чэрвенскi'],
            correct: 3
        },
        {
            title: 'Запiшыце па беларускi: безжалостный поступок',
            variants: ['бязлiтасны учыннак', 'бязлiтасны учынак', 'бязжаласны учынак', 'бязжаласны учыннак'],
            correct: 1
        },
        {
            title: 'Запiшыце словы, устауляючы, для трэба, литару д або т: праяз..ны, колькас..ны, фарпос..ны',
            variants: ['праязны, колькасны, фарпосны', 'праяздны, колькастны, фарпостны', 'праяздны, колькасны, фарпосны'],
            correct: 0
        },
        {
            title: 'Як завуць нашага класнага кіраўніка?',
            variants: ['Казелька Ірына Генадзьеўна', 'Казелька Ірына Генаддзеўна', 'Казелька Ірына Генадзьеўнна', 'Сацута Аляксей Аляксандравіч'],
            correct: 0
        }
    ]

    const [correct, setCorrect] = useState(0)
    const [step, setStep] = useState(0)
    const question = questions[step]

    const onClickVariant = function (index) {
        setStep(step + 1)
        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }
    const [gameStart, setGameStart] = useState(true);

    return (
        <>
            {gameStart ? <StartGame setGameStart={setGameStart}/> : (step !== questions.length ?
                <Question question={question} onClickVariant={onClickVariant}/> : <Result correct={correct}/>)}
        </>
    );

}

export default App;
