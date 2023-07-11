import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const banner1 = require('../static/banner/1.jpg')
const banner2 = require('../static/banner/2.jpg')
const banner3 = require('../static/banner/3.png')
const banner4 = require('../static/banner/4.jpg')




const BannerCarousel = ()  =>{
    return(
        <Carousel className="max-w-screen-lg mx-auto mt-4 relative" autoPlay interval={3000} infiniteLoop showStatus={false} showThumbs={false}>
           <div>
                <img src={banner4} className="w-2/3 sm:w-1/2 mx-auto h-64 object-cover rounded-lg" />
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold sm:text-4xl">The World is Too big to Explore alone; find your travel mate and conquer it.</div> */}
            </div>
           
            <div>
                <img src={banner1}  className="w-2/3 sm:w-1/2 mx-auto h-64 object-cover rounded-lg"/>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold sm:text-4xl">
                    Two Roads diverged in a Wood, and I...I took the one with a Friend,and that has made all the difference.
                    </div>
            </div>
            <div>
                <img src={banner2} className="w-2/3 sm:w-1/2 mx-auto h-64 object-cover rounded-lg" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold sm:text-4xl">Life is Short, let`s Wander together</div>
            </div>
            <div>
                <img src={banner3} className="w-2/3 sm:w-1/2 mx-auto h-64 object-cover rounded-lg" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold sm:text-4xl"><b>Only For Students Travelling From Listed Countries </b> </div>
            </div>
        </Carousel>
    )
}
export default BannerCarousel;