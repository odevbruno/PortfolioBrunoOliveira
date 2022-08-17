import './clientes.scss';
import { Depoimentos } from './DBDepoimentos';

export default function Clientes() {
    return (
        <div className='clientes' id='clientes'>
            <h1>Depoimentos</h1>
            <div className='container'>
                {Depoimentos.map((item) => (
                    <div className={item.destaque === true ? 'card destaque' : 'card'}>

                        <div className='top'>
                            <img src={item.avatar} alt='' className='user' />
                        </div>
                        <div className='center'>{item.txt}</div>
                        <div className='bottom'>  <h3>{item.nome}</h3> </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
