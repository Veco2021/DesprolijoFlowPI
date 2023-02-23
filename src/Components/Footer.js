import React from 'react'
//import Instagram from '../assets/Instagram'
//import Linkedin from '../assets/Linkedin'
//import Twitter from '../assets/Twitter'
//import Facebook from '../assets/Facebook'

function Footer() {
  return (
    <footer className="f-container">
    <div className="f-txt-container">
        <p>@2023 Digital Booking</p>
    </div>

    <div className="f-img-container">
        <img className="icon" src='./img2/fb.svg'alt="facebook"/>
        <img className="icon" src='./img2/linkedin.svg'alt="facebook"/>
        <img className="icon" src='./img2/tweet.svg' alt="twitter" href="Twitter"/>
        <img className="icon" src='./img2/ig.svg' alt="instgram" href="Instgram"/>        
    </div>
</footer>
  )
}



export default Footer

//<Facebook color='#1dbeb4'/>
//<Linkedin color='#1dbeb4'/>
//<Twitter color='#1dbeb4'/>
//<Instagram color='#1dbeb4'/>