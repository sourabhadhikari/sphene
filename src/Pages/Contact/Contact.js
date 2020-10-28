import React,{useState} from 'react'
import * as styles from './styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Contact_Details from './contactDetails'
import {faPhoneAlt, faFax, faGlobe, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {db} from '../../firebase'
const Contact = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            alert('invalid email')
        }
        db.collection('contacts').add({
            name:name,
            email:email,
            sunject:subject,
            message:message

        })
        .then (() => {
            alert('message has been submitted');
            
        })
        .catch((error)=>{
            alert(error.message);
            
        })
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }
    return(
        <div>
            <styles.location>
                <styles.map></styles.map>
                <styles.office_background>
                    <styles.our_office>Our Office</styles.our_office>
                    
                    <styles.office_address>
                        <styles.coloredLine></styles.coloredLine>
                        <styles.addr>45 Park Avenue, Apt.303</styles.addr>
                        <styles.addr>NewYork, NY, 10016</styles.addr>
                        <styles.addr>Phone: (123)123-456</styles.addr>
                
                    </styles.office_address>
                </styles.office_background>
            </styles.location>

            <styles.contact_us>
                <styles.find_us>
                    <styles.heading>Find Us There</styles.heading>
                    <styles.text>Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.</styles.text>
                    <Contact_Details sub_heading={'Phone:'} data={'(123)123-456'} logo={faPhoneAlt}/>
                    <Contact_Details sub_heading={'Fax:'} data={'(123)123-456'} logo={faFax}/>
                    <Contact_Details sub_heading={'Web'} data = {'#'} link={'www.example.com'} logo={faGlobe}/>
                    <Contact_Details sub_heading={'E-Mail:'} data={'#'} link={'office@example.com'} logo={faEnvelope}/>

                </styles.find_us>
                <styles.contact_form onSubmit={handleSubmit}>
                    <styles.heading>Contact Form</styles.heading>
                    <styles.name_email>
                        <styles.input placeholder="Name" required value={name}
                            onChange={(e)=> setName(e.target.value)}></styles.input>
                        <styles.input type="email" placeholder="Email" value={email}
                            onChange={(e)=> setEmail(e.target.value)}></styles.input>
                        
                    </styles.name_email>
                    <styles.input placeholder="subject" required value={subject}
                            onChange={(e)=> setSubject(e.target.value)}></styles.input>
                    <styles.inputarea placeholder="Message" required value={message}
                            onChange={(e)=> setMessage(e.target.value)}></styles.inputarea>
                    <styles.button type="submit">SUBMIT MESSAGE</styles.button>
                </styles.contact_form>
            </styles.contact_us>
            
        </div>
    )
}

export default Contact;