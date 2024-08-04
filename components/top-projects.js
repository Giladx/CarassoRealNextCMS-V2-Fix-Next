import React, { useState } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const TopProjects = (props) => {
  const [slider1isVisible, setSlider1isVisible] = useState(true)
  const [slider2isVisible, setSlider2isVisible] = useState(true)
  return (
    <>
      <div className="top-projects-top-projects">
        <div className="top-projects-backgroundelipse"></div>
        <div className="top-projects-content">
          <div className="top-projects-projectsandheaders tabs">
            <span className="top-projects-text">
              <span className="top-projects-text01">הפרויקטים</span>
              <span className="top-projects-text02">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="top-projects-text03">הנבחרים שלנו</span>
            </span>
            <div className="top-projects-tabs tab-titles">
              <div
                onClick={() => {
                  setSlider1isVisible(false)
                  setSlider2isVisible(!slider2isVisible)
                }}
                className="top-projects-frame156 tab-title"
              >
                {!slider2isVisible && (
                  <span className="top-projects-text04">
                    <span>תמ״א 38/2</span>
                  </span>
                )}
                {slider2isVisible && (
                  <span className="top-projects-text06">
                    <span>תמ״א 38/2</span>
                  </span>
                )}
              </div>
              <div
                onClick={() => {
                  setSlider2isVisible(false)
                  setSlider1isVisible(!slider1isVisible)
                }}
                className="top-projects-frame157 tab-title"
              >
                {slider1isVisible && (
                  <span className="top-projects-text08">פינוי בינוי</span>
                )}
                {!slider1isVisible && (
                  <span className="top-projects-text09">
                    <span>פינוי בינוי</span>
                  </span>
                )}
              </div>
            </div>
            <div className="top-projects-urbanrenewalprojects tab-contents">
              <div className="top-projects-tab1 tab-content">
                <div
                  data-thq="slider"
                  data-autoplay="false"
                  data-navigation="true"
                  data-pagination="true"
                  className="top-projects-slider swiper"
                >
                  <div data-thq="slider-wrapper" className="swiper-wrapper">
                    <div
                      data-thq="slider-slide"
                      className="top-projects-slider-slide swiper-slide"
                    >
                      <div className="top-projects-leftcoloumn">
                        <div className="top-projects-projectimageandtags">
                          <img
                            alt="image"
                            src="/external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-500h-500h-500h.webp"
                            className="top-projects-image"
                          />
                          <div className="top-projects-projectdetails">
                            <div className="top-projects-projectnamelocation">
                              <span className="top-projects-text11">
                                <span>ירושלים</span>
                              </span>
                              <span className="top-projects-text13">
                                <span>דרך חברון התנופה</span>
                              </span>
                            </div>
                            <span className="top-projects-text15">
                              פרויקט פינוי בינוי בדרך חברון, הממוקם בשכונת
                              תלפיות, סמוך לאזור התעשייה הידוע, ממערב לדרך
                              חברון. התכנית כוללת הריסת 136 יחידות דיור והקמת
                              450 יח״ד ב-4 מגדלים הכוללים קומת מסחר, ושטחי
                              ציבור.
                            </span>
                          </div>
                        </div>
                        <div className="top-projects-overlay"></div>
                      </div>
                      <div className="top-projects-rightcoloumn">
                        <div className="top-projects-projectimageand">
                          <img
                            alt="image"
                            src="/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h-500h.webp"
                            className="top-projects-image1"
                          />
                          <div className="top-projects-overlay1"></div>
                          <div className="top-projects-projectdetai">
                            <div className="top-projects-projectnamelocat">
                              <span className="top-projects-text16">
                                <span>ירושלים</span>
                              </span>
                              <span className="top-projects-text18">
                                <span>קריית היובל</span>
                              </span>
                            </div>
                            <span className="top-projects-text20">
                              <span>
                                קרית יובל: השכונה האהובה, מתחדשת והופכת למתחם
                                עירוני מעורר השראה. המתחם, המתפרס לאורך חלקו
                                הצפוני של רחוב טהון, מהווה מרחב עירוני פורץ דרך
                                ומעניק את החוויה האורבנית המושלמת. בליבו מתחם
                                פנאי, קניות ובילוי חי ותוסס לאורך כל שעות היום.
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-thq="slider-slide"
                      className="top-projects-slider-slide1 swiper-slide"
                    >
                      <div className="top-projects-leftcoloumn1">
                        <div className="top-projects-projectimageandtags1">
                          <img
                            alt="image"
                            src="/external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-500h-500h-500h.webp"
                            className="top-projects-image2"
                          />
                          <div className="top-projects-projectdetails1">
                            <div className="top-projects-projectnamelocation1">
                              <span className="top-projects-text22">
                                <span>ירושלים</span>
                              </span>
                              <span className="top-projects-text24">
                                <span>דרך חברון התנופה</span>
                              </span>
                            </div>
                            <span className="top-projects-text26">
                              פרויקט פינוי בינוי בדרך חברון, הממוקם בשכונת
                              תלפיות, סמוך לאזור התעשייה הידוע, ממערב לדרך
                              חברון. התכנית כוללת הריסת 136 יחידות דיור והקמת
                              450 יח״ד ב-4 מגדלים הכוללים קומת מסחר, ושטחי
                              ציבור.
                            </span>
                          </div>
                        </div>
                        <div className="top-projects-overlay2"></div>
                      </div>
                      <div className="top-projects-rightcoloumn1">
                        <div>
                          <img
                            alt="image"
                            src="/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h-500h.webp"
                            className="top-projects-image3"
                          />
                          <div className="top-projects-overlay3"></div>
                          <div>
                            <div>
                              <span className="top-projects-text27">
                                <span>ירושלים</span>
                              </span>
                              <span className="top-projects-text29">
                                <span>קריית היובל</span>
                              </span>
                            </div>
                            <span className="top-projects-text31">
                              <span>
                                קרית יובל: השכונה האהובה, מתחדשת והופכת למתחם
                                עירוני מעורר השראה. המתחם, המתפרס לאורך חלקו
                                הצפוני של רחוב טהון, מהווה מרחב עירוני פורץ דרך
                                ומעניק את החוויה האורבנית המושלמת. בליבו מתחם
                                פנאי, קניות ובילוי חי ותוסס לאורך כל שעות היום.
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-thq="slider-pagination"
                    className="top-projects-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                  >
                    <div
                      data-thq="slider-pagination-bullet"
                      className="swiper-pagination-bullet swiper-pagination-bullet-active"
                    ></div>
                    <div
                      data-thq="slider-pagination-bullet"
                      className="swiper-pagination-bullet"
                    ></div>
                  </div>
                  <div
                    data-thq="slider-button-prev"
                    className="top-projects-slider-button-prev swiper-button-prev"
                  ></div>
                  <div
                    data-thq="slider-button-next"
                    className="top-projects-slider-button-next swiper-button-next"
                  ></div>
                </div>
              </div>
              <div className="top-projects-tab2 tab-content">
                <div
                  data-thq="slider"
                  data-autoplay="false"
                  data-navigation="true"
                  data-pagination="true"
                  className="top-projects-slider1 swiper"
                >
                  <div data-thq="slider-wrapper" className="swiper-wrapper">
                    <div
                      data-thq="slider-slide"
                      className="top-projects-slider-slide2 swiper-slide"
                    >
                      <div className="top-projects-leftcoloumn2">
                        <div className="top-projects-projectimageandtags2 top-projects-projectimageandtags2">
                          <img
                            alt="image"
                            src="/external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-500h-500h-500h.webp"
                            className="top-projects-image4"
                          />
                          <div className="top-projects-projectdetails2 top-projects-projectdetails2">
                            <div className="top-projects-projectnamelocation2 top-projects-projectnamelocation2">
                              <span className="top-projects-text33">
                                <span>ירושלים</span>
                              </span>
                              <span className="top-projects-text35">
                                <span>דרך חברון התנופה</span>
                              </span>
                            </div>
                            <span className="top-projects-text37">
                              פרויקט פינוי בינוי בדרך חברון, הממוקם בשכונת
                              תלפיות, סמוך לאזור התעשייה הידוע, ממערב לדרך
                              חברון. התכנית כוללת הריסת 136 יחידות דיור והקמת
                              450 יח״ד ב-4 מגדלים הכוללים קומת מסחר, ושטחי
                              ציבור.
                            </span>
                          </div>
                        </div>
                        <div className="top-projects-overlay4"></div>
                      </div>
                      <div className="top-projects-rightcoloumn2">
                        <div className="top-projects-projectimageand1">
                          <img
                            alt="image"
                            src="/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h-500h.webp"
                            className="top-projects-image5"
                          />
                          <div className="top-projects-overlay5"></div>
                          <div className="top-projects-projectdetai1">
                            <div className="top-projects-projectnamelocat1">
                              <span className="top-projects-text38">
                                <span>ירושלים</span>
                              </span>
                              <span className="top-projects-text40">
                                <span>קריית היובל</span>
                              </span>
                            </div>
                            <span className="top-projects-text42">
                              <span>
                                קרית יובל: השכונה האהובה, מתחדשת והופכת למתחם
                                עירוני מעורר השראה. המתחם, המתפרס לאורך חלקו
                                הצפוני של רחוב טהון, מהווה מרחב עירוני פורץ דרך
                                ומעניק את החוויה האורבנית המושלמת. בליבו מתחם
                                פנאי, קניות ובילוי חי ותוסס לאורך כל שעות היום.
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-thq="slider-slide"
                      className="top-projects-slider-slide3 swiper-slide"
                    >
                      <div className="top-projects-leftcoloumn3">
                        <div className="top-projects-projectimageandtags3">
                          <img
                            alt="image"
                            src="/external/1fff79fb16c5cb75fb3cfda99ba4dc3b-700w-500h-500h-500h.webp"
                            className="top-projects-image6"
                          />
                          <div className="top-projects-projectdetails3">
                            <div className="top-projects-projectnamelocation3">
                              <span className="top-projects-text44">
                                <span>ירושלים</span>
                              </span>
                              <span className="top-projects-text46">
                                <span>דרך חברון התנופה</span>
                              </span>
                            </div>
                            <span className="top-projects-text48">
                              פרויקט פינוי בינוי בדרך חברון, הממוקם בשכונת
                              תלפיות, סמוך לאזור התעשייה הידוע, ממערב לדרך
                              חברון. התכנית כוללת הריסת 136 יחידות דיור והקמת
                              450 יח״ד ב-4 מגדלים הכוללים קומת מסחר, ושטחי
                              ציבור.
                            </span>
                          </div>
                        </div>
                        <div className="top-projects-overlay6"></div>
                      </div>
                      <div className="top-projects-rightcoloumn3">
                        <div className="top-projects-projectimageandtags21">
                          <img
                            alt="image"
                            src="/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h-500h.webp"
                            className="top-projects-image7"
                          />
                          <div className="top-projects-overlay7"></div>
                          <div className="top-projects-projectdetails21">
                            <div className="top-projects-projectnamelocation21">
                              <span className="top-projects-text49">
                                <span>ירושלים</span>
                              </span>
                              <span className="top-projects-text51">
                                <span>קריית היובל</span>
                              </span>
                            </div>
                            <span className="top-projects-text53">
                              <span>
                                קרית יובל: השכונה האהובה, מתחדשת והופכת למתחם
                                עירוני מעורר השראה. המתחם, המתפרס לאורך חלקו
                                הצפוני של רחוב טהון, מהווה מרחב עירוני פורץ דרך
                                ומעניק את החוויה האורבנית המושלמת. בליבו מתחם
                                פנאי, קניות ובילוי חי ותוסס לאורך כל שעות היום.
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-thq="slider-pagination"
                    className="top-projects-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                  >
                    <div
                      data-thq="slider-pagination-bullet"
                      className="swiper-pagination-bullet swiper-pagination-bullet-active"
                    ></div>
                    <div
                      data-thq="slider-pagination-bullet"
                      className="swiper-pagination-bullet"
                    ></div>
                  </div>
                  <div
                    data-thq="slider-button-prev"
                    className="top-projects-slider-button-prev1 swiper-button-prev"
                  ></div>
                  <div
                    data-thq="slider-button-next"
                    className="top-projects-slider-button-next1 swiper-button-next"
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <div className="top-projects-container1">
                <Script
                  html={`  <script>
  function initTabs() {
    // find all tabs containers
    const tabsContainers = document.getElementsByClassName("tabs");

    function selectContainer(tabContents, id) {
      Array.from(tabContents).forEach((tabContent, index) => {
        tabContent.style.display = id === index ? "none" : "flex";
      });
    }

    function selectTabTitle(tabTitles, id) {
      Array.from(tabTitles).forEach((tabTitle, index) => {
        tabTitle.classList.remove("tab-title-selected");
        // set the first tab content vile selected by default
        if (id === index) {
          tabTitle.classList.add("tab-title-selected");
        }
      });
    }

    // init state and events for each tabs system
    Array.from(tabsContainers).forEach((tabsContainer) => {
      // initialisation flag
      if (tabsContainer.classList.contains("initialised")) {
        return;
      }

      tabsContainer.classList.add("initialised");

      const tabTitles = tabsContainer.getElementsByClassName("tab-title");
      const tabContents = tabsContainer.getElementsByClassName("tab-content");

      // set the first tab content selected by default
      selectContainer(tabsContainer, 0);

      // set the first tabTitle selected by default
      selectTabTitle(tabTitles, 0);

      // add events
      Array.from(tabTitles).forEach((tabTitle, index) => {
        // show corresponding content on click
        tabTitle.addEventListener("click", () => {
          selectContainer(tabContents, index);
          selectTabTitle(tabTitles, index);
        });
      });
    });
  }

  initTabs();

const tabs = document.querySelectorAll('tab-title');
tabs.forEach(clickedTab =>{
  clickedTab.addEventListener('click', () => {
    tabs.forEach( tab => {
      tab.classList.remove('active');
    });
    e.target.classList.add('active');
  });
});
</script>`}
                ></Script>
              </div>
            </div>
          </div>
          <div className="top-projects-bottomrow">
            <div className="top-projects-leftrightarrows">
              <img
                alt={props.arrowAlt}
                src={props.arrowSrc}
                className="top-projects-arrow"
              />
              <img
                alt={props.arrowAlt1}
                src={props.arrowSrc1}
                className="top-projects-arrow1"
              />
            </div>
            <div className="top-projects-gallerydots">
              <div className="top-projects-frame162"></div>
              <div className="top-projects-frame167"></div>
              <div className="top-projects-frame166"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .top-projects-top-projects {
            width: auto;
            height: auto;
            display: flex;
            padding: 0 90px;
            z-index: 1;
            position: relative;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .top-projects-backgroundelipse {
            gap: 10px;
            top: 120px;
            left: -200px;
            width: 637px;
            height: 637px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-color: var(--dl-color-carasso-green);
            border-style: solid;
            border-width: 1px;
            border-radius: 999px;
          }
          .top-projects-content {
            gap: 28px;
            width: 1260px;
            display: flex;
            z-index: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-projectsandheaders {
            gap: 44px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text {
            color: var(--dl-color-carasso-primaryblack);
            width: 100%;
            height: auto;
            font-size: 50px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text01 {
            font-family: 'Ploni ML v2 AAA Light';
          }
          .top-projects-text02 {
            font-weight: 700;
          }
          .top-projects-text03 {
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 700;
          }
          .top-projects-tabs {
            gap: 40px;
            display: flex;
            align-self: stretch;
            flex-shrink: 0;
            padding-left: var(--dl-space-space-twounits);
            justify-content: flex-end;
          }
          .top-projects-frame156 {
            gap: 40px;
            cursor: pointer;
            display: flex;
            align-items: center;
            padding-top: 0 0 12px;
            padding-left: 0 0 12px;
            padding-right: 0 0 12px;
            justify-content: center;
          }
          .top-projects-text04 {
            fill: var(--dl-color-carasso-green);
            color: var(--dl-color-carasso-green);
            height: auto;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            border-color: var(--dl-color-carasso-green);
            border-width: 1px;
            font-stretch: normal;
            padding-bottom: 12px;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .top-projects-text06 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            padding-bottom: 12px;
            text-decoration: none;
          }
          .top-projects-frame157 {
            gap: 40px;
            color: var(--dl-color-theme-neutral-dark);
            cursor: pointer;
            display: flex;
            align-items: center;
            padding-top: 0 0 12px;
            padding-left: 0 0 12px;
            padding-right: 0 0 12px;
            justify-content: center;
          }
          .top-projects-text08 {
            color: var(--dl-color-carasso-green);
            height: auto;
            font-size: 24px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 105%;
            border-color: var(--dl-color-carasso-green);
            border-width: 1px;
            font-stretch: normal;
            padding-bottom: 12px;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .top-projects-text09 {
            fill: var(--dl-color-carasso-darkergray);
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            padding-bottom: 12px;
            text-decoration: none;
          }
          .top-projects-urbanrenewalprojects {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .top-projects-tab1 {
            flex: 0 0 auto;
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: row;
          }
          .top-projects-slider {
            width: 100%;
            height: 100%;
            display: inline-block;
            position: relative;
          }
          .top-projects-slider-slide {
            width: 100%;
            height: auto;
            display: flex;
          }
          .top-projects-leftcoloumn {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags {
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h-500h-500h.webp');
          }
          .top-projects-image {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-projectdetails {
            gap: 30px;
            top: 300px;
            left: 0px;
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            z-index: 100;
            position: absolute;
            flex-grow: 1;
            transition: 0.3s;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-projectdetails:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text11 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text13 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text15 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 500;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-overlay {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-rightcoloumn {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageand {
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
          }
          .top-projects-image1 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-overlay1 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-projectdetai {
            gap: 30px;
            top: 300px;
            left: 0px;
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            z-index: 100;
            position: absolute;
            flex-grow: 1;
            transition: 0.3s;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-projectdetai:hover {
            top: 170px;
          }
          .top-projects-projectnamelocat {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text16 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text18 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text20 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-slider-slide1 {
            width: 100%;
            height: auto;
            display: flex;
          }
          .top-projects-leftcoloumn1 {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags1 {
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h-500h-500h.webp');
          }
          .top-projects-image2 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-projectdetails1 {
            gap: 30px;
            top: 300px;
            left: 0px;
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            z-index: 100;
            position: absolute;
            flex-grow: 1;
            transition: 0.3s;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-projectdetails1:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation1 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text22 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text24 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text26 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 500;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-overlay2 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-rightcoloumn1 {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags2 {
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
          }
          .top-projects-image3 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-overlay3 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-projectdetails2 {
            gap: 30px;
            top: 300px;
            left: 0px;
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            z-index: 100;
            position: absolute;
            flex-grow: 1;
            transition: 0.3s;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-projectdetails2:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation2 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text27 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text29 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text31 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-slider-pagination {
            display: block;
          }
          .top-projects-slider-button-prev {
            display: block;
          }
          .top-projects-slider-button-next {
            display: block;
          }
          .top-projects-tab2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .top-projects-slider1 {
            width: 100%;
            height: 100%;
            display: inline-block;
            position: relative;
          }
          .top-projects-slider-slide2 {
            width: 100%;
            height: auto;
            display: flex;
          }
          .top-projects-leftcoloumn2 {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags2 {
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h-500h-500h.webp');
          }
          .top-projects-image4 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-projectdetails2 {
            gap: 30px;
            top: 300px;
            left: 0px;
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            z-index: 100;
            position: absolute;
            flex-grow: 1;
            transition: 0.3s;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-projectdetails2:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation2 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text33 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text35 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text37 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 500;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-overlay4 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-rightcoloumn2 {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageand1 {
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
          }
          .top-projects-image5 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-overlay5 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-projectdetai1 {
            gap: 30px;
            top: 300px;
            left: 0px;
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            z-index: 100;
            position: absolute;
            flex-grow: 1;
            transition: 0.3s;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-projectdetai1:hover {
            top: 170px;
          }
          .top-projects-projectnamelocat1 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text38 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text40 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text42 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-slider-slide3 {
            width: 100%;
            height: auto;
            display: flex;
          }
          .top-projects-leftcoloumn3 {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags3 {
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/external/7bf6c9d4a441e73511f0390b6b541a6b-1300w-500h-500h-500h-500h.webp');
          }
          .top-projects-image6 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-projectdetails3 {
            gap: 30px;
            top: 300px;
            left: 0px;
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            z-index: 100;
            position: absolute;
            flex-grow: 1;
            transition: 0.3s;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-projectdetails3:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation3 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text44 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text46 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text48 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 500;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-overlay6 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-rightcoloumn3 {
            width: 45%;
            height: 450px;
            margin: var(--dl-space-space-halfunit);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .top-projects-projectimageandtags21 {
            display: flex;
            padding: 30px;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-end;
            border-radius: 20px;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
          }
          .top-projects-image7 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .top-projects-overlay7 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.42) 0%,
              rgba(0, 0, 0, 0.3) 49%,
              rgba(0, 0, 0, 0.42) 100%
            );
          }
          .top-projects-projectdetails21 {
            gap: 30px;
            top: 300px;
            left: 0px;
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            z-index: 100;
            position: absolute;
            flex-grow: 1;
            transition: 0.3s;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .top-projects-projectdetails21:hover {
            top: 170px;
          }
          .top-projects-projectnamelocation21 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .top-projects-text49 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text51 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-text53 {
            color: var(--dl-color-carasso-plainwhite);
            width: 513px;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .top-projects-slider-pagination1 {
            display: block;
          }
          .top-projects-slider-button-prev1 {
            display: block;
          }
          .top-projects-slider-button-next1 {
            display: block;
          }
          .top-projects-container1 {
            display: contents;
          }
          .top-projects-bottomrow {
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: space-between;
          }
          .top-projects-leftrightarrows {
            gap: 15px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
          }
          .top-projects-arrow {
            width: 28px;
            height: 28px;
          }
          .top-projects-arrow1 {
            width: 28px;
            height: 28px;
          }
          .top-projects-gallerydots {
            gap: 8px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .top-projects-frame162 {
            width: 6px;
            height: 6px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-graytextcolor);
          }
          .top-projects-frame167 {
            width: 6px;
            height: 6px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-graytextcolor);
          }
          .top-projects-frame166 {
            width: 8px;
            height: 8px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-primaryblack);
          }
          @media (max-width: 1440px) {
            .top-projects-text {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 50px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 110%;
              text-decoration: none;
            }
            .top-projects-text01 {
              font-weight: 300;
            }
            .top-projects-text02 {
              font-weight: 300;
            }
            .top-projects-text03 {
              font-weight: 700;
            }
            .top-projects-text11 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text16 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text22 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text27 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text33 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text38 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text44 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .top-projects-text49 {
              font-family: Ploni ML v2 AAA Bold;
            }
          }
          @media (max-width: 1200px) {
            .top-projects-top-projects {
              width: 100%;
            }
            .top-projects-content {
              width: 100%;
            }
            .top-projects-urbanrenewalprojects {
              width: 100%;
              height: 100%;
              flex-direction: column;
            }
            .top-projects-leftcoloumn {
              width: auto;
            }
            .top-projects-overlay {
              width: 100%;
            }
            .top-projects-rightcoloumn {
              width: auto;
            }
            .top-projects-overlay1 {
              width: 100%;
            }
            .top-projects-leftcoloumn1 {
              width: auto;
            }
            .top-projects-overlay2 {
              width: 100%;
            }
            .top-projects-rightcoloumn1 {
              width: auto;
            }
            .top-projects-overlay3 {
              width: 100%;
            }
            .top-projects-leftcoloumn2 {
              width: auto;
            }
            .top-projects-overlay4 {
              width: 100%;
            }
            .top-projects-rightcoloumn2 {
              width: auto;
            }
            .top-projects-overlay5 {
              width: 100%;
            }
            .top-projects-leftcoloumn3 {
              width: auto;
            }
            .top-projects-overlay6 {
              width: 100%;
            }
            .top-projects-rightcoloumn3 {
              width: auto;
            }
            .top-projects-overlay7 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .top-projects-top-projects {
              padding-left: 40px;
              padding-right: 40px;
            }
            .top-projects-tab1 {
              display: none;
            }
            .top-projects-slider-slide {
              flex-direction: column-reverse;
            }
            .top-projects-slider-slide1 {
              flex-direction: column-reverse;
            }
            .top-projects-tab2 {
              display: none;
            }
            .top-projects-slider-slide2 {
              flex-direction: column-reverse;
            }
            .top-projects-slider-slide3 {
              flex-direction: column-reverse;
            }
          }
          @media (max-width: 767px) {
            .top-projects-top-projects {
              padding-left: 20px;
              padding-right: 20px;
            }
            .top-projects-projectimageandtags {
              width: 100%;
            }
            .top-projects-projectdetails {
              width: 100%;
            }
            .top-projects-projectimageand {
              width: 100%;
            }
            .top-projects-projectdetai {
              width: 100%;
            }
            .top-projects-projectimageandtags1 {
              width: 100%;
            }
            .top-projects-projectdetails1 {
              width: 100%;
            }
            .top-projects-projectimageandtags2 {
              width: 100%;
            }
            .top-projects-projectdetails2 {
              width: 100%;
            }
            .top-projects-projectimageand1 {
              width: 100%;
            }
            .top-projects-projectdetai1 {
              width: 100%;
            }
            .top-projects-projectimageandtags3 {
              width: 100%;
            }
            .top-projects-projectdetails3 {
              width: 100%;
            }
            .top-projects-projectimageandtags21 {
              width: 100%;
            }
            .top-projects-projectdetails21 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .top-projects-top-projects {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .top-projects-backgroundelipse {
              left: -350px;
            }
            .top-projects-text {
              padding-left: var(--dl-space-space-fourunits);
            }
            .top-projects-projectdetails {
              width: 100%;
            }
            .top-projects-text15 {
              width: 100%;
            }
            .top-projects-projectdetai {
              width: 100%;
            }
            .top-projects-text20 {
              width: auto;
            }
            .top-projects-projectdetails1 {
              width: 100%;
            }
            .top-projects-text26 {
              width: 100%;
            }
            .top-projects-projectdetails2 {
              width: 100%;
            }
            .top-projects-text31 {
              width: auto;
            }
            .top-projects-text37 {
              width: 100%;
            }
            .top-projects-projectdetai1 {
              width: 100%;
            }
            .top-projects-text42 {
              width: auto;
            }
            .top-projects-projectdetails3 {
              width: 100%;
            }
            .top-projects-text48 {
              width: 100%;
            }
            .top-projects-projectdetails21 {
              width: 100%;
            }
            .top-projects-text53 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

TopProjects.defaultProps = {
  arrowSrc1: '/external/arrow5030-w72a.svg',
  imageAlt: 'image',
  arrowSrc: '/external/arrow5030-f3zn.svg',
  arrowAlt1: 'Arrow5030',
  arrowAlt: 'Arrow5030',
}

TopProjects.propTypes = {
  arrowSrc1: PropTypes.string,
  imageAlt: PropTypes.string,
  arrowSrc: PropTypes.string,
  arrowAlt1: PropTypes.string,
  arrowAlt: PropTypes.string,
}

export default TopProjects
