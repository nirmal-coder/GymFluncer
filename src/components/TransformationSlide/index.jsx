import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"
const TransformationSlide = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      <div className='Transformation'>
        <h2>Transformation mades possible <br/> with Gymflucers</h2>
        <div className='trans-main'>
        <div className="trans_details">
            <div className="details_Header">
                <h1>Name : <span>Raj</span></h1>
                <h1>Age : <span>28</span></h1>
            </div>
            <div className="trans_table">
                <div className="table_header">
                    <h3 className='table-square'>9 Weeeks</h3>
                    <h3>before</h3>
                    <h3>after</h3>
                </div>
                <hr />
                <div className="table_header">
                    <h3>Weight</h3>
                    <h3><span>85</span>kg</h3>
                    <h3><span>78</span>kg</h3>
                </div>
                <div className="table_header">
                    <h3>Body fast</h3>
                    <h3><span>35</span>%</h3>
                    <h3><span>15</span>%</h3>
                </div>
            </div>
        </div>

        <div className="photo_before_after">
            <div>
                <img src="/trans-bef-1.avif" alt="before" />
                <p>Before</p>
            </div>
            <div>
                <img src="/trans-aft-1.avif" alt="before" />
                <p>After</p>
            </div>
        </div>
        </div>
        </div>
        <div className='Transformation'>
        <h2>Transformation mades possible <br/> with Gymflucers</h2>
        <div className='trans-main'>
        <div className="trans_details">
            <div className="details_Header">
                <h1>Name : <span>Povannan</span></h1>
                <h1>Age : <span>32</span></h1>
            </div>
            <div className="trans_table">
                <div className="table_header">
                    <h3 className='table-square'>9 Weeeks</h3>
                    <h3>before</h3>
                    <h3>after</h3>
                </div>
                <hr />
                <div className="table_header">
                    <h3>Weight</h3>
                    <h3><span>85</span>kg</h3>
                    <h3><span>74</span>kg</h3>
                </div>
                <div className="table_header">
                    <h3>Body fast</h3>
                    <h3><span>35</span>%</h3>
                    <h3><span>15</span>%</h3>
                </div>
            </div>
        </div>

        <div className="photo_before_after">
            <div>
                <img src="/trans-bef-2.avif" alt="before" />
                <p>Before</p>
            </div>
            <div>
                <img src="/trans-aft-2.avif" alt="before" />
                <p>After</p>
            </div>
        </div>
        </div>
        </div>
        <div className='Transformation'>
        <h2>Transformation mades possible <br/> with Gymflucers</h2>
        <div className='trans-main'>
        <div className="trans_details">
            <div className="details_Header">
                <h1>Name : <span>Kamal</span></h1>
                <h1>Age : <span>28</span></h1>
            </div>
            <div className="trans_table">
                <div className="table_header">
                    <h3 className='table-square'>9 Weeeks</h3>
                    <h3>before</h3>
                    <h3>after</h3>
                </div>
                <hr />
                <div className="table_header">
                    <h3>Weight</h3>
                    <h3><span>85</span>kg</h3>
                    <h3><span>78</span>kg</h3>
                </div>
                <div className="table_header">
                    <h3>Body fast</h3>
                    <h3><span>35</span>%</h3>
                    <h3><span>15</span>%</h3>
                </div>
            </div>
        </div>

        <div className="photo_before_after">
            <div>
                <img src="/trans-bef-3.avif" alt="before" />
                <p>Before</p>
            </div>
            <div>
                <img src="/trans-aft-3.avif" alt="before" />
                <p>After</p>
            </div>
        </div>
        </div>
        </div>
      </Slider>
    </div>
  )
}

export default TransformationSlide