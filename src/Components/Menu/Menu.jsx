import './menu.scss';

export default function Menu({abreMenu, handlerAbreMenu}) {
    return (
        <div className={"menu " + (abreMenu && "active")}>
            <ul>
                <li>
                    <a onClick={()=> handlerAbreMenu(!abreMenu)}  href='#intro'>Inicio</a>
                </li> 
                <li>
                    <a onClick={()=> handlerAbreMenu(!abreMenu)} href='#portfolio'>Portfólio</a>
                </li> 
                <li>
                    <a onClick={()=> handlerAbreMenu(!abreMenu)} href='#servicos'>Serviços</a>
                </li> 
                <li>
                    <a onClick={()=> handlerAbreMenu(!abreMenu)} href='#clientes'>Clientes</a>
                </li>
                <li>
                    <a onClick={()=> handlerAbreMenu(!abreMenu)}  href='#contato'>Contato</a>
                </li> 
            </ul>

        </div>
    );
}