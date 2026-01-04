import { CiBitcoin, CiCircleList, CiDollar } from "react-icons/ci"
import "./ourService.scss"
import { IoIosArrowRoundForward } from "react-icons/io"
import { useEffect } from "react"
import gsap from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Circle from "../Circle/Circle"

const OurService: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    type ContentType = {
        title: string,
        subtitle: string,
        icon: React.ReactNode
    }
    const content: ContentType[] = [
        { title: "Order Management", subtitle: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.", icon: <CiCircleList size={38} /> },
        { title: "Social Assistant", subtitle: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.", icon: <CiDollar size={38} /> },
        { title: "Crypto Platform", subtitle: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.", icon: <CiBitcoin size={38} /> },
        { title: "Smart Trading Modules", subtitle: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.", icon: <CiBitcoin size={38} /> },
        { title: "Analyzer of the News", subtitle: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.", icon: <CiBitcoin size={38} /> },
        { title: "Module of Price Notification", subtitle: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.", icon: <CiBitcoin size={38} /> },
    ]
    useEffect(() => {

        gsap.fromTo(
            ".card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".content",
                    start: "top center",
                    end: "bottom top",
                    scrub: true
                },
            }
        );
        gsap.fromTo(
            ".contentTitle, .contentSubtitle",
            { y: 0, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".content",
                    start: "top center",
                    end: "bottom top",
                    scrub: true
                },
            }
        );



    }, []);


    return (
        <section className="content">
            <Circle num={1}></Circle>
            <Circle num={2}></Circle>
            <Circle num={3}></Circle>
            <h1 className="contentTitle">
                Our Service
            </h1>
            <p className="contentSubtitle">We trun information into actionable insights  We work to understand you issues and are driven to ask better questions in the pursuit of making work</p>
            <div className="cardList">
                {content.map((item: ContentType, index: number) => (
                    <div className="card" key={index}>
                        <div className={`icon icon${index + 1}`}>
                            {item.icon}
                        </div>
                        <h3>{item.title}</h3>
                        <p className="cardSubtitle">{item.subtitle}</p>
                        <a href="">Learn more <IoIosArrowRoundForward size={24} /></a>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default OurService