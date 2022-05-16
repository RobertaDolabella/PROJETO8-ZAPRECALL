import React from 'react';
import Conclusion from './Conclusion';
import '../assets/Pages.css'
import logo from '../assets/images/image1.jpg'

function Questions(
    { questionCover,
        question,
        answer,
        index }
) {
    const [on, setOn] = React.useState("cover");
    function FliptheCard(element) {
        console.log("entou no flip")
        console.log(on)
        if (element === "quest") {
            setOn("quest")
            console.log(on)
        }
        if (element === "cover") {
            setOn("cover")
        }
        if (element === "ans") {
            setOn("ans")
        }
    }

    const [zap, setZap] = React.useState("off");
    function CardsPlayed(element) {
        setZap(element)
        setOn("over")
        console.log('foi')
        List(element)

    }
    let lista = []

    function List(element) {

        const [count, SetCount] = React.useState(0)
        SetCount(count + 1)
        lista.push(element)
        console.log(lista)
    }

    return (
        <div className='container'>
        <div>
            <div className={on === "cover" ? "on pergunta" : "off pergunta"}>
                {questionCover}
                <button onClick={() => FliptheCard("quest")}><ion-icon className="play-outline" name="play-outline"></ion-icon></button>
            </div>
            <div className={on === "quest" ? "on pergunta" : "off pergunta"}>
                {question}
                <button onClick={() => FliptheCard("ans")}><ion-icon name="reload-outline"></ion-icon></button>
            </div>
            <div className={on === "ans" ? "on resposta" : "off resposta"}>
                {answer}
                <div className="buttons-resposta">
                    <button className='button-nao-lembrei' onClick={() => CardsPlayed("pergunta nao-lembrei", index)}>Não lembrei </button>
                    <button className="button-quase-nao-lembrei" onClick={() => CardsPlayed("pergunta quase-nao-lembrei", index)}>Quase não lembrei </button>
                    <button className='button-zap' onClick={() => CardsPlayed("pergunta zap", index)}>Zap!</button>
                </div>
            </div>
            <div className={zap}>
                {questionCover}
            </div>
        </div>
        </div>

    )
}

export default function FlashCards(count,setCount) {

    const questiontoShuffle = [
        {
            question: "O que é JSX?",
            answer: "R: Uma extensão de linguagem do JavaScript",

        },
        {
            question: "O React é __ ",
            answer: "R: uma biblioteca JavaScript para construção de interfaces",
        },
        {
            question: "Componentes devem iniciar com __ ",
            answer: "R: letra maiúscula",
        },
        {
            question: "Podemos colocar __ dentro do JSX ",
            answer: "R: expressões",
        },
        {
            question: "O ReactDOM nos ajuda __ ",
            answer: "R: interagindo com a DOM para colocar componentes React na mesma",
        },
        {
            question: "Usamos o npm para __ ",
            answer: "R: gerenciar os pacotes necessários e suas dependências",
        },
        {
            question: "Usamos props para __",
            answer: "R: passar diferentes informações para componentes",
        },
        {
            question: "Usamos estado (state) para __",
            answer: "R: dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        }]

    let questionsShuflled = questiontoShuffle.sort(() => Math.random() - 0.5)

    const questionCards = [
        {
            questionCover: 'Pergunta 1',
            question: questionsShuflled[0].question,
            answer: questionsShuflled[0].answer,
            i: "off",
            container: "container-pergunta"

        },
        {
            questionCover: 'Pergunta 2',
            question: questionsShuflled[1].question,
            answer: questionsShuflled[1].answer,
            i: "off",
            container: "container-pergunta"
        },
        {
            questionCover: 'Pergunta 3',
            question: questionsShuflled[2].question,
            answer: questionsShuflled[2].answer,
            i: "off",
            container: "container-pergunta"
        },
        {
            questionCover: 'Pergunta 4',
            question: questionsShuflled[3].question,
            answer: questionsShuflled[3].answer,
            i: "off",
            container: "container-pergunta"
        }]

    return (
        <div className='FlashCards Page'>
            <h1><img src={logo} />ZapRecall</h1>
            {questionCards.map(element => <Questions
                container={element.container}
                questionCover={element.questionCover}
                question={element.question}
                answer={element.answer}
            />)}
        </div>
    )
}