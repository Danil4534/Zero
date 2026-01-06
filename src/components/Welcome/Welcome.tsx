
import Man1 from "../../assets/man1.svg"
import Man2 from "../../assets/man2.svg"
import Button from "../Button/Button"
import Circle from "../Circle/Circle"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./welcome.scss"
import { useEffect } from "react"
const Welcome: React.FC = () => {

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        gsap.timeline()
        gsap.fromTo(".welcomeSubtitle , .welcomeTitle, .welcomeBtn ", { y: 50, x: 0, opacity: 0.5 }, {
            y: 0, x: 0, stagger: 0.5, opacity: 1, scrollTrigger: {
                trigger: ".sectionWelcome",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true
            },
        })

        gsap.fromTo(".imgMan1", { x: 50, opacity: 0 }, {
            y: 0, x: 0, stagger: 0.5, opacity: 1,  scrollTrigger: {
                trigger: ".sectionWelcome",
                start: "top center",
                end: "bottom bottom",
                scrub: true
            },
        })
         gsap.fromTo(".imgMan2", { x: -50, opacity: 0 }, {
            y: 0, x: 0, stagger: 0.5, opacity: 1,  scrollTrigger: {
                trigger: ".sectionWelcome",
                start: "top center",
                end: "bottom bottom",
                scrub: true
            },
        })

    }, [])
    return (
        <section className="sectionWelcome">
            <div className="welcomeItem1">
                <img src={Man1} className="imgMan1" alt="" />
                <div className="welcomeContent">
                    <h1 className="welcomeTitle">We complete every projects
                        extra care as customer need
                    </h1>
                    <p className="welcomeSubtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore possimus laboriosam qui nam.
                    </p>
                    <Button type="button" className='welcomeBtn'>Join Us</Button>
                </div>
            </div>
            <div className="welcomeItem2">
                <img src={Man2} className="imgMan2" alt="" />
                <div className="welcomeContent2">
                    <h1 className="welcomeTitle">We complete every projects
                        extra care as customer need
                    </h1>
                    <p className="welcomeSubtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore possimus laboriosam qui nam.
                    </p>
                    <Button type="button" className='welcomeBtn'>Join Us</Button>
                </div>
            </div>
            <Circle num={1}></Circle>
            <Circle num={2}></Circle>
            <Circle num={3}></Circle>
        </section >
    )
}

export default Welcome