import "./header.css"
import Nav from "./nav"
// import MobileNav from "./mobilenav"
export default function Header() {
    return (
        <div className="container-header">
            <Nav />
            {/* <MobileNav /> */}
            <div className="background-image">
                <h2>👋 hi, I'm Dorcas</h2>
                <p>full stack developer</p>
            </div>
        </div>
    )
}