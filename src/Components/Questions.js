import React from 'react';
export default function Questions(
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
    }

    return (
        <div className='container-pergunta'>
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
                <div ClassName="buttons-resposta">
                    <button className='button-nao-lembrei' onClick={() => CardsPlayed("pergunta nao-lembrei", index)}>Não lembrei </button>
                    <button className="button-quase-nao-lembrei" onClick={() => CardsPlayed("pergunta quase-nao-lembrei", index)}>Quase não lembrei </button>
                    <button className='button-zap' onClick={() => CardsPlayed("pergunta zap", index)}>Zap!</button>
                </div>
            </div>
            <div className={zap}>
                {questionCover}
            </div>

        </div>
    )
}