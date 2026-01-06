
import "./circle.scss";


type CircleProps = {
    num?: number;
};
const Circle: React.FC<CircleProps> = ({ num }: CircleProps) => {

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     gsap.fromTo(".circle", { opacity: 0 }, {
    //         opacity: 1, scrollTrigger: {
    //             trigger: ".bannerTitle",
    //             start: "top bottom",
    //             end: "bottom top",
    //             scrub: true
    //         }
    //     })

    // },
    //     [])
    return (
        <div className={`circle circle${num}`}></div>
    );
}
export default Circle;