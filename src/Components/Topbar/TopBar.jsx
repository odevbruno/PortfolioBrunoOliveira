import './topbar.scss';
import { Person, Mail } from '@mui/icons-material/';


export default function Topbar({abreMenu, handlerAbreMenu}) {
    return (
        <div className={"topBar " + (abreMenu && "active")}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>Bem vindo(a)</a>
                    <div className='itemContainer'>
                        <Person className='icon' />
                        <span>+92 9 8203-6244</span>
                    </div>
                    <div className='itemContainer'>
                        <Mail className='icon' />
                        <span>brunodevoff@gmail.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburguer' onClick={()=> handlerAbreMenu(!abreMenu) }>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
