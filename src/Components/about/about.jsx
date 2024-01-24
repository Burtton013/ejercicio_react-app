import "./about.css"
const About = () => {
    return (
        <section className="d-flex gap-3"> 
            <article>
                <div>
                    <img className="img-container" src="https://pbs.twimg.com/media/Fx_yAWbXsAArl3R?format=jpg&name=4096x4096" alt="Imagen de un gato en un calcetin de spiderman" />
                </div>
            </article>
            <aside> 
                <h1>Carlos Oliver </h1>
                <p>
                    <b>¿Quien soy?</b>
                </p>
                <ul>
                    <li> Psicologo </li>
                    <li> Programador Java full-stack</li>
                    <li> Audiofilo </li>
                </ul>
                <p className="font-bold">
                    <b>¡Sigueme en mis siguientes links de contacto!</b>
                </p>
                <ul>
                    <li> <a href="https://www.linkedin.com/in/carlos-brandt-oliver-parra-ab55332a0/">LinkedIn</a> </li>
                    <li><a href="https://github.com/Burtton013">GitHub</a></li>
                    <li>cbop45@gmail.com</li>
                </ul>
                <section>
                    <p>
                        <b>Lenguajes y herramientas</b>
                        </p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                </section>
            </aside> 
        </section>
    )
    
};

export default About;