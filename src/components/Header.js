
import tuddrumLogo from "../assets/tuddrumLogo.jpg"
import "../index.css"
export default function Header(){
    return(
        <div>
                <ul className="navbar">
                    <li>HOME</li>
                    <li>ABOUT</li> 
                    <li>CONTACT</li>
                    <img src={tuddrumLogo} className = "logo" alt=""/>
                    <li>DETAILS</li>
                    <li>TUTORIALS</li>
                    <li>NEWS</li>
                </ul>
        </div>
    )
}