import { Footer, Link } from "react-daisyui";

function Created(){
    return(
        <div>
        <Footer className="p-10 bg-neutral text-neutral-content mt-2">
            <div>
            <h2 id="about">About</h2>
                <Footer.Title>
                    <Link className="saweria" href="https://saweria.co/IAQOfficialIdn">Saweria co</Link>
                </Footer.Title>
            </div>
            <br/>
            <div>
                <h2 id="contact">Contact</h2>
                <Footer.Title>
                    <Link className="youtube" href="https://youtube.com/@ikoalmasofficial">youtube</Link>
                    <br/>
                    <Link className="github" href="https://github.com/IkoAlmasDevGame/">Github</Link>
                </Footer.Title>
            </div>
        </Footer>
        </div>
    );
}

export default Created