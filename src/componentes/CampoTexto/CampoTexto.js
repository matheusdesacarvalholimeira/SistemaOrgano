import { useState } from 'react';
import './CampoTexto.css'

const CampoTexto = (props) => {
    let placeholderModificado =`${props.placeholder} ...` ;

    //let valor = 'pedro';

    const [valor, setValor] = useState('');

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }


    return(

        <div className="campo-texto">
            <label>{props.label} </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado}/>
        </div>
    )
    
}

export default CampoTexto;