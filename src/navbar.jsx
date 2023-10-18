import './nav.css';
import { useState, useEffect } from 'react';


export default function NavBar() {



  const [linePosition, setLinePosition] = useState('1px 60.2%');
  const [highLight, setHighLight] = useState(1);

  const navMagic = (scrollto) => {
    let scroll = {
      top: scrollto,
      left: 0,
      behavior: 'smooth',
    }
    window.scroll(scroll)
  }

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    if (offset > 465) {
      setLinePosition('1px 10%')
      setHighLight(2)
    }
    else {
      setLinePosition('1px 60.2%')
      setHighLight(1)
    }
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);


  function Link({ text, index, scrollto }) {
    return (
      <>
        <li style={{ color: highLight === index ? 'white' : '#cccccc' }}>
          <a onClick={() => { navMagic(scrollto) }}>{text}</a>
        </li>
      </>
    )
  }


  return (
    <>
      <div id='MainNavDiv'>
        <div className='div'>
          <ul id='ul'>
            <Link text={"Home"} index={1} scrollto={0} />
            <Link text={"Work"} index={2} scrollto={650} />
          </ul>
          <div id='navlinebox'>
            <div style={{ margin: linePosition }} className='navline'></div>
          </div>
        </div>
      </div>
    </>
  )
}
