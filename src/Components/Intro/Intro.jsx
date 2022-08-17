import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      strings: ["Web", "Mobile", "React", "React Native", "Front-end"]
    })
  }, [])

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/personImage.png' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>

          <div className='icons'>
            <a className='' href='https://www.instagram.com/brunoodev/' >
            <img className='icon' src="assets/instagram.png" alt="" />
            </a>

            <a className='' href='https://www.linkedin.com/in/bruno-oliveira-7294a421b/' >
            <img className='icon' src="assets/linkedinIcon.png" alt="" />
            </a>

            <a className='' href='https://github.com/odevbruno' >
            <img className='icon' src="assets/githubIcon.png" alt="" />
            </a>

           </div>

          <h2>Oi, eu sou o</h2>
          <h1>Bruno Oliveira</h1>
          <h3>Desenvolvedor <span ref={textRef}></span></h3>
        </div>
        <a className='arrow' href="#portfolio">
          <img src="assets/arrowbtn.png" alt="" />
        </a>
      </div>
    </div>
  );
}