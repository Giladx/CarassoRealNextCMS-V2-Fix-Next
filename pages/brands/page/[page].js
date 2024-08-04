import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import brandsPageInitialPropsTqNkResource from '../../../resources/brands-page-initial-props-tq_nk'
import brandsPageInitialPathsTqJaResource from '../../../resources/brands-page-initial-paths-tq_ja'

const Brands11 = (props) => {
  return (
    <>
      <div className="brands11-container">
        <Head>
          <title>Brands1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Brands1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <div id="topfilter" className="brands11-top-enries-filter">
          <img
            alt="herobackgroundresidential13669"
            src="/external/herobackgroundresidential13669-n3e.svg"
            className="brands11-heroback"
          />
          <div className="brands11-inner-cont">
            <div className="brands11-colleft">
              <div className="brands11-viewoptions-check">
                <div className="brands11-gridviewsx">
                  <span className="brands11-text">
                    <span>תצוגת רשת</span>
                  </span>
                  <img
                    alt="SquaresFour3669"
                    src="/external/squaresfour3669-yfhj.svg"
                    className="brands11-squares-four"
                  />
                </div>
                <div
                  id="clicklist"
                  className="brands11-fullframeviewx clicklist"
                >
                  <span className="brands11-text02">
                    <span>תצוגת רשימה</span>
                  </span>
                  <div className="brands11-rowsx">
                    <img
                      alt="Rectangle7263669"
                      src="/external/rectangle7263669-s05-200h-200h.png"
                      className="brands11-rectangle726"
                    />
                    <img
                      alt="Rectangle7273669"
                      src="/external/rectangle7273669-myob-200h-200h.png"
                      className="brands11-rectangle727"
                    />
                    <img
                      alt="Rectangle7283669"
                      src="/external/rectangle7283669-tlo-200h-200h.png"
                      className="brands11-rectangle728"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="brands11-colright">
              <div className="brands11-breadcrumbs">
                <span className="brands11-text04">פרויקטים למגורים</span>
                <div className="brands11-conx"></div>
                <img
                  alt="House3669"
                  src="/external/house3669-39bu.svg"
                  className="brands11-house"
                />
              </div>
              <span className="brands11-text05">
                <span className="brands11-text06">פרויקטים </span>
                <span className="brands11-text07">למגורים</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <div className="brands11-search-input">
                <div className="brands11-search-input-actual">
                  <input
                    type="text"
                    placeholder="פרויקט, מיקום, סגנון חיים, סטטוס התקדמות"
                    className="brands11-textinput"
                  />
                  <img
                    alt="Search3669"
                    src="/external/search3669-cxyu.svg"
                    className="brands11-search"
                  />
                  <div>
                    <div className="brands11-container2">
                      <Script
                        html={`<style>
::placeholder {
  color: #BBBCBF;
  opacity: 1; /* Firefox */
  font-size: 18px;
}

::-ms-input-placeholder { /* Edge 12 -18 */
  color: #BBBCBF;
  font-size: 18px;
}

:focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
}
</style>`}
                      ></Script>
                    </div>
                  </div>
                </div>
                <div className="brands11-searchbar">
                  <div className="brands11-textandsearch">
                    <span className="brands11-text10">
                      פרויקט, מיקום, סגנון חיים, סטטוס התקדמות
                    </span>
                    <img
                      alt="Search3669"
                      src="/external/search3669-cxyu.svg"
                      className="brands11-search1"
                    />
                  </div>
                </div>
                <div className="brands11-tagsoptions-x">
                  <div className="brands11-tags">
                    <div className="brands11-frame23">
                      <span className="brands11-text11">
                        <span>הצפון הישן</span>
                      </span>
                    </div>
                  </div>
                  <span className="brands11-text13">
                    <span>חיפושים מובילים</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="brands11-container3 gridview gridlist">
                <Repeater
                  items={params}
                  renderItem={(BrandsEntities) => (
                    <>
                      <div className="brands11-big-grid biggrid biggridstyle">
                        <div className="brands11-projectimageandtags imageBox">
                          <div className="brands11-projectstatus">
                            <span className="brands11-text15">
                              {BrandsEntities?.projectStatus}
                            </span>
                            <img
                              alt="VectorI9140"
                              src="/external/vectori9140-ojt9.svg"
                              className="brands11-vector"
                            />
                          </div>
                          <img
                            alt="image"
                            src="https://images.unsplash.com/photo-1721925376073-4d2c53dd12f2?ixid=M3w5MTMyMXwwfDF8YWxsfDJ8fHx8fHwyfHwxNzIyNzExODg1fA&amp;ixlib=rb-4.0.3&amp;w=1500"
                            className="brands11-main-image"
                          />
                          <div className="secondImg">
                            <img
                              alt="image"
                              src={BrandsEntities?.heroImage?.url}
                              imageSecondSrc={BrandsEntities?.heroImage?.url}
                              className="brands11-image-second"
                            />
                          </div>
                        </div>
                        <div className="brands11-projectdetails">
                          <div className="brands11-projectdetails1">
                            <div className="brands11-projectnamelocation">
                              <span className="brands11-text16">
                                {BrandsEntities?.cityC}
                              </span>
                              <span className="brands11-text17">
                                {BrandsEntities?.brandName}
                              </span>
                            </div>
                            <span className="brands11-text18">
                              {BrandsEntities?.mainDescription}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="brands11-biglist biglist bigliststyle">
                        <div className="brands11-leftcoloumn">
                          <div className="brands11-projectnavigationcontainer">
                            <div className="brands11-projectsnavigation">
                              <div className="brands11-frame93">
                                <img
                                  alt="Ellipse518393"
                                  src="/external/ellipse518393-awhk-200h.png"
                                  className="brands11-ellipse51"
                                />
                                <span className="brands11-text19">
                                  <span>אומאמי</span>
                                </span>
                              </div>
                              <div className="brands11-frame94">
                                <img
                                  alt="Ellipse528393"
                                  src="/external/ellipse528393-e5rh-200h.png"
                                  className="brands11-ellipse52"
                                />
                                <span className="brands11-text21">
                                  <span>ME-CRO</span>
                                </span>
                              </div>
                              <div className="brands11-frame95">
                                <img
                                  alt="Ellipse538393"
                                  src="/external/ellipse538393-kpo9-200h.png"
                                  className="brands11-ellipse53"
                                />
                                <span className="brands11-text23">
                                  <span>SUNN</span>
                                </span>
                              </div>
                              <div className="brands11-frame96">
                                <img
                                  alt="Ellipse548393"
                                  src="/external/ellipse548393-ab1-200h.png"
                                  className="brands11-ellipse54"
                                />
                                <span className="brands11-text25">
                                  <span>אנדרומדה</span>
                                </span>
                              </div>
                              <div className="brands11-frame97">
                                <img
                                  alt="Ellipse558393"
                                  src="/external/ellipse558393-u1cp-200h.png"
                                  className="brands11-ellipse55"
                                />
                                <span className="brands11-text27">
                                  <span>יובל הצעירה</span>
                                </span>
                              </div>
                              <div className="brands11-frame98">
                                <img
                                  alt="Ellipse568393"
                                  src="/external/ellipse568393-pa8r-200h.png"
                                  className="brands11-ellipse56"
                                />
                                <span className="brands11-text29">
                                  <span>יבניאלי</span>
                                </span>
                              </div>
                              <div className="brands11-frame99">
                                <img
                                  alt="Ellipse578393"
                                  src="/external/ellipse578393-r0hx-200h.png"
                                  className="brands11-ellipse57"
                                />
                                <span className="brands11-text31">
                                  <span>שדרות היובל</span>
                                </span>
                              </div>
                              <div className="brands11-frame100">
                                <img
                                  alt="Ellipse588393"
                                  src="/external/ellipse588393-idgw-200h.png"
                                  className="brands11-ellipse58"
                                />
                                <span className="brands11-text33">
                                  <span>קרסו אונו</span>
                                </span>
                              </div>
                              <div className="brands11-frame101">
                                <img
                                  alt="Ellipse598393"
                                  src="/external/ellipse598393-92q-200h.png"
                                  className="brands11-ellipse59"
                                />
                                <span className="brands11-text35">
                                  <span>פלורה</span>
                                </span>
                              </div>
                              <div className="brands11-frame102">
                                <img
                                  alt="Ellipse608393"
                                  src="/external/ellipse608393-svy-200h.png"
                                  className="brands11-ellipse60"
                                />
                                <span className="brands11-text37">
                                  <span>גן המושבות</span>
                                </span>
                              </div>
                              <div className="brands11-frame103">
                                <img
                                  alt="Ellipse618393"
                                  src="/external/ellipse618393-1ds4-200h.png"
                                  className="brands11-ellipse61"
                                />
                                <span className="brands11-text39">
                                  <span>גרוזנברג</span>
                                </span>
                              </div>
                              <div className="brands11-frame104">
                                <img
                                  alt="Ellipse628393"
                                  src="/external/ellipse628393-rt9s-200h.png"
                                  className="brands11-ellipse62"
                                />
                                <span className="brands11-text41">
                                  <span>אומאמי</span>
                                </span>
                              </div>
                              <div className="brands11-frame105">
                                <img
                                  alt="Ellipse638393"
                                  src="/external/ellipse638393-d8qf-200h.png"
                                  className="brands11-ellipse63"
                                />
                                <span className="brands11-text43">
                                  <span>אנדרומדה</span>
                                </span>
                              </div>
                              <div className="brands11-frame106">
                                <img
                                  alt="Ellipse648393"
                                  src="/external/ellipse648393-4vwp-200h.png"
                                  className="brands11-ellipse64"
                                />
                                <span className="brands11-text45">
                                  <span>יובל הצעירה</span>
                                </span>
                              </div>
                            </div>
                            <img
                              alt="Arrow8Stroke8393"
                              src="/external/arrow8stroke8393-ahtb.svg"
                              className="brands11-arrow8-stroke"
                            />
                          </div>
                        </div>
                        <div className="brands11-leftcoloumn1">
                          <div className="brands11-projectcontent">
                            <div className="brands11-details">
                              <div className="brands11-projectstatus1">
                                <span className="brands11-text47">
                                  {BrandsEntities?.projectStatus}
                                </span>
                                <img
                                  alt="VectorStroke8393"
                                  src="/external/vectorstroke8393-ggda.svg"
                                  className="brands11-vector-stroke"
                                />
                              </div>
                              <div className="brands11-frame121">
                                <div className="brands11-nameandlocation">
                                  <span className="brands11-text48">
                                    {BrandsEntities?.cityC}
                                  </span>
                                  <span className="brands11-text49">
                                    {BrandsEntities?.brandName}
                                  </span>
                                </div>
                                <span className="brands11-text50">
                                  {BrandsEntities?.mainDescription}
                                </span>
                              </div>
                            </div>
                            <div className="brands11-tagsandnumbers">
                              <div className="brands11-projectnumbers">
                                <div className="brands11-frame29">
                                  <span className="brands11-text51">
                                    {BrandsEntities?.rooms}
                                  </span>
                                  <span className="brands11-text52">
                                    <span>חדרים</span>
                                  </span>
                                </div>
                                <div className="brands11-frame28">
                                  <span className="brands11-text54">
                                    {BrandsEntities?.numberOfProperties}
                                  </span>
                                  <span className="brands11-text55">
                                    <span>דירות</span>
                                  </span>
                                </div>
                                <div className="brands11-frame27">
                                  <span className="brands11-text57">
                                    {BrandsEntities?.numberOfFloors}
                                  </span>
                                  <span className="brands11-text58">
                                    <span>קומות</span>
                                  </span>
                                </div>
                                <div className="brands11-frame26">
                                  <span className="brands11-text60">
                                    {BrandsEntities?.numberOfBuildings}
                                  </span>
                                  <span className="brands11-text61">
                                    <span>בניינים</span>
                                  </span>
                                </div>
                              </div>
                              <div className="brands11-projecttags">
                                <div className="brands11-frame18">
                                  <span className="brands11-text63">
                                    קולינרי
                                  </span>
                                </div>
                                <div className="brands11-frame19">
                                  <span className="brands11-text64">אירוח</span>
                                </div>
                                <div className="brands11-frame16">
                                  <span className="brands11-text65">
                                    אוהבי בישול
                                  </span>
                                </div>
                                <div className="brands11-frame15">
                                  <span className="brands11-text66">
                                    גינת ירק
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button className="brands11-carassobutton">
                              <div className="brands11-frame123">
                                <img
                                  alt="Arrow7Stroke8393"
                                  src="/external/arrow7stroke8393-w5fo.svg"
                                  className="brands11-arrow7-stroke"
                                />
                                <span className="brands11-text67">
                                  <span>כניסה לפרויקט</span>
                                </span>
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className="brands11-rightcoloumn">
                          <img
                            alt="image"
                            src={BrandsEntities?.heroImage?.url}
                            className="brands11-image"
                          />
                        </div>
                        <Script
                          html={`<style>
    ::-webkit-scrollbar {
    display: none;
}
</style>`}
                        ></Script>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.brandsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
        <div id="clickgrid" className="brands11-close closelist">
          <div className="brands11-gridview">
            <span className="brands11-text69">
              <span>תצוגת רשת</span>
            </span>
            <img
              alt="SquaresFour3669"
              src="/external/SquaresFour3669-yfhj1.svg"
              className="brands11-squares-four1"
            />
          </div>
        </div>
        <div>
          <div className="brands11-container5">
            <Script
              html={`<style>
::-webkit-scrollbar {
    display: none;
}

  .c-scroll-snap > * {
  height: 100vh;
  scroll-snap-align: start;
}

/*section .content2 {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 5vw;
  letter-spacing: 2px;
  transform: translate(-50%, -50%);
}*/
</style>

<script>
  document.getElementById('clicklist').addEventListener('click', function() {
    // Hide the #topfilter container using display: none;
    document.getElementById('topfilter').style.display = 'none';

    // Get the element with the class 'gridview'
    var gridViewElement = document.querySelector('.gridview');

    // Remove the 'gridlist' class
    gridViewElement.classList.remove('gridlist');

    // Add the 'sections', 'c-scroll-snap', and 'c-scroll-snap--y-mandatory' classes
    gridViewElement.classList.add('sections', 'c-scroll-snap', 'c-scroll-snap--y-mandatory');

    // Toggle display properties and classes of all .biglist elements
    document.querySelectorAll('.biglist').forEach(function(element) {
        element.style.display = 'flex';
        element.classList.add('bigliststyle');
    });

    // Toggle display properties and classes of all .biggrid elements
    document.querySelectorAll('.biggrid').forEach(function(element) {
        element.style.display = 'none';
        element.classList.remove('biggridstyle');
    });
});

document.getElementById('clickgrid').addEventListener('click', function() {
    // Show the #topfilter container using display: flex;
    document.getElementById('topfilter').style.display = 'flex';

    // Get the element with the class 'gridview'
    var gridViewElement = document.querySelector('.gridview');

    // Add the 'gridlist' class
    gridViewElement.classList.add('gridlist');

    // Remove the 'sections', 'c-scroll-snap', and 'c-scroll-snap--y-mandatory' classes
    gridViewElement.classList.remove('sections', 'c-scroll-snap', 'c-scroll-snap--y-mandatory');

    // Toggle display properties and classes of all .biglist elements
    document.querySelectorAll('.biglist').forEach(function(element) {
        element.style.display = 'none';
        element.classList.remove('bigliststyle');
    });

    // Toggle display properties and classes of all .biggrid elements
    document.querySelectorAll('.biggrid').forEach(function(element) {
        element.style.display = 'flex';
        element.classList.add('biggridstyle');
    });
});

</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .brands11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .brands11-top-enries-filter {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .brands11-heroback {
            top: 0px;
            left: 0px;
            width: 100%;
            height: auto;
            position: absolute;
          }
          .brands11-inner-cont {
            gap: 40px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 0 90px;
            z-index: 1;
            align-self: stretch;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .brands11-colleft {
            width: 40%;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
          }
          .brands11-viewoptions-check {
            gap: 14px;
            height: 69px;
            display: flex;
            z-index: 999;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: space-between;
          }
          .brands11-gridviewsx {
            gap: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .brands11-text {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 400;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-squares-four {
            width: 28px;
            height: 28px;
          }
          .brands11-fullframeviewx {
            gap: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .brands11-text02 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-rowsx {
            width: 28px;
            height: 27px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .brands11-rectangle726 {
            top: 4px;
            left: 5.0625px;
            width: 18px;
            height: 4px;
            position: absolute;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 1px;
          }
          .brands11-rectangle727 {
            top: 11.576171875px;
            left: 5.0625px;
            width: 18px;
            height: 4px;
            position: absolute;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 1px;
          }
          .brands11-rectangle728 {
            top: 19.15234375px;
            left: 5.0625px;
            width: 18px;
            height: 4px;
            position: absolute;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 1px;
          }
          .brands11-colright {
            gap: 50px;
            width: 60%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands11-breadcrumbs {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .brands11-text04 {
            color: var(--dl-color-carasso-graytextcolor);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 500;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-conx {
            width: 10px;
            height: 1px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-carasso-graytextcolor);
          }
          .brands11-house {
            width: 24px;
            cursor: pointer;
            height: 24px;
            text-decoration: none;
          }
          .brands11-text05 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            opacity: 0.9;
            font-size: 100px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-text06 {
            font-family: 'Ploni ML v2 AAA Light';
          }
          .brands11-text07 {
            font-family: 'PloniMLv2 AAA-Bold';
          }
          .brands11-search-input {
            gap: 30px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands11-search-input-actual {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .brands11-textinput {
            gap: 10px;
            fill: var(--dl-color-carasso-primaryblack);
            color: var(--dl-color-carasso-primaryblack);
            display: flex;
            padding: 12px 50px 16px 10px;
            direction: rtl;
            align-self: stretch;
            align-items: flex-end;
            font-family: 'PloniMLv2AAA-Regular';
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 1px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(217, 217, 217, 0);
          }
          .brands11-search {
            right: 0px;
            width: 26px;
            height: 26px;
            position: absolute;
            margin-top: var(--dl-space-space-halfunit);
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .brands11-container2 {
            display: contents;
          }
          .brands11-searchbar {
            gap: 10px;
            display: none;
            padding: 12px 10px 16px;
            align-self: stretch;
            align-items: flex-end;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 1px;
            flex-direction: column;
            justify-content: center;
          }
          .brands11-textandsearch {
            gap: 20px;
            display: flex;
            align-items: center;
          }
          .brands11-text10 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-search1 {
            width: 26px;
            height: 26px;
          }
          .brands11-tagsoptions-x {
            gap: 20px;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: row;
          }
          .brands11-tags {
            gap: 10px;
            width: 100%;
            display: none;
            flex-grow: 1;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-end;
          }
          .brands11-frame23 {
            gap: 10px;
            cursor: pointer;
            display: flex;
            padding: 7px;
            overflow: hidden;
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-tagnotselected);
          }
          .brands11-text11 {
            color: var(--dl-color-carasso-tagselected);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-text13 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-container3 {
            gap: 15px;
            width: 100%;
          }
          .brands11-big-grid {
            display: flex;
          }
          .brands11-projectimageandtags {
            width: 100%;
            height: 480px;
            display: flex;
            padding: 30px;
            position: relative;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 20px;
            justify-content: flex-end;
          }
          .brands11-projectstatus {
            gap: 7px;
            height: 28px;
            display: flex;
            padding: 8px 15px;
            z-index: 2;
            align-items: center;
            flex-shrink: 0;
            border-radius: 9999px;
            flex-direction: row;
            justify-content: flex-end;
            background-color: rgba(255, 255, 255, 0.8500000238418579);
          }
          .brands11-text15 {
            color: var(--dl-color-carasso-primaryblack);
            width: auto;
            height: auto;
            font-size: 14px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-vector {
            width: 13px;
            height: 12px;
          }
          .brands11-main-image {
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .brands11-image-second {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .brands11-projectdetails {
            gap: 108px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .brands11-projectdetails1 {
            gap: 30px;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .brands11-projectnamelocation {
            gap: 20px;
            width: 100%;
            display: flex;
            align-self: flex-end;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands11-text16 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 700;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-text17 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 80%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-text18 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            display: -webkit-box;
            overflow: hidden;
            direction: rtl;
            font-size: 16px;
            align-self: stretch;
            font-style: Light;
            line-clamp: 3;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 80%;
            font-stretch: normal;
            text-decoration: none;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
          .brands11-biglist {
            display: none;
          }
          .brands11-leftcoloumn {
            height: 789px;
            display: none;
            padding: 30px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            justify-content: center;
          }
          .brands11-projectnavigationcontainer {
            gap: 20px;
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .brands11-projectsnavigation {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .brands11-frame93 {
            gap: 8px;
            display: flex;
            padding: 7px 0;
            align-items: center;
          }
          .brands11-ellipse51 {
            width: 8px;
            height: 8px;
            box-sizing: content-box;
          }
          .brands11-text19 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame94 {
            gap: 8px;
            display: flex;
            padding: 7px 0;
            align-items: center;
          }
          .brands11-ellipse52 {
            width: 8px;
            height: 8px;
            border-color: rgba(202, 202, 202, 1);
            border-style: solid;
            border-width: 1px;
          }
          .brands11-text21 {
            color: rgba(202, 202, 202, 1);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame95 {
            gap: 8px;
            display: flex;
            padding: 7px 0;
            align-items: center;
          }
          .brands11-ellipse53 {
            width: 8px;
            height: 8px;
            border-color: rgba(202, 202, 202, 1);
            border-style: solid;
            border-width: 1px;
          }
          .brands11-text23 {
            color: rgba(202, 202, 202, 1);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame96 {
            gap: 8px;
            display: flex;
            padding: 7px 0;
            align-items: center;
          }
          .brands11-ellipse54 {
            width: 8px;
            height: 8px;
            border-color: rgba(202, 202, 202, 1);
            border-style: solid;
            border-width: 1px;
          }
          .brands11-text25 {
            color: rgba(202, 202, 202, 1);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame97 {
            gap: 8px;
            display: flex;
            padding: 7px 0;
            align-items: center;
          }
          .brands11-ellipse55 {
            width: 8px;
            height: 8px;
            border-color: rgba(202, 202, 202, 1);
            border-style: solid;
            border-width: 1px;
          }
          .brands11-text27 {
            color: rgba(202, 202, 202, 1);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame98 {
            gap: 8px;
            display: flex;
            padding: 7px 0;
            align-items: center;
          }
          .brands11-ellipse56 {
            width: 8px;
            height: 8px;
            border-color: rgba(202, 202, 202, 1);
            border-style: solid;
            border-width: 1px;
          }
          .brands11-text29 {
            color: rgba(202, 202, 202, 1);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame99 {
            gap: 8px;
            display: flex;
            padding: 7px 0;
            align-items: center;
          }
          .brands11-ellipse57 {
            width: 8px;
            height: 8px;
            border-color: rgba(202, 202, 202, 1);
            border-style: solid;
            border-width: 1px;
          }
          .brands11-text31 {
            color: rgba(202, 202, 202, 1);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame100 {
            gap: 8px;
            display: flex;
            padding: 7px 0;
            align-items: center;
          }
          .brands11-ellipse58 {
            width: 8px;
            height: 8px;
            border-color: rgba(202, 202, 202, 1);
            border-style: solid;
            border-width: 1px;
          }
          .brands11-text33 {
            color: rgba(202, 202, 202, 1);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame101 {
            gap: 8px;
            display: flex;
            padding: 7px 0;
            align-items: center;
          }
          .brands11-ellipse59 {
            width: 8px;
            height: 8px;
            border-color: rgba(202, 202, 202, 1);
            border-style: solid;
            border-width: 1px;
          }
          .brands11-text35 {
            color: rgba(202, 202, 202, 1);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame102 {
            gap: 8px;
            display: flex;
            padding: 7px 0;
            align-items: center;
          }
          .brands11-ellipse60 {
            width: 8px;
            height: 8px;
            border-color: rgba(202, 202, 202, 1);
            border-style: solid;
            border-width: 1px;
          }
          .brands11-text37 {
            color: rgba(202, 202, 202, 1);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame103 {
            gap: 8px;
            display: flex;
            padding: 7px 0;
            align-items: center;
          }
          .brands11-ellipse61 {
            width: 8px;
            height: 8px;
            border-color: rgba(202, 202, 202, 1);
            border-style: solid;
            border-width: 1px;
          }
          .brands11-text39 {
            color: rgba(202, 202, 202, 1);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame104 {
            gap: 8px;
            display: flex;
            padding: 7px 0;
            align-items: center;
          }
          .brands11-ellipse62 {
            width: 8px;
            height: 8px;
            border-color: rgba(202, 202, 202, 1);
            border-style: solid;
            border-width: 1px;
          }
          .brands11-text41 {
            color: rgba(202, 202, 202, 1);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame105 {
            gap: 8px;
            display: flex;
            padding: 7px 0;
            align-items: center;
          }
          .brands11-ellipse63 {
            width: 8px;
            height: 8px;
            border-color: rgba(202, 202, 202, 1);
            border-style: solid;
            border-width: 1px;
          }
          .brands11-text43 {
            color: rgba(202, 202, 202, 1);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame106 {
            gap: 8px;
            display: flex;
            padding: 7px 0;
            align-items: center;
          }
          .brands11-ellipse64 {
            width: 8px;
            height: 8px;
            border-color: rgba(202, 202, 202, 1);
            border-style: solid;
            border-width: 1px;
          }
          .brands11-text45 {
            color: rgba(202, 202, 202, 1);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-arrow8-stroke {
            width: 15px;
            height: 7px;
          }
          .brands11-leftcoloumn1 {
            width: 40%;
            display: flex;
            padding: 80px 80px 80px 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .brands11-projectcontent {
            gap: 70px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands11-details {
            gap: 70px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands11-projectstatus1 {
            gap: 10px;
            display: flex;
            padding: 10px 15px;
            align-items: center;
            border-radius: 20px;
            justify-content: center;
            background-color: var(--dl-color-carasso-primaryblack);
          }
          .brands11-text47 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 500;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-vector-stroke {
            width: 12px;
            height: 12px;
          }
          .brands11-frame121 {
            gap: 30px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands11-nameandlocation {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands11-text48 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Bold;
            text-align: right;
            font-family: 'PloniMLv2 AAA-Bold';
            font-weight: 700;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-text49 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 80px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 70%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-text50 {
            color: rgba(0, 0, 0, 1);
            width: 480px;
            height: auto;
            display: -webkit-box;
            overflow: hidden;
            font-size: 18px;
            font-style: Light;
            line-clamp: 3;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
          .brands11-tagsandnumbers {
            gap: 30px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands11-projectnumbers {
            gap: 30px;
            display: flex;
            align-items: flex-start;
          }
          .brands11-frame29 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands11-text51 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-text52 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame28 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands11-text54 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-text55 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame27 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands11-text57 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-text58 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame26 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands11-text60 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-text61 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-projecttags {
            gap: 8px;
            display: flex;
            align-items: flex-start;
          }
          .brands11-frame18 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            box-shadow: 0px 2px 23px 0px rgba(39, 39, 39, 0.10000000149011612);
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .brands11-text63 {
            color: rgba(42, 42, 42, 1);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame19 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            box-shadow: 0px 2px 23px 0px rgba(39, 39, 39, 0.10000000149011612);
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .brands11-text64 {
            color: rgba(42, 42, 42, 1);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame16 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            box-shadow: 0px 2px 23px 0px rgba(39, 39, 39, 0.10000000149011612);
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .brands11-text65 {
            color: rgba(42, 42, 42, 1);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-frame15 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            box-shadow: 0px 2px 23px 0px rgba(39, 39, 39, 0.10000000149011612);
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .brands11-text66 {
            color: rgba(42, 42, 42, 1);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-carassobutton {
            gap: 12px;
            display: flex;
            padding: 0 0 12px;
            align-items: flex-start;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 1px;
          }
          .brands11-frame123 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .brands11-arrow7-stroke {
            width: 8px;
            height: 7px;
          }
          .brands11-text67 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-rightcoloumn {
            gap: 50px;
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .brands11-image {
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100vh;
            position: absolute;
            object-fit: cover;
          }
          .brands11-close {
            top: 30px;
            flex: 0 0 auto;
            left: 30px;
            width: auto;
            cursor: pointer;
            height: 25px;
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .brands11-gridview {
            gap: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .brands11-text69 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 400;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .brands11-squares-four1 {
            width: 28px;
            height: 28px;
          }
          .brands11-container5 {
            display: contents;
          }
          @media (max-width: 1440px) {
            .brands11-text05 {
              color: var(--dl-color-carasso-primaryblack);
            }
            .brands11-text06 {
              font-family: Ploni ML v2 AAA Light;
            }
            .brands11-text07 {
              font-family: Ploni ML v2 AAA Bold;
            }
          }
          @media (max-width: 1200px) {
            .brands11-container {
              width: auto;
            }
            .brands11-colleft {
              width: 20%;
            }
            .brands11-colright {
              width: 80%;
            }
          }
          @media (max-width: 991px) {
            .brands11-inner-cont {
              padding-left: 40px;
              padding-right: 40px;
            }
            .brands11-text05 {
              font-size: 65px;
            }
            .brands11-close {
              top: 5px;
              left: 5px;
            }
          }
          @media (max-width: 767px) {
            .brands11-heroback {
              height: 100%;
            }
            .brands11-colleft {
              display: none;
            }
            .brands11-colright {
              width: 100%;
            }
            .brands11-text05 {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 44px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 105%;
              text-decoration: none;
            }
            .brands11-text06 {
              font-family: Ploni ML v2 AAA Light;
            }
            .brands11-text07 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .brands11-close {
              top: 80px;
              left: 80px;
            }
          }
          @media (max-width: 479px) {
            .brands11-heroback {
              height: 100%;
            }
            .brands11-text04 {
              font-family: PloniMLv2AAA-Regular;
            }
            .brands11-text05 {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 44px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 105%;
              text-decoration: none;
            }
            .brands11-text06 {
              font-family: Ploni ML v2 AAA Light;
            }
            .brands11-text07 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .brands11-text10 {
              font-family: PloniMLv2AAA-Regular;
            }
            .brands11-tagsoptions-x {
              align-items: flex-end;
              flex-direction: column-reverse;
            }
            .brands11-tags {
              width: 100%;
              height: auto;
            }
            .brands11-text11 {
              font-family: PloniMLv2AAA-Regular;
              line-height: 105%;
            }
            .brands11-text13 {
              font-family: PloniMLv2AAA-Regular;
              line-height: 105%;
            }
            .brands11-close {
              top: 70px;
              left: 5px;
            }
          }
        `}
      </style>
    </>
  )
}

Brands11.defaultProps = {
  brandsEntities: [],
}

Brands11.propTypes = {
  brandsEntities: PropTypes.array,
}

export default Brands11

export async function getStaticProps(context) {
  try {
    const response = await brandsPageInitialPropsTqNkResource({
      ...context?.params,
      skip: (context.params.page - 1) * 10,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        brandsEntities: response,
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  try {
    const response = await brandsPageInitialPathsTqJaResource({
      content_type: 'brands',
    })
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
