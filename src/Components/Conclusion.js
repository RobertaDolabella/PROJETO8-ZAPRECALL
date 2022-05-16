import React from 'react';
export default function Conclusion() {
    console.log('entrou')
    const [qtd, setQtd] = React.useState(0);

	function aumentarQtd() {
		setQtd(qtd+1);
	}
  
    return(
        <div className='footer'> /4 CONCLUÍDOS </div>
    )
    
}