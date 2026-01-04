
import Man1 from "../../assets/man1.svg"
import Man2 from "../../assets/man2.svg"
import Button from "../Button/Button"
import Circle from "../Circle/Circle"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./welcome.scss"
import { useEffect, useRef } from "react"
const Welcome: React.FC = () => {

    gsap.registerPlugin(ScrollTrigger)
    const imgRef = useRef<HTMLImageElement | null>(null);
    useEffect(() => {

        gsap.timeline()
        gsap.fromTo(".welcomeContent", { x: -100, opacity: 0 }, {
            y: 0, x: 0, stagger: 0.5, opacity: 1, delay: 1.2, scrollTrigger: {
                trigger: ".welcomeContent",
                start: "top center",
                end: "bottom top",
                scrub: true
            },
        })
        gsap.fromTo(".welcomeContent2", { x: 100, opacity: 0 }, {
            y: 0, x: 0, stagger: 0.5, opacity: 1, delay: 1.2, scrollTrigger: {
                trigger: ".welcomeContent",
                start: "top center",
                end: "bottom top",
                scrub: true
            },
        })

        gsap.fromTo(".imgMan", { x: 100, opacity: 0 }, {
            y: 0, x: 0, stagger: 0.5, opacity: 1, delay: 1.2, scrollTrigger: {
                trigger: ".welcomeContent",
                start: "top center",
                end: "bottom top",
                scrub: true
            },
        })
        const img = imgRef.current;
        if (!img) return;
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;

            gsap.to(img, {
                rotateY: x * 15,
                rotateX: -y * 15,
                x: x * 25,
                y: y * 25,
                duration: 0.4,
                ease: "power3.out",
                transformPerspective: 1000,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [])
    return (
        <section className="sectionWelcome">
            <div className="welcomeItem1">
                <img src={Man1} ref={imgRef} className="imgMan" alt="" />
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
                <img src={Man2} ref={imgRef} className="imgMan" alt="" />
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