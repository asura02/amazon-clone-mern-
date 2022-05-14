import React, { Component } from "react";
import Slider from "react-slick";
import "./variablewidth.css";

export default class VariableWidth extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: this.props.size,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="divcolor px-2 py-3  my-3">
        <h2 className="header_text"> {this.props.heading} </h2>
        <Slider {...settings}>
          <div className="divcolor">
            <img src={this.props.img} className="slider_img" />
          </div>

          <div className="divcolor">
            <img src={this.props.imgg} className="slider_img" />
          </div>

          <div className="divcolor">
            <img src={this.props.imggg} className="slider_img" />
          </div>

          <div className="divcolor">
            <img src={this.props.imgggg} className="slider_img" />
          </div>

          <div className="divcolor">
            {" "}
            <img src={this.props.imggggg} className="slider_img" />
          </div>

          <div className="divcolor">
            <img src={this.props.imgggggg} className="slider_img" />
          </div>

          <div className="divcolor">
            <img src={this.props.img7} className="slider_img" />
          </div>
          <div className="divcolor">
            <img src={this.props.img8} className="slider_img" />
          </div>
          <div className="divcolor ">
            <img src={this.props.img9} className="slider_img" />
          </div>

          <div className="divcolor">
            <img src={this.props.img10} className="slider_img" />
          </div>
          <div className="divcolor">
            <img src={this.props.img11} className="slider_img" />
          </div>
          <div className="divcolor">
            <img src={this.props.img12} className="slider_img" />
          </div>
        </Slider>
      </div>
    );
  }
}
