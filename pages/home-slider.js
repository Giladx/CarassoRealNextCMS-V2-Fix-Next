import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'

import homeSliderResource from '../resources/home-slider'

const HomeSlider = (props) => {
  return (
    <>
      <div className="home-slider-container">
        <Head>
          <title>HomeSlider - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="HomeSlider - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/58c2f8ee-ffd7-4d8b-bdd2-427960b94318/109b4fac-a4aa-4f2a-b514-c3edb8f8c6af?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div className="home-slider-slide">
          <div
            data-thq="slider"
            data-loop="false"
            data-autoplay="false"
            data-navigation="false"
            data-pagination="false"
            data-reverse-direction="false"
            data-pause-autoplay-on-mouse-enter="false"
            data-disable-autoplay-on-interaction="false"
            className="home-slider-slider swiper"
          >
            <div
              data-thq="slider-wrapper"
              className="home-slider-slider-wrapper swiper-wrapper"
            >
              <div
                data-thq="slider-slide"
                className="home-slider-slider-slide swiper-slide"
              >
                <DataProvider
                  renderSuccess={(params) => (
                    <>
                      <div className="home-slider-container1">
                        <Repeater
                          items={params}
                          renderItem={(context_g3pwmo) => (
                            <>
                              <div className="home-slider-container-x">
                                <div
                                  id="image-container"
                                  className="home-slider-projectcard projectcard"
                                >
                                  <div className="home-slider-project-card">
                                    <div className="home-slider-projectdetailscontainer project-inner">
                                      <div className="home-slider-projectstatus">
                                        <span className="home-slider-text">
                                          {context_g3pwmo?.projectStatus}
                                        </span>
                                        <img
                                          alt="VectorStroke3708"
                                          src="/external/vectorstroke3708-4itf.svg"
                                          className="home-slider-vector-stroke"
                                        />
                                      </div>
                                      <div className="home-slider-projectcontent">
                                        <img
                                          id="btn-1"
                                          alt="projectarrowbutton3708"
                                          src="/external/projectarrowbutton3708-a4n2-200h-200h.webp"
                                          loading="lazy"
                                          className="home-slider-projectarrowbutton"
                                        />
                                        <div className="home-slider-projectdetails">
                                          <div
                                            id="info"
                                            className="home-slider-projectnamelocation projectinfo"
                                          >
                                            <span className="home-slider-text1">
                                              {context_g3pwmo?.cityC}
                                            </span>
                                            <span className="home-slider-text2">
                                              {context_g3pwmo?.brandName}
                                            </span>
                                            <span className="home-slider-text3">
                                              {context_g3pwmo?.mainDescription}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="home-slider-container2"></div>
                                    <div className="home-slider-image project-img-small">
                                      <img
                                        alt="image"
                                        src="https://images.unsplash.com/photo-1625283518288-00362afc8663?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxoYXBweSUyMHBlb3BsZXxlbnwwfHx8fDE3MjEyMzA3NDl8MA&amp;ixlib=rb-4.0.3&amp;w=400"
                                        className="home-slider-image1 mask"
                                      />
                                    </div>
                                    <Script
                                      html={`<style>
#image-container:hover #mask {
   opacity: 1;
   transition: .35s all 0.3s ease-in-out;
}
#image-container:hover #info {
   top: -155px;
   transition: .35s all 0.3s ease-in-out;
}

#image-container:hover #btn-1 {
   top: -30px;
   transition: .35s all 0.3s ease-in-out;
}
#mask {
transition: .35s all 0.3s ease-in-out;
}
#info {
transition: .35s all 0.3s ease-in-out;
}
#btn-1 {
transition: .35s all 0.3s ease-in-out;
}
</style>`}
                                    ></Script>
                                    <div className="home-slider-container3">
                                      <div className="home-slider-image2 project-img-small">
                                        <img
                                          id="mask"
                                          alt="image"
                                          src={
                                            context_g3pwmo?.mainFeaturedImage
                                              ?.url
                                          }
                                          className="mask"
                                        />
                                      </div>
                                      <img
                                        alt="image"
                                        src={context_g3pwmo?.heroImage?.url}
                                        className="home-slider-image4"
                                      />
                                      <div className="home-slider-container4"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        />
                      </div>
                    </>
                  )}
                  initialData={props.contextG3pwmoProp}
                  persistDataDuringLoading={true}
                />
              </div>
              <div
                data-thq="slider-slide"
                className="home-slider-slider-slide1 swiper-slide"
              ></div>
              <div
                data-thq="slider-slide"
                className="home-slider-slider-slide2 swiper-slide"
              ></div>
            </div>
            <div
              data-thq="slider-pagination"
              className="home-slider-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="home-slider-slider-button-prev swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="home-slider-slider-button-next swiper-button-next"
            ></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-slider-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-slider-slide {
            flex: 0 0 auto;
            width: 80%;
            display: flex;
            direction: rtl;
            align-self: flex-start;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .home-slider-slider {
            width: 100%;
            height: auto;
            display: inline-block;
            direction: rtl;
            align-self: center;
          }
          .home-slider-slider-wrapper {
            direction: rtl;
          }
          .home-slider-slider-slide {
            display: flex;
          }
          .home-slider-container1 {
            display: flex;
            direction: rtl;
            flex-direction: row;
          }
          .home-slider-container-x {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-slider-projectcard {
            margin: var(--dl-space-space-unit);
          }
          .home-slider-project-card {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-slider-projectdetailscontainer {
            z-index: 10;
          }
          .home-slider-projectstatus {
            gap: 9px;
            cursor: pointer;
            display: flex;
            padding: 8px 15px;
            align-items: center;
            border-radius: 9999px;
            justify-content: flex-end;
            background-color: rgba(255, 255, 255, 0.30000001192092896);
          }
          .home-slider-text {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 14px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-slider-vector-stroke {
            width: 12px;
            height: 12px;
          }
          .home-slider-projectcontent {
            gap: 15px;
            width: 322px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .home-slider-projectarrowbutton {
            top: 0;
            left: 0px;
            width: auto;
            cursor: pointer;
            height: auto;
            position: absolute;
          }
          .home-slider-projectdetails {
            gap: 24px;
            width: auto;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-slider-projectnamelocation {
            z-index: 100;
          }
          .home-slider-text1 {
            color: var(--dl-color-carasso-plainwhite);
            height: 5px;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 700;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-slider-text2 {
            color: var(--dl-color-carasso-plainwhite);
            height: 40px;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 300;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-slider-text3 {
            color: var(--dl-color-carasso-plainwhite);
            width: 75%;
            height: auto;
            direction: rtl;
            font-size: 14px;
            align-self: flex-end;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
          }
          .home-slider-container2 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
          }
          .home-slider-image:hover {
            border-color: var(--dl-color-carasso-red);
          }
          .home-slider-image1 {
            display: none;
          }
          .home-slider-container3 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
          }
          .home-slider-image2 {
            top: 46px;
            z-index: 5;
            overflow: hidden;
            transform: rotate(15deg);
            border-color: rgba(255, 82, 61, 0);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .home-slider-image4 {
            width: 100%;
            height: 100%;
            z-index: 0;
            object-fit: cover;
          }
          .home-slider-container4 {
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.05) 0%,
              rgba(0, 0, 0, 0.25) 47%,
              rgba(0, 0, 0, 0.6) 100%
            );
          }
          .home-slider-slider-slide1 {
            display: flex;
          }
          .home-slider-slider-slide2 {
            display: flex;
          }
          .home-slider-slider-pagination {
            display: none;
          }
          .home-slider-slider-button-prev {
            display: none;
          }
          .home-slider-slider-button-next {
            display: none;
          }
          @media (max-width: 1440px) {
            .home-slider-slider {
              direction: rtl;
            }
          }
          @media (max-width: 1200px) {
            .home-slider-projectcard {
              margin-left: 20px;
            }
          }
          @media (max-width: 991px) {
            .home-slider-projectcard {
              margin-left: 20px;
            }
          }
          @media (max-width: 479px) {
            .home-slider-projectcard {
              width: 350px;
            }
            .home-slider-projectnamelocation {
              right: 70px;
            }
          }
        `}
      </style>
    </>
  )
}

export default HomeSlider

export async function getStaticProps(context) {
  try {
    const contextG3pwmoProp = await homeSliderResource({
      ...context?.params,
    })
    return {
      props: {
        contextG3pwmoProp: contextG3pwmoProp,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      props: {},
      revalidate: 60,
    }
  }
}
