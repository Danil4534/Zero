import Button from "../Button/Button";
import { FaRegPlayCircle } from "react-icons/fa";
const Banner: React.FC = () => {
    return (
        <section className="banner">
            <div>
                <h1></h1>
                <p></p>
                <div>
                    <Button type="button" className='joinUsBtn'>Join Us</Button>
                    <p><FaRegPlayCircle/><span>Watch video</span></p>
                </div>
            </div>
            <div className=""></div>
        </section>
    );
}
export default Banner;