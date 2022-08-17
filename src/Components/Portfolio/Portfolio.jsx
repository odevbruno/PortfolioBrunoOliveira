import { useEffect, useState } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import './portfolio.scss';
import {
  destaquesPortfolio,
  webPortfolio,
  mobilePortfolio
} from '../../BancoDeDadosProjetos';

export default function Portfolio() {

  const Categorias = [
    {
      id: "destaques",
      title: "Destaques"
    },
    {
      id: "web",
      title: "Web apps"
    },
    {
      id: "mobile",
      title: "Mobile apps"
    },
  ]

  const [categSelecionada, setCategSelecionada] = useState('destaques');
  const [dataProjects, setDataProjects] = useState([]);

  useEffect(() => {
    switch (categSelecionada) {
      case 'destaques':
        setDataProjects(destaquesPortfolio);
        break;
      case 'web':
        setDataProjects(webPortfolio);
        break;
      case 'mobile':
        setDataProjects(mobilePortfolio);
        break;
      default:
        setDataProjects(destaquesPortfolio)
    }

  }, [categSelecionada])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfólio</h1>
      <ul className='containerList'>
        {Categorias.map(item => (
          <PortfolioList item={item} selecionaCategoria={setCategSelecionada} categoriaAtiva={categSelecionada === item.id} />
        ))}
      </ul>
      <div className='container'>

        {dataProjects.map((item) => (
          <div className='item'>
            <img onClick={()=> console.log(item)} src={item.img} alt="" />
            <h3>{item.nome}</h3>
          </div>
        ))}

      </div>
    </div>
  );
}