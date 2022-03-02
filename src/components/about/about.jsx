import "./about.css";
import imgDev from "../../../src/img/dev.jpg";
import Award from "../../../src/img/award.png";
const About = () =>{
    return (
        <div className="a">
            
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={imgDev} alt="" className="a-img"/>
                </div>
            </div>

            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">It is a long established fact thtat a render will be 
                distracted by the readable content.
                </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis architecto voluptatibus nesciunt minima quia? Distinctio amet, exercitationem, at asperiores dolores hic quas officia temporibus
                     suscipit animi perspiciatis autem numquam doloremque.</p>
                <div className="a-award">
                    <img src={Award} className="a-award-img" alt="" />
                    <div className="a-award-text">
                        <h4 className="a-award-title">Internal Disign </h4>
                        <p className="a-award-desc">
                        icing elit. Nobis architecto voluptatibus nesciunt minima quia? Distinctio amet, exercitationem, at asperiores dolores hic quas officia temporibus
                     suscipit animi perspiciatis autem numquam doloremque.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
