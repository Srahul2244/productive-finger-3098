import { Component } from "react"

import Bonanza from "./MainContent/Bonanza"
import EditorChoice from "./MainContent/EditorChoice"
import MakeUp from "./MainContent/MakeUp"
import Offer from "./MainContent/Offer"
import RepublicOffer from "./MainContent/RepublicOffer"
import ScrollToTop from "./MainContent/ScrollToTop"
import SpecialCollection from "./MainContent/SpecialCollection"

import "../css/Content.css"
class BodyContent extends Component {
    render() {
        return (
            <div>
                <ScrollToTop />
                <Offer />
                <MakeUp />
                <RepublicOffer />
                <EditorChoice />
                <Bonanza />
                <SpecialCollection />
            </div>
        )
    }
}

export default BodyContent;