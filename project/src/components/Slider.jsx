import { Component } from "react"
import "../css/Slider.css"
class Slider extends Component {
    
    constructor(){
        super()
        this.state = {
            index: 1,
        }
        this.plusSlides = this.plusSlides.bind(this)
        this.prevSlides = this.prevSlides.bind(this)
    }
    componentDidMount(){
        setInterval(
            this.plusSlides,
            4000
        )
    }
    plusSlides(){
        let index = this.state.index + 1
        if(index < 6){
            this.setState({index: index})   
        }else {
            this.setState({index: 1})
        }
    }
    prevSlides(){
        let index = this.state.index - 1
        if(index > 1 ){
            this.setState({index: index})   
        }else{
            this.setState({index: 5})
        }
    }
    render(){

        return (
            <div className="slide_container my_8">

                <div className={`slides ${this.state.index == 1 ? "fade": ""}`}>
                    <img src="./assets/images/slider_1.jpg" />
                </div>
        
                <div className={`slides ${this.state.index == 2 ? "fade": ""}`}>
                    <img src="./assets/images/slider_2.jpg" />
                </div>
        
                <div className={`slides ${this.state.index == 3 ? "fade": ""}`}>
                    <img src="./assets/images/slider_3.jpg" />
                </div>
                <div className={`slides ${this.state.index == 4 ? "fade": ""}`}>
                    <img src="./assets/images/slider_4.jpg" />
                </div>
                <div className={`slides ${this.state.index == 5 ? "fade": ""}`}>
                    <img src="./assets/images/slider_5.jpg" />
                </div>
                
                <a className="left_arrow" onClick={this.prevSlides}>
                    <img src="./assets/images/left_arrow.svg" alt="left_arrow" />
                </a>
                <a className="right_arrow" onClick={this.plusSlides}>
                    <img src="./assets/images/right_arrow.svg" alt="right_arrow" />
                </a>
    
            </div>
        )
    }
}

export default Slider;