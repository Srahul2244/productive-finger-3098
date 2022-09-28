import { Component } from "react"

import NewsLetter from "./Footer/NewsLetter"
import FooterLinks from "./Footer/FooterLinks"
import FooterSocial from "./Footer/Social"
import Copyright from "./Copyright"

import "../css/Footer.css"
class FooterComponent extends Component {
    render() {
        return (
            <div class="footer_container my_3">
                <NewsLetter />
                <FooterLinks />
                <FooterSocial />
                <Copyright />
            </div>
        )
    }
} 

export default FooterComponent;