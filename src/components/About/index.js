import { useContext, useEffect, useState } from 'react'
import {
  faSass,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { LanguageContext } from '../Sidebar/MainLang'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const value=useContext(LanguageContext)
  const isEnglish=value.isEnglish
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={isEnglish?['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']:['A',' ','p','r','o','p','o','s',' ','d','e',' ','m','o','i']}
              idx={15}
            />
          </h1>        
          {isEnglish?
            <p>              
            I thrive in environments where innovation and experimentation are encouraged 
            and I love to explore new concepts. I am known for bringing about new inspiration 
            and thought-provoking ideas 🐱‍💻.
            <br/><br/> 
            My diverse background has served me well in cultivating programming,
            web development and web analytics strengths. These abilities, coupled with a passion for the field,
            are well-aligned with the requirements for
            freelancing .
          </p>:
            <p>
                Je m'épanouis dans des environnements où l'innovation et l'expérimentation sont encouragées et
                j'aime explorer de nouveaux concepts . Je suis connu pour apporter de nouvelles inspirations et des idées qui font réfléchir.
                <br/> <br/>
                Mon parcours diversifié m'a permis de cultiver mes compétences en programmation,
                en développement web et en analyse web. Ces capacités, associées à une passion pour le domaine,
                sont bien alignées avec les exigences du travail en freelance.
            </p>
          }
          {isEnglish?
            <p align="LEFT">
               I'm quietly confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time .
           </p>:
          <p align="LEFT">
              J'ai confiance en moi, je suis naturellement curieux, et je travaille perpétuellement à
              d'améliorer mes compétences, un problème de conception à la fois .
          </p>
          }
         {isEnglish?
          <p>
             when I'm not coding, I like to explore new skills, practice sports, hang out with friends... 
             if you like to know more feel free to check my social media and my other projects 😎
          </p>:
           <p>
             Quand je ne suis pas en train de coder, j'aime explorer de nouvelles compétences, faire du sport, passer du temps avec mes amis... 
             Si vous voulez en savoir plus, n'hésitez pas à consulter mes médias sociaux et mes autres projets.😉
         </p>
          }
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#c36396" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#7eb601" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
