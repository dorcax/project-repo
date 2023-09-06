import "./contact.css"
export default function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-image">
                <img src="/images/send.svg" alt=" send email"  width={80} />
            </div>
            <div className="contact-text">
                <h3>get in touch</h3>
                <p>Have questions ? A project we can work on ,feel free to send a mail 🚀</p>
            
            </div>
            <div className="btn">
            <a href="mailto:dorcasibrahim667@gmail.com"className="btn1" > say hello</a>
            </div>
        </div>
    )
}