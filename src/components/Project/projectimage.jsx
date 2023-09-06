export default function ProjectImage({name,github,description,demolink,img,alt}) {
    return (
        <>
            <div className="image-container">
                <div className="project-image">
                    <img src={img} alt={alt}  />
                    <div className="main-text">
                        <div className="project-text">
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="demolink">
                            <a href={demolink}>view demo</a>
                            <a href={github}>source code</a>
                        </div>
                    </div>
                   
                </div>
        </div>
        
        </>
    )
}