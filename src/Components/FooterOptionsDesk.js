import React from 'react'
import Instagram from '../assets/Instagram'
import Linkedin from '../assets/Linkedin'
import Twitter from '../assets/Twitter'
import Facebook from '../assets/Facebook'

function FooterOptionDesk() {
  return (
    <footer className="f-container">
    <div className="f-txt-container">
    <p>@2023 Digital Booking</p>
    </div>

    <div className="f-img-container">
        <Facebook/>
        <Linkedin/>
        <Twitter/>
        <Instagram/>
    </div>
</footer>
  )
}

export default FooterOptionDesk

// ToDo: 
// esto hay que refactorizar para que se renderice con un If
// cuando eso pasa se borra la carpeta img2 que está en Public 
// y se refactoriza el footer (ya lo dejo escrito en el componente pero comentado)