 import project1 from "../../data/project1"
import ProjectImage from "./projectimage"
import "./project.css"
export default function Project() {
    return (
        <div className="container-project">
            <div className="mainproject">
                <h2>what have worked on </h2>
                </div>
            <div className="project-data">
                { project1.map((er) => {
                    return <ProjectImage key={er.id} {...er} />
                })}
           </div>
            </div>
        
    )
}