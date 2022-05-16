import React from 'react';
import Questions from './Questions';
import Conclusion from './Conclusion';
import '../assets/Pages.css'
import logo from '../assets/images/image1.jpg'


export default function FlashCards(on,zap, setZap,props) {

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
            i: 0

        },
        {
            questionCover: 'Pergunta 2',
            question: questionsShuflled[1].question,
            answer: questionsShuflled[1].answer,
            i: 0
        },
        {
            questionCover: 'Pergunta 3',
            question: questionsShuflled[2].question,
            answer: questionsShuflled[2].answer,
            i: 0
        },
        {
            questionCover: 'Pergunta 4',
            question: questionsShuflled[3].question,
            answer: questionsShuflled[3].answer,
            i: 0
        }]

    return (
        <div className='FlashCards Page'>
            <h1><img src={logo} />ZapRecall</h1>
            {questionCards.map(element => <Questions
                questionCover={element.questionCover}
                question={element.question}
                answer={element.answer}
                index={element.i}
            />)}
         <Conclusion />
        </div>
    )
}