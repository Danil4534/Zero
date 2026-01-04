import type React from "react";
import Logo from "../../assets/Logo.svg"
import "./footer.scss"
const Footer: React.FC = () => {
    type LinksType = {
        title: string
    }

    const links: LinksType[] = [
        {
            title: "Service"
        },
        {
            title: "Order Management"
        },
        {
            title: "Social Assistant"
        },
        {
            title: "Crypto Platform"
        },
        {
            title: "Analyzer of the News"
        },
        {
            title: "Company"
        },

        {
            title: "About Us"
        },
        {
            title: "News"
        },
        {
            title: "Our trusted partner"
        },

        {
            title: "New users FAQ"
        },
        {
            title: "Supports"
        },
        {
            title: "Help center"
        },
        {
            title: "Feedbcak"
        },
        {
            title: "Contact us"
        },
        {
            title: "Terms conditins"
        },
        {
            title: "Resources"
        },
        {
            title: "Download app"
        },
        {
            title: "Blog"
        },
        {
            title: "What’s new"
        },
        {
            title: "Sitemap"
        },

    ]

    return (
        <footer>
            <ul>
                <li><a href="#header"><img src={Logo} alt="" /></a></li>
                {links.map((item: LinksType, index: number) => (
                    <li key={index}>
                        <a href="">{item.title}</a>
                    </li>
                ))}
            </ul>
            <hr />
            <div className="copyright">
                <h3>© 2026 Zone. - All rights reserved.</h3>
                <div>
                    <p>Privacy</p>
                    <p>Security</p>
                    <p>Terms</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer