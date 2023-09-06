import "./footer.css"
import { BsTwitter, BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/Bs"
import{FaArrowUp} from "react-icons/Fa"
export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-submain">
                <div className="footer-socio-icons">
                    <div className="footer-icon ">
                        <a href="" >
                        <BsTwitter className="icon twitter" />
                        </a>
                    </div>
                     <div className="footer-icon ">
                        <a href="">
                        <BsFacebook  className="icon  facebook"/>
                        </a>
                    </div>
                     <div className="footer-icon ">
                        <a href="">
                        <BsGithub className="icon github "/>
                        </a>
                    </div>
                     <div className="footer-icon ">
                        <a href="">
                        <BsInstagram  className="icon instagram "/>
                        </a>

                    </div>
                     <div className="footer-icon ">
                        <a href="">
                        <BsLinkedin  className="icon twitter"/>
                        </a>
                    </div>
                   
                </div>
                 <div className="footer-line"></div>
                    <div className="footer-text">
                    <h3>@Dorcasibrahim { new Date().getFullYear()}</h3>
                </div>
                <div className="footer-pointer">
                    <a href=""><FaArrowUp  className="arrow"/></a>
                </div>
            </div>
        </div>
    )
}
