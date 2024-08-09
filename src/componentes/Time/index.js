import Banner from '../Banner/Banner';
import Colaborador from '../Colaborador';
import Formulario from '../Formulario';
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //Os cardes estao novamento um encima do outro tenta corrijir

    return (
        (props.colaboradores.length > 0) ? (
            <section className='time' style={{ backgroundColor: props.corSecundaria }}> 
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                <div className='colaboradoes'>
                    {props.colaboradores.map(colaborador => 
                        <Colaborador 
                            key={colaborador.nome} 
                            corDeFundo={props.corPrimaria} 
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem} // Adicionando a imagem do colaborador
                        />
                    )}
                </div>
            </section>
        ) : ''
    );

}

export default Time;