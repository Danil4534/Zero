import Button from "../Button/Button";
import { FaRegPlayCircle } from "react-icons/fa";
import Saly from "../../assets/Saly-19.svg";
import "./banner.scss";
import Circle from "../Circle/Circle";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Banner: React.FC = () => {
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            ".bannerTitle",
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                delay: 0.5,
                scrollTrigger: {
                    trigger: ".banner",
                    start: "top 80%",
                },
            }
        );
        gsap.fromTo(
            ".bannerSubtitle",
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                delay: 0.8,
                scrollTrigger: {
                    trigger: ".banner",
                    start: "top 80%",
                },
            }
        );
        gsap.fromTo(
            ".bannerActions",
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                delay: 1.1,
                scrollTrigger: {
                    trigger: ".banner",
                    start: "top 80%",
                },
            }
        );
        gsap.fromTo(
            ".bannerImg",
            { x: 300, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            }
        );
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

                ease: "power3.out",
                transformPerspective: 1000,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section className="banner">
            <Circle num={1} />
            <Circle num={2} />
            <Circle num={3} />

            <div className="bannerContent">
                <h1 className="bannerTitle">
                    Virtual Reality <br /> Business Solutions
                </h1>

                <p className="bannerSubtitle">
                    We have over 15 year experience in business consulting arena and
                    artificial intelligence.
                </p>

                <div className="bannerActions">
                    <Button type="button" className="joinUsBtn">
                        Join Us
                    </Button>
                    <p className="watchVideo">
                        <FaRegPlayCircle size={36} />
                        <span>Watch video</span>
                    </p>
                </div>
            </div>

            <img
                ref={imgRef}
                src={Saly}
                className="bannerImg"
                alt="VR character"
            />
        </section>
    );
};

export default Banner;
