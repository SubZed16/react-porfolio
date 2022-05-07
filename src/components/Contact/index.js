import { useContext, useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { LanguageContext } from '../Sidebar/MainLang'
import  axios from 'axios'
const Contact = () => {
const {isEnglish}=useContext(LanguageContext)
const [letterClass, setLetterClass] = useState('text-animate')
const form = useRef()
/* const [isFilled,setIsFilled]=useState(false) */
/* const[isEmpty,setIsEmpty]=useState(true) */
 const[data,setData]=useState({
    email:"",
    subject:"",
    message:""
  }) 

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  const handelchanges=(event)=>{
    const {name,value}=event.target
    setData(prevData=>{
      return{
        ...prevData,
        [name]:value
      }
    })
  }
  const checkNoneEmpty=()=>{
    for( const value in data){
      if (!data[value]){
        return false
      } else{
        return true
      }
    }
  } 
  const checkMailInput=()=>{
    const list = ["@gmail.com","@yahoo.fr","@yahoo.com"," @outlook.com"]
    for (const item in list ){
      if(data.email.includes(list[item]))){
        //console.log(data.email)
        return true
      }
   }
   return false
  }
  const formCheck=()=>checkNoneEmpty()&&checkMailInput()

  const alertmessge=()=>{
     if(checkNoneEmpty()&&checkMailInput()===false){
       const alertmsg=isEnglish?"we only accepet mails on this form :> @gmail.com @yahoo.com/fr @outlook.com!🐱‍🏍":"nous n'acceptons que les mails sur ce formulaire : > @gmail.com @yahoo.com/fr @outlook.com !🐱‍🏍"
       //console.log(data)
       return alert(alertmsg)
      }else {
        const message=isEnglish?"Please try fill all the required information and try again! 👻"
        :
        "Veuillez essayer de remplir toutes les informations requises et réessayer ! 👻"
      return  alert(message)
      
    }
  }
  const sendEmail=(ev)=>{
    ev.preventDefault()
    alertmessge()
     if (formCheck()){
      axios.post("https://mailendpoint.herokuapp.com/",
      {mail:data.email,subject:data.subject,message:data.message},
      {headers:{"Content-Type": "application/json"}})
      .then(()=>{
        const message=isEnglish?"Message has been sent successfully!🎈":'Message a été envoyer avec succès!🎈'
              alert(message)
          //console.log("data send")
        }).catch(()=>{
        const alterfail=isEnglish?'Failed to send the message🙁, please try again!':"Impossible d'envoyer le message🙁, veuillez réessayer!"
          alert(alterfail)
          })}}
        
       
    
   
  
  //console.log('isEnglish', isEnglish)
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={isEnglish?['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']:['C', 'o', 'n', 't', 'a', 'c', 't', ' e ',' z ','-' ,'m', 'o','i']}
              idx={15}
            />
          </h1>
          {isEnglish
          ?<p>
          I am interested in freelance opportunities - especially ambitious or
          large projects. However, if you have other request or question,
          don't hesitate to contact me using the form below 😀.
        </p>: 
        <p>
          {/*/  franch text */}
          Je suis intéressé par les opportunités de
           freelance - particulièrement
           ambitieux ou grands projets. Toutefois,
           si vous avez d'autres demandes ou questions, 
          n'hésitez pas non plus à me contacter en utilisant 
          le formulaire ci-dessous😀.
        </p>
          
        }
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder={isEnglish?"Name":"Nom et Prénom"} type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email*"
                    type="email"
                    name="email"
                    required
                    onChange={handelchanges}
                    value={data.email}
                    />
                </li>
                <li>
                  <input
                    placeholder={isEnglish?"Subject*":"Sujet*"}
                    type="text"
                    name="subject"
                    required
                    onChange={handelchanges}
                    value={data.subject}
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message*"
                    name="message"
                    required
                    onChange={handelchanges}
                    value={data.message}
                    ></textarea>
                </li>
                <li>
                  <button type="submit" onClick={sendEmail} className="flat-button">{isEnglish?"SEND":"Envoyez"}</button> 
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Baroudi ali,
          <br />
          Tunisia,
          <br />
          Rue El Khawarizmi  <br />
          Marsa ville <br />
          <br />
          <span>auserbalio@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[36.87809,10.33183]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[36.87809,10.33183]}>
              <Popup>Ali lives around here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

