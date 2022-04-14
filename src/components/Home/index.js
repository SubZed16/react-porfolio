import { useEffect, useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'
import { LanguageContext } from '../Sidebar/MainLang'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const value = useContext(LanguageContext);
  const isEnglish=value.isEnglish
  const nameArray = ['l', 'i',' ','B','a', 'r', 'o', 'u','d','i']
  const jobArray  =isEnglish? [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]:[ "d", "é", "v", "e", "l", "o", "p", "p", "e", "u", "r"," ","w", "e","b" ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4200)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>{isEnglish ===true?'H':'Salut,'}</span>{!isEnglish?<br/>:<></>}
            <span className={`${letterClass} _12`}>{isEnglish===true?'i,':"Je m'appelle "}</span>
            <br />
            {isEnglish?<>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            </>:<></>}
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / Full-Time JavaScript / LTIC1 student</h2>
          <Link to="/contact" className="flat-button">
            {isEnglish?"CONTACT ME":"CONTACTEZ-MOI"}
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
