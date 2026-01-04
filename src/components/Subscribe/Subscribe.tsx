import Button from "../Button/Button"
import "./subscribe.scss"
const Subscribe: React.FC = () => {
    return (
        <section className="subscribe">
            <h1>Subscribe to get the Latest News</h1>
            <p>We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</p>
            <div className="inputWrapper">

                <input type="text" placeholder="Enter your email addres" />
                <Button type="button" className="subscribeBtn">Subscribe</Button>
            </div>
        </section>
    )
}
export default Subscribe