import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Page - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/58c2f8ee-ffd7-4d8b-bdd2-427960b94318/109b4fac-a4aa-4f2a-b514-c3edb8f8c6af?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div className="page-top-enries-filter">
          <img
            alt="herobackgroundresidential13669"
            src="/external/herobackgroundresidential13669-n3e.svg"
            className="page-heroback"
          />
          <div className="page-inner-cont">
            <div className="page-colleft">
              <div className="page-viewoptions-check">
                <div className="page-gridviewsx">
                  <span className="page-text">
                    <span>תצוגת רשת</span>
                  </span>
                  <img
                    alt="SquaresFour3669"
                    src="/external/squaresfour3669-yfhj.svg"
                    className="page-squares-four"
                  />
                </div>
                <div id="clicklist" className="page-fullframeviewx clicklist">
                  <span className="page-text02">
                    <span>תצוגת רשימה</span>
                  </span>
                  <div className="page-rowsx">
                    <img
                      alt="Rectangle7263669"
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/58c2f8ee-ffd7-4d8b-bdd2-427960b94318/e11d0b4b-3a25-4a7b-af14-9b7682cb8138?org_if_sml=1179&amp;force_format=original"
                      className="page-rectangle726"
                    />
                    <img
                      alt="Rectangle7273669"
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/58c2f8ee-ffd7-4d8b-bdd2-427960b94318/2722006b-cf1f-4a28-b275-d1f2df631249?org_if_sml=1181&amp;force_format=original"
                      className="page-rectangle727"
                    />
                    <img
                      alt="Rectangle7283669"
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/58c2f8ee-ffd7-4d8b-bdd2-427960b94318/58fba51c-c010-4fab-a47c-ac1d39fd3ee3?org_if_sml=1165&amp;force_format=original"
                      className="page-rectangle728"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="page-colright">
              <div className="page-breadcrumbs">
                <span className="page-text04">פרויקטים למגורים</span>
                <div className="page-conx"></div>
                <img
                  alt="House3669"
                  src="/external/house3669-39bu.svg"
                  className="page-house"
                />
              </div>
              <span className="page-text05">
                <span className="page-text06">פרויקטים</span>
                <span>
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
                <span className="page-text10">למגורים</span>
              </span>
              <div className="page-search-input">
                <div className="page-search-input-actual">
                  <input
                    type="text"
                    placeholder="פרויקט, מיקום, סגנון חיים, סטטוס התקדמות"
                    className="page-textinput"
                  />
                  <img
                    alt="Search3669"
                    src="/external/search3669-cxyu.svg"
                    className="page-search"
                  />
                  <div>
                    <div className="page-container2">
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
                <div className="page-searchbar">
                  <div className="page-textandsearch">
                    <span className="page-text11">
                      פרויקט, מיקום, סגנון חיים, סטטוס התקדמות
                    </span>
                    <img
                      alt="Search3669"
                      src="/external/search3669-cxyu.svg"
                      className="page-search1"
                    />
                  </div>
                </div>
                <div className="page-tagsoptions-x">
                  <div className="page-tags">
                    <div className="page-frame23">
                      <span className="page-text12">
                        <span>הצפון הישן</span>
                      </span>
                    </div>
                  </div>
                  <span className="page-text14">
                    <span>חיפושים מובילים</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="page-container4">
            <Script
              html={`<style>
::-webkit-scrollbar {
    display: none;
}

  .c-scroll-snap > * {
  height: 100vh;
  scroll-snap-align: start;
}

section .content2 {
  position: absolute;
  /*top: 50%;*/
  /*left: 50%;*/
  font-size: 5vw;
  letter-spacing: 2px;
  /*transform: translate(-50%, -50%);*/
}
</style>

<script>
// Get the grid
var gridview = document.querySelector(".gridview");
// Get the list view
var listview = document.querySelector(".listviewx");
var listnav = document.querySelector(".listnav");
// Get the button that shows the grid
var clicklist = document.querySelector(".clicklist");
// Get the <span> element that closes the listview
var closelist = document.querySelector(".closelist");


// When the user clicks the button, open the listview 
clicklist.onclick = function() {
  if (gridview && listview && closelist && listnav) {
    gridview.style.display = "none"; // Hide the gridview
    listview.style.display = "flex"; // Show the list view when grid is closed
    closelist.style.display = "flex";
    listnav.style.display = "flex";
  }
}

// When the user clicks on <span> (x), close the listview
closelist.onclick = function() {
  if (gridview && listview && closelist && listnav) {
    gridview.style.display = "grid"; // Hide the gridview 
    listview.style.display = "none"; // Show the list view when grid is closed
    closelist.style.display = "none";
    listnav.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
  if (event.target == gridview) {
    gridview.style.display = "none"; // Hide the modal
    listview.style.display = "flex"; // Show the list view
  }
}*/
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page-top-enries-filter {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-heroback {
            top: 0px;
            left: 0px;
            width: 100%;
            height: auto;
            position: absolute;
          }
          .page-inner-cont {
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
          .page-colleft {
            width: 40%;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
          }
          .page-viewoptions-check {
            gap: 14px;
            height: 69px;
            display: flex;
            z-index: 999;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: space-between;
          }
          .page-gridviewsx {
            gap: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .page-text {
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
          .page-squares-four {
            width: 28px;
            height: 28px;
          }
          .page-fullframeviewx {
            gap: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .page-text02 {
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
          .page-rowsx {
            width: 28px;
            height: 27px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .page-rectangle726 {
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
          .page-rectangle727 {
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
          .page-rectangle728 {
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
          .page-colright {
            gap: 50px;
            width: 60%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .page-breadcrumbs {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .page-text04 {
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
          .page-conx {
            width: 10px;
            height: 1px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-carasso-graytextcolor);
          }
          .page-house {
            width: 24px;
            cursor: pointer;
            height: 24px;
            text-decoration: none;
          }
          .page-text05 {
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
          .page-text06 {
            font-family: 'Ploni ML v2 AAA Light';
          }
          .page-text10 {
            font-family: 'PloniMLv2 AAA-Bold';
          }
          .page-search-input {
            gap: 30px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .page-search-input-actual {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-textinput {
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
          .page-search {
            right: 0px;
            width: 26px;
            height: 26px;
            position: absolute;
            margin-top: var(--dl-space-space-halfunit);
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .page-container2 {
            display: contents;
          }
          .page-searchbar {
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
          .page-textandsearch {
            gap: 20px;
            display: flex;
            align-items: center;
          }
          .page-text11 {
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
          .page-search1 {
            width: 26px;
            height: 26px;
          }
          .page-tagsoptions-x {
            gap: 20px;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: row;
          }
          .page-tags {
            gap: 10px;
            width: 100%;
            display: none;
            flex-grow: 1;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-end;
          }
          .page-frame23 {
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
          .page-text12 {
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
          .page-text14 {
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
          .page-container4 {
            display: contents;
          }
          @media (max-width: 1440px) {
            .page-text05 {
              color: var(--dl-color-carasso-primaryblack);
            }
            .page-text06 {
              font-family: Ploni ML v2 AAA Light;
            }
            .page-text10 {
              font-family: Ploni ML v2 AAA Bold;
            }
          }
          @media (max-width: 1200px) {
            .page-colleft {
              width: 20%;
            }
            .page-colright {
              width: 80%;
            }
          }
          @media (max-width: 991px) {
            .page-inner-cont {
              padding-left: 40px;
              padding-right: 40px;
            }
            .page-text05 {
              font-size: 65px;
            }
          }
          @media (max-width: 767px) {
            .page-heroback {
              height: 100%;
            }
            .page-colleft {
              display: none;
            }
            .page-colright {
              width: 100%;
            }
            .page-text05 {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 44px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 105%;
              text-decoration: none;
            }
            .page-text06 {
              font-family: Ploni ML v2 AAA Light;
            }
            .page-text10 {
              font-family: Ploni ML v2 AAA Bold;
            }
          }
          @media (max-width: 479px) {
            .page-heroback {
              height: 100%;
            }
            .page-text04 {
              font-family: PloniMLv2AAA-Regular;
            }
            .page-text05 {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 44px;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 105%;
              text-decoration: none;
            }
            .page-text06 {
              font-family: Ploni ML v2 AAA Light;
            }
            .page-text10 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .page-text11 {
              font-family: PloniMLv2AAA-Regular;
            }
            .page-tagsoptions-x {
              align-items: flex-end;
              flex-direction: column-reverse;
            }
            .page-tags {
              width: 100%;
              height: auto;
            }
            .page-text12 {
              font-family: PloniMLv2AAA-Regular;
              line-height: 105%;
            }
            .page-text14 {
              font-family: PloniMLv2AAA-Regular;
              line-height: 105%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
