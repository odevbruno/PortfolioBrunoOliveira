import './PortfolioList.scss';

export default function PortfolioList({ item, selecionaCategoria, categoriaAtiva }) {
    const { id, title } = item; 
    
    return (
        <li onClick={()=>selecionaCategoria(id)}  className={ categoriaAtiva ? "PortfolioList active" : "PortfolioList"}>
            {title}
        </li>
    );
}