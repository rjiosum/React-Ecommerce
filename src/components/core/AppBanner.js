import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/fa'

const AppBanner = () => {
    const arrowStyles: CSSProperties = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 32,
        height: 32,
        cursor: 'pointer',
    };

    return (
        <Carousel autoPlay={true}
                  showThumbs={false}
                  infiniteLoop={true}
                  showStatus={false}
                  renderArrowPrev={(onClickHandler, hasPrev, label) =>
                      hasPrev && (
                          <button
                              type="button"
                              onClick={onClickHandler}
                              title={label}
                              style={{ ...arrowStyles, left: 15 }}
                              className="bg-black bg-opacity-75 text-white outline-none focus:outline-none border-0 text-center rounded-full hover:bg-red-600 hover:text-white"
                          ><FaAngleDoubleLeft className="ml-2" /></button>
                      )
                  }
                  renderArrowNext={(onClickHandler, hasNext, label) =>
                      hasNext && (
                          <button
                              type="button"
                              onClick={onClickHandler}
                              title={label}
                              style={{ ...arrowStyles, right: 15 }}
                              className="bg-black bg-opacity-75 text-white outline-none focus:outline-none border-0 text-center  rounded-full hover:bg-red-600 hover:text-white"
                          ><FaAngleDoubleRight className="ml-2" /></button>
                      )
                  }
        >
            <div>
                <img src="../resources/images/banners/banner01.jpg" alt="banner01" />
            </div>
            <div>
                <img src="../resources/images/banners/banner02.jpg" alt="banner02" />
            </div>
            <div>
                <img src="../resources/images/banners/banner03.jpg" alt="banner03" />
            </div>
            <div>
                <img src="../resources/images/banners/banner04.jpg" alt="banner04" />
            </div>
            <div>
                <img src="../resources/images/banners/banner05.jpg" alt="banner05" />
            </div>
            <div>
                <img src="../resources/images/banners/banner06.jpg" alt="banner06" />
            </div>
        </Carousel>
    )
}

export default AppBanner;