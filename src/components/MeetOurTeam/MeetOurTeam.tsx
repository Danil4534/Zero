



import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Circle from "../Circle/Circle"
import { FaLinkedin, FaSkype } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import './meetOurTeam.scss'
import Sunny from "../../assets/Sunny.jpg"
import Alex from "../../assets/Alex.jpg"
import Alina from "../../assets/Alina.jpg"
import Afroza from "../../assets/Afroza.jpg"
import "./meetOurTeam.scss"
import { useEffect } from "react";


const MeetOurTeam: React.FC = () => {

    gsap.registerPlugin(ScrollTrigger);
    type ContentType = {
        title: string,
        subtitle: string,
        icons: React.ReactNode[],
        img: string
    }
    const content: ContentType[] = [
        { title: "Sunny Khan", subtitle: "Executive officer", icons: [<FaLinkedin />, <FaSkype />, <AiFillTwitterCircle />, <AiFillTwitterCircle />], img: Sunny },
        { title: "Alina Jesia", subtitle: "UX/UI DESIGNER", icons: [<FaLinkedin />, <FaSkype />, <AiFillTwitterCircle />, <AiFillTwitterCircle />], img: Alina },
        { title: "Alex Sohag", subtitle: "BUSINESS DEVELOPMENT", icons: [<FaLinkedin />, <FaSkype />, <AiFillTwitterCircle />, <AiFillTwitterCircle />], img: Alex },
        { title: "Afroza Mou", subtitle: "Head of marketing", icons: [<FaLinkedin />, <FaSkype />, <AiFillTwitterCircle />, <AiFillTwitterCircle />], img: Afroza },

    ]
    useEffect(() => {

        gsap.fromTo(
            ".cardPeople",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".welcomeItem2",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                },
            }
        );

    });
    return (
        <section className="meetOurTeam">
            <Circle num={1}></Circle>
            <Circle num={2}></Circle>
            <Circle num={3}></Circle>
            <h1 className="contentTitle">
                Met Our Team
            </h1>
            <p className="contentSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
            <div className="cardListPeople">
                {content.map((item: ContentType, index: number) => (
                    <div className="cardPeople" key={index}>
                        <img src={item.img} alt={item.title} />
                        <h1>{item.title}</h1>
                        <p>{item.subtitle}</p>
                        <div className={`icon icon${index + 1}`}>
                            <div className="listIcons">
                                {item.icons.map((icon: any, index: number) => (
                                    <div key={index}>{icon}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default MeetOurTeam