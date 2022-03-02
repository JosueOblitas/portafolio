import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";

const Contact = () =>{
    const formRef = useRef();
    const [done,setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode
    const trueEmail = () =>{
        return(
            <div className="c-box">
                 <h3 className="c-aviso">Thank You...</h3>
            </div>
        )
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_bny81sk', 'template_gucqrld', formRef.current, 'ACIeZkhNkIwzdiD8D')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
     }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper"style={{backgroundColor: darkMode && "#333"}}>
                <div className="c-left">
                    <h1 className="c-tittle">Let´s Discuss your proyect</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon"/>
                            +51 990956256
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon"/>
                            josueoblitas15@outlook.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon"/>
                            Urb Palomares, Rímac-Lima
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always 
                        available for freelancing if the right project
                        comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor:darkMode &&"#333",borderColor:darkMode && "white",color:darkMode && "white"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor:darkMode &&"#333",borderColor:darkMode && "white",color:darkMode && "white"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor:darkMode &&"#333",borderColor:darkMode && "white",color:darkMode && "white"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor:darkMode &&"#333",borderColor:darkMode && "white",color:darkMode && "white" }}  name="message" placeholder="Message" rows="5"></textarea>
                        <button>Submit</button>
                        {done && trueEmail()}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact