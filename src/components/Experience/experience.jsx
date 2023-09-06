import TechEcperience from "./techExperience"
import Technology from "../../data/technologies"
import "./experience.css"
export default function Experience() {
    return (
        <div className="container-experience">
            <h2>Experience👨‍💻</h2>
            <div className="tech-main">
                 <div className="techExp">
                <p>SOME TECHNOLOGIES I'VE WORKED WITH:</p>
                {
                    Technology.map((er) => {
                        return <TechEcperience key={ er.id} {...er} />
                    })
              }
            </div>
                <div className="company-logo">
                    <p>WHERE I'VE WORKED AS A TRAINEE:</p>
                <img src="/images/tcc-logo.png" alt="tcc"  width={100}/>
            </div>
            </div>
           
        </div>
    )
}