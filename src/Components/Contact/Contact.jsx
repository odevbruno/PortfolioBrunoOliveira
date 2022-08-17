import './contact.scss'

export default function Contact() {
    return (
        <div className='contato' id='contato'>
            <div className='left'>
                <img src='assets/contat.png' alt='' />
            </div>
            <div className='right'>
                <h2>Entre em contato</h2>
                <div className='containerImgs'>
                    <a className='link' target="_blank" href='https://api.whatsapp.com/send?phone=5592982036244&text=Olá%20Bruno%2C%20estou%20interessado(a)%20em%20um%20de%20seus%20serviços%20!%20'>
                        <div className='containerItem'>
                            <img src="assets/whats.png" alt='' />
                            <a>Envie uma mensagem pelo whatsapp</a>
                        </div>
                    </a>

                    <div className='containerItem'>
                        <img src="assets/msger.png" alt='' />
                        <a>Envie uma mensagem pelo messenger</a>
                    </div>
                    <div className='containerItem'>
                        <img src="assets/instagram.png" alt='' />
                        <a>Envie uma mensagem pelo instagram</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

