import { Component } from "react";

class SecondComponent extends Component {
  constructor() {
    super();
    this.state = {
      imagesSrcArr: [
        "./images/01.jpg",
        "./images/02.jpg",
        "./images/03.jpg",
        "./images/04.jpg",
        "./images/05.jpg",
      ],
      currentImageSrc: "./images/01.jpg",
      currentImageSrcIndex: 0,
      slider: "",
    };
  }

  getNextImageSrc = () => {
    if (this.state.currentImageSrcIndex + 1 < this.state.imagesSrcArr.length) {
      this.state.currentImageSrcIndex++;
    }
    this.setState({
      currentImageSrc: this.state.imagesSrcArr[this.state.currentImageSrcIndex],
    });
  };

  getPrevImageSrc = () => {
    if (this.state.currentImageSrcIndex > 0) {
      this.state.currentImageSrcIndex--;
    }
    this.setState({
      currentImageSrc: this.state.imagesSrcArr[this.state.currentImageSrcIndex],
    });
  };

  startSlider = () => {
    this.state.slider = setInterval(() => {
      if (
        this.state.currentImageSrcIndex + 1 <
        this.state.imagesSrcArr.length
      ) {
        this.state.currentImageSrcIndex++;
      } else {
        this.state.currentImageSrcIndex = 0;
      }
      this.setState({
        currentImageSrc:
          this.state.imagesSrcArr[this.state.currentImageSrcIndex],
      });
    }, 1000);
  };

  stopSlider = () => {
    clearInterval(this.state.slider);
  };

  render() {
    return (
      <div className="content">
        <img src={this.state.currentImageSrc} alt="random_img" />
        <br />
        <div>
          <input
            type="button"
            value="Previous"
            onClick={this.getPrevImageSrc}
          />
          <input type="button" value="Next" onClick={this.getNextImageSrc} />
          <input type="button" value="Slider" onClick={this.startSlider} />
          <input type="button" value="Stop" onClick={this.stopSlider} />
        </div>
      </div>
    );
  }
}

export default SecondComponent;
