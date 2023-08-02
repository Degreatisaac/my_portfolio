import './index.scss'
import Loader  from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {

    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_u2ji64l',
            'template_py247tk',
            refForm.current,
            'k07Gtz06oj0zt7RSq'
        )

        .then ( () => {
            alert('Message successfully sent')
            window.location.reload(false)
        },

        () => {
            alert('Failed to send the message, please try again')
        }
        )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}  idx={15}/>
                </h1>

                <p>
                    I am interested in freelance opportunities - especially ambitious or large projects. However, if you have either request or question, don't hesitate to contact me using below form either.
                </p>

                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='user_name' placeholder='Name' required/>
                            </li>

                            <li className='half'>
                                <input type='text' name='user_email' placeholder='Email' required/>
                            </li>

                            <li>
                                <input type='text' name='subject' placeholder='Subject' required/>
                            </li>

                            <li>
                                <textarea  name='message' placeholder='Message' required></textarea>
                            </li>

                            <li>
                                <input type='submit' className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

            <div className="info-map">
                Stobodan Gajic
                <br/>
                Serbia,
                <br/>
                Branka Radicevica 19, 22000 <br/>
                Srenska Mitrovica <br/>
                <span>freelancerslobodan@gmail.com</span>
            </div>

            <div className='map-wrap'>

                <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[44.96366, 19.61045]}>
                        <Popup>Sloba lives here, come over for a cup of coffee</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
};

export default Contact;