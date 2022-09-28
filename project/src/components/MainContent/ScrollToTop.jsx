import { Component } from "react";

class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
          visibility: false
        };
      }

      componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
          scrollComponent.toggleVisibility();
        });
      }

      toggleVisibility() {
        if (window.pageYOffset > 300) {
          this.setState({
            visibility: true
          });
        } else {
          this.setState({
            visibility: false
          });
        }
      }

      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

      render() {
        const { visibility } = this.state;
        return (
            <div>
            {visibility && (
                <div onClick={this.scrollToTop} class="scroll_to_top">
                     <i class='bx bx-up-arrow-alt'></i>
                </div>
            )}
            </div>
        );
      }
    
}

export default ScrollToTop