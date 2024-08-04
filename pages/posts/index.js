import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import {
  DataProvider,
  Repeater,
  DateTimePrimitive,
} from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import postsPageInitialPropsTqDiResource from '../../resources/posts-page-initial-props-tq_di'
import postsResource from '../../resources/posts'
import posts1Resource from '../../resources/posts1'
import posts2Resource from '../../resources/posts2'

const Posts1 = (props) => {
  return (
    <>
      <div className="posts1-container">
        <Head>
          <title>Posts1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Posts1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(context_xex45m) => (
            <>
              <div className="posts1-container01">
                <div className="posts1-container02">
                  <span className="posts1-text">
                    <span className="posts1-text01">כל מה שמעניין</span>
                    <span className="posts1-text02">,</span>
                    <span> במקום אחד</span>
                  </span>
                </div>
                <div className="posts1-container03">
                  <img
                    alt="Vector4859"
                    src="/external/vector4859-83w.svg"
                    className="posts1-vector"
                  />
                  <div className="posts1-leftcoloumn">
                    <img
                      alt="image"
                      src={context_xex45m?.featuredImage?.url}
                      className="posts1-image"
                    />
                  </div>
                  <div className="posts1-rightcoloumn">
                    <div className="posts1-frame296">
                      <span className="posts1-text04">הכתבה החמה</span>
                      <span className="posts1-text05">
                        {context_xex45m?.articleTitle}
                      </span>
                      <span className="posts1-text06">
                        {context_xex45m?.excerpt}
                      </span>
                      <button className="posts1-carassobutton">
                        <Link href={`/posts/${context_xex45m?.id}`}>
                          <a className="posts1-link">
                            <div className="posts1-frame123">
                              <img
                                alt="Arrow7Stroke4859"
                                src="/external/arrow7stroke4859-0zbr.svg"
                                className="posts1-arrow7-stroke"
                              />
                              <span className="posts1-text07">
                                <span>לקריאת הכתבה</span>
                              </span>
                            </div>
                          </a>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          initialData={props.contextXex45mProp}
          persistDataDuringLoading={true}
        />
        <div className="posts1-posts-layout pmain-container">
          <div className="posts1-posts-inner ptabs">
            <div className="posts1-filter tab-titles">
              <div className="posts1-frame294">
                <span className="posts1-text09">
                  לחיפוש או סינון לפי קטגוריות
                </span>
                <div className="posts1-searchbar">
                  <div className="posts1-textandsearch">
                    <span className="posts1-text10">
                      <span>חיפוש</span>
                    </span>
                    <img
                      alt="Search4859"
                      src="/external/search4859-4gwd.svg"
                      className="posts1-search"
                    />
                  </div>
                </div>
              </div>
              <div className="posts1-frame287 ptab-title ptabline">
                <span className="posts1-text12 ptabtext">הכל</span>
              </div>
              <div className="posts1-frame288 ptab-title ptabline">
                <span className="posts1-text13 ptabtext">כתבות</span>
              </div>
              <div className="posts1-frame289 ptab-title ptabline">
                <span className="posts1-text14 ptabtext">פודקאסטים</span>
              </div>
              <div>
                <div className="posts1-container05">
                  <Script
                    html={`<style>
    /* Styles when parent has 'tab-title-selected' class */
.ptab-title-selected .ptabline {
    border-color: #2A2A2A; /* Example selected background color */
    /*height: 15px;   
    Add other selected styles here */
}

.ptab-title-selected .ptabtext {
    color: #2A2A2A; /* Example selected text color */
    /*font-family: Ploni ML v2 AAA Medium;*/
    /* Add other selected styles here */
}
</style>`}
                  ></Script>
                </div>
              </div>
            </div>
            <div className="ptab-contents">
              <div className="posts1-content-posts ptab-content">
                <DataProvider
                  renderSuccess={(params) => (
                    <>
                      <div className="plist">
                        <Repeater
                          items={params}
                          renderItem={(PostsEntities) => (
                            <>
                              <div className="posts1-hover-blog">
                                <div className="posts1-frame281">
                                  <div className="posts1-frame9">
                                    <img
                                      alt="image"
                                      src={PostsEntities?.featuredImage?.url}
                                      className="posts1-image1"
                                    />
                                  </div>
                                  <div className="posts1-frame280">
                                    <span className="posts1-text15">
                                      [0]?.createdAt
                                    </span>
                                    <span className="posts1-date-time">
                                      <DateTimePrimitive
                                        format="DD/MM/YYYY"
                                        date="Sat Aug 03 2024 13:44:49 GMT+0300 (Israel Daylight Time)"
                                      ></DateTimePrimitive>
                                    </span>
                                    <span className="posts1-text16">
                                      {PostsEntities?.articleTitle}
                                    </span>
                                    <span className="posts1-text17">
                                      בשנים האחרונות משקיעה החברה את מיטב
                                      המשאבים בפיתוח, תכנון והקמה של מגוון
                                      פרויקטים מתקדמים המשקפים בשנים.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        />
                      </div>
                    </>
                  )}
                  initialData={props.postsEntities}
                  persistDataDuringLoading={true}
                  key={props?.pagination?.page}
                />
              </div>
              <div className="posts1-container07 ptab-content">
                <DataProvider
                  renderSuccess={(params) => (
                    <>
                      <div className="posts1-container08 plist">
                        <Repeater
                          items={params}
                          renderItem={(context_v9cdx5) => (
                            <>
                              <div className="posts1-hover-blog1">
                                <div className="posts1-frame2811">
                                  <div className="posts1-frame91">
                                    <img
                                      alt="image"
                                      src="https://play.teleporthq.io/static/svg/default-img.svg"
                                      className="posts1-image2"
                                    />
                                  </div>
                                  <div className="posts1-frame2801">
                                    <span className="posts1-text18">
                                      [0]?.createdAt
                                    </span>
                                    <span className="posts1-date-time1">
                                      <DateTimePrimitive
                                        format="DD/MM/YYYY"
                                        date="Sat Aug 03 2024 13:44:49 GMT+0300 (Israel Daylight Time)"
                                      ></DateTimePrimitive>
                                    </span>
                                    <span className="posts1-text19">
                                      {[0]?.articleTitle}
                                    </span>
                                    <span className="posts1-text20">
                                      בשנים האחרונות משקיעה החברה את מיטב
                                      המשאבים בפיתוח, תכנון והקמה של מגוון
                                      פרויקטים מתקדמים המשקפים בשנים.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        />
                      </div>
                    </>
                  )}
                  initialData={props.contextV9cdx5Prop}
                  persistDataDuringLoading={true}
                />
              </div>
              <div className="posts1-container09 ptab-content">
                <DataProvider
                  renderSuccess={(params) => (
                    <>
                      <div className="posts1-container10 plist">
                        <Repeater
                          items={params}
                          renderItem={(context_h9p4qg) => (
                            <>
                              <div className="posts1-hover-blog2">
                                <div className="posts1-frame2812">
                                  <div className="posts1-frame92">
                                    <img
                                      alt="image"
                                      src="https://play.teleporthq.io/static/svg/default-img.svg"
                                      className="posts1-image3"
                                    />
                                  </div>
                                  <div className="posts1-frame2802">
                                    <span className="posts1-text21">
                                      [0]?.createdAt
                                    </span>
                                    <span className="posts1-date-time2">
                                      <DateTimePrimitive
                                        format="DD/MM/YYYY"
                                        date="Sat Aug 03 2024 13:44:49 GMT+0300 (Israel Daylight Time)"
                                      ></DateTimePrimitive>
                                    </span>
                                    <span className="posts1-text22">
                                      {[0]?.articleTitle}
                                    </span>
                                    <span className="posts1-text23">
                                      בשנים האחרונות משקיעה החברה את מיטב
                                      המשאבים בפיתוח, תכנון והקמה של מגוון
                                      פרויקטים מתקדמים המשקפים בשנים.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        />
                      </div>
                    </>
                  )}
                  initialData={props.contextH9p4qgProp}
                  persistDataDuringLoading={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="posts1-container12">
            <Script
              html={`<script>
  function initTabs() {
    // find all tabs containers
    const tabsContainers = document.getElementsByClassName("ptabs");

    function selectContainer(tabContents, id) {
      Array.from(tabContents).forEach((tabContent, index) => {
        tabContent.style.display = id === index ? "grid" : "none";
      });
    }

    function selectTabTitle(tabTitles, id) {
      Array.from(tabTitles).forEach((tabTitle, index) => {
        tabTitle.classList.remove("ptab-title-selected");
        // set the first tab content vile selected by default
        if (id === index) {
          tabTitle.classList.add("ptab-title-selected");
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

      const tabTitles = tabsContainer.getElementsByClassName("ptab-title");
      const tabContents = tabsContainer.getElementsByClassName("ptab-content");

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
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .posts1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .posts1-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: 10px;
            padding-right: 10px;
            flex-direction: column;
            justify-content: center;
          }
          .posts1-container02 {
            width: 70%;
            height: auto;
            display: flex;
            padding: 0 90px;
            align-self: center;
            margin-top: 170px;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .posts1-text {
            color: var(--dl-color-carasso-primaryblack);
            width: 937px;
            height: auto;
            direction: rtl;
            font-size: 64px;
            font-style: Light;
            text-align: center;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 300;
            line-height: 105%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-text01 {
            font-family: 'Ploni ML v2 AAA Light';
          }
          .posts1-text02 {
            font-family: 'Ploni ML v2 AAA Light';
          }
          .posts1-container03 {
            width: 70%;
            cursor: pointer;
            height: auto;
            display: flex;
            z-index: 1;
            align-self: center;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            flex-shrink: 0;
            padding-top: 10px 90px;
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-bottom: 10px 90px;
            text-decoration: none;
          }
          .posts1-vector {
            right: 5%;
            width: 564px;
            height: 633px;
            display: none;
            position: absolute;
          }
          .posts1-leftcoloumn {
            gap: 20px;
            width: 30%;
            display: flex;
            z-index: 1;
            flex-grow: 1;
            align-items: flex-start;
            border-radius: 20px;
          }
          .posts1-image {
            width: 100%;
            height: 413px;
            object-fit: cover;
          }
          .posts1-rightcoloumn {
            gap: 10px;
            width: 50%;
            display: flex;
            z-index: 2;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .posts1-frame296 {
            gap: 40px;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts1-text04 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-text05 {
            color: var(--dl-color-carasso-primaryblack);
            width: 541px;
            height: auto;
            direction: rtl;
            font-size: 42px;
            font-style: Regular;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 400;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-text06 {
            color: rgba(0, 0, 0, 1);
            width: 438px;
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-carassobutton {
            gap: 12px;
            display: flex;
            align-items: flex-start;
          }
          .posts1-link {
            display: contents;
          }
          .posts1-frame123 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            text-decoration: none;
          }
          .posts1-arrow7-stroke {
            width: 8px;
            height: 7px;
          }
          .posts1-text07 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 16px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-posts-layout {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .posts1-posts-inner {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-direction: row-reverse;
          }
          .posts1-filter {
            gap: 15px;
            width: 20%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-end;
            flex-direction: column;
          }
          .posts1-frame294 {
            gap: 40px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts1-text09 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-searchbar {
            gap: 10px;
            display: flex;
            padding: 12px;
            align-self: stretch;
            align-items: flex-end;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 10px;
            flex-direction: column;
            justify-content: center;
          }
          .posts1-textandsearch {
            gap: 12px;
            display: flex;
            align-items: center;
          }
          .posts1-text10 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-search {
            width: 20px;
            height: 20px;
          }
          .posts1-frame287 {
            gap: 10px;
            cursor: pointer;
            display: flex;
            padding: 24px 10px;
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-carasso-graytextcolor);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: flex-end;
          }
          .posts1-frame287:hover {
            border-color: var(--dl-color-carasso-primaryblack);
          }
          .posts1-text12 {
            fill: var(--dl-color-carasso-graytextcolor);
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            transition: 0.3s;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 400;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-text12:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .posts1-frame288 {
            gap: 10px;
            cursor: pointer;
            display: flex;
            padding: 24px 10px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: flex-end;
          }
          .posts1-frame288:hover {
            border-color: var(--dl-color-carasso-primaryblack);
          }
          .posts1-text13 {
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
          .posts1-text13:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .posts1-frame289 {
            gap: 10px;
            cursor: pointer;
            display: flex;
            padding: 24px 10px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: flex-end;
          }
          .posts1-frame289:hover {
            border-color: var(--dl-color-carasso-primaryblack);
          }
          .posts1-text14 {
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
          .posts1-text14:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .posts1-container05 {
            display: contents;
          }
          .posts1-content-posts {
            width: 100%;
            display: flex;
            align-self: flex-end;
          }
          .posts1-hover-blog {
            gap: 24px;
            width: 100%;
            cursor: pointer;
            height: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            text-decoration: none;
          }
          .posts1-frame281 {
            gap: 24px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts1-frame9 {
            gap: 10px;
            height: 381px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.07000000029802322);
            align-items: flex-start;
            border-radius: 20px;
            justify-content: flex-end;
          }
          .posts1-image1 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .posts1-frame280 {
            gap: 20px;
            height: 200px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts1-text15 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            display: none;
            font-size: 18px;
            align-self: flex-start;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-date-time {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            align-self: flex-start;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-text16 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 500;
            line-height: 120%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-text17 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            display: -webkit-box;
            overflow: hidden;
            font-size: 18px;
            align-self: stretch;
            font-style: Light;
            line-clamp: 2;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .posts1-container07 {
            width: 100%;
            display: none;
            align-self: flex-end;
          }
          .posts1-container08 {
            display: flex;
            flex-direction: column;
          }
          .posts1-hover-blog1 {
            gap: 24px;
            width: 100%;
            cursor: pointer;
            height: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            text-decoration: none;
          }
          .posts1-frame2811 {
            gap: 24px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts1-frame91 {
            gap: 10px;
            height: 381px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.07000000029802322);
            align-items: flex-start;
            border-radius: 20px;
            justify-content: flex-end;
          }
          .posts1-image2 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .posts1-frame2801 {
            gap: 20px;
            height: 200px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts1-text18 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            display: none;
            font-size: 18px;
            align-self: flex-start;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-date-time1 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            align-self: flex-start;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-text19 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 500;
            line-height: 120%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-text20 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-container09 {
            width: 100%;
            display: none;
            align-self: flex-end;
          }
          .posts1-container10 {
            display: flex;
            flex-direction: column;
          }
          .posts1-hover-blog2 {
            gap: 24px;
            width: 100%;
            cursor: pointer;
            height: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            text-decoration: none;
          }
          .posts1-frame2812 {
            gap: 24px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts1-frame92 {
            gap: 10px;
            height: 381px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.07000000029802322);
            align-items: flex-start;
            border-radius: 20px;
            justify-content: flex-end;
          }
          .posts1-image3 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .posts1-frame2802 {
            gap: 20px;
            height: 200px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts1-text21 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            display: none;
            font-size: 18px;
            align-self: flex-start;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-date-time2 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            align-self: flex-start;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-text22 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 500;
            line-height: 120%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-text23 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts1-container12 {
            display: contents;
          }
          @media (max-width: 1440px) {
            .posts1-container02 {
              width: 90%;
            }
            .posts1-text {
              line-height: 80%;
            }
            .posts1-container03 {
              width: 90%;
            }
            .posts1-vector {
              right: 0%;
            }
            .posts1-leftcoloumn {
              width: 40%;
              height: 100%;
            }
            .posts1-rightcoloumn {
              width: 50%;
            }
            .posts1-text04 {
              line-height: 80%;
            }
            .posts1-text05 {
              width: 100%;
              line-height: 140%;
            }
            .posts1-text06 {
              line-height: 80%;
            }
            .posts1-text07 {
              line-height: 80%;
            }
            .posts1-text10 {
              line-height: 80%;
            }
            .posts1-text12 {
              line-height: 80%;
            }
            .posts1-text13 {
              line-height: 80%;
            }
            .posts1-text14 {
              line-height: 80%;
            }
            .posts1-frame9 {
              height: 381px;
            }
            .posts1-date-time {
              line-height: 140%;
            }
            .posts1-text16 {
              line-height: 140%;
            }
            .posts1-text17 {
              line-height: 140%;
            }
            .posts1-frame91 {
              height: 381px;
            }
            .posts1-date-time1 {
              line-height: 140%;
            }
            .posts1-text19 {
              line-height: 140%;
            }
            .posts1-text20 {
              line-height: 140%;
            }
            .posts1-frame92 {
              height: 381px;
            }
            .posts1-date-time2 {
              line-height: 140%;
            }
            .posts1-text22 {
              line-height: 140%;
            }
            .posts1-text23 {
              line-height: 140%;
            }
          }
          @media (max-width: 1200px) {
            .posts1-container02 {
              width: 80%;
            }
            .posts1-vector {
              right: -5%;
            }
            .posts1-frame296 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .posts1-text05 {
              width: auto;
            }
            .posts1-frame280 {
              height: 220px;
            }
            .posts1-frame2801 {
              height: 220px;
            }
            .posts1-frame2802 {
              height: 220px;
            }
          }
          @media (max-width: 991px) {
            .posts1-container02 {
              width: 90%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .posts1-container03 {
              flex-direction: column-reverse;
            }
            .posts1-vector {
              top: 34px;
              right: -111px;
              z-index: 5;
            }
            .posts1-leftcoloumn {
              width: 100%;
            }
            .posts1-rightcoloumn {
              width: 100%;
              padding-top: 50px;
              padding-bottom: 50px;
            }
            .posts1-frame296 {
              gap: 25px;
            }
            .posts1-text05 {
              width: auto;
            }
            .posts1-text06 {
              width: 100%;
            }
            .posts1-filter {
              width: 100%;
              flex-direction: row-reverse;
            }
            .posts1-frame294 {
              display: none;
              flex-direction: row-reverse;
            }
            .posts1-text09 {
              color: rgb(0, 0, 0);
              width: 50%;
              font-size: 24px;
              font-family: PloniMLv2AAA-Regular;
              font-weight: 300;
              line-height: 105%;
              text-decoration: none;
            }
            .posts1-searchbar {
              width: 50%;
              padding: 5px;
              align-items: center;
              flex-direction: row;
              justify-content: flex-end;
            }
            .posts1-frame9 {
              height: 320px;
            }
            .posts1-text15 {
              display: none;
            }
            .posts1-frame91 {
              height: 320px;
            }
            .posts1-text18 {
              display: none;
            }
            .posts1-frame92 {
              height: 320px;
            }
            .posts1-text21 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .posts1-container02 {
              width: 100%;
            }
            .posts1-text {
              width: auto;
              padding-left: 120px;
              padding-right: 120px;
            }
            .posts1-container03 {
              width: 100%;
              padding-left: 10px;
              padding-right: 10px;
            }
            .posts1-vector {
              top: 79px;
              right: -115px;
            }
            .posts1-frame280 {
              height: 180px;
            }
            .posts1-frame2801 {
              height: 180px;
            }
            .posts1-frame2802 {
              height: 180px;
            }
          }
          @media (max-width: 479px) {
            .posts1-text {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .posts1-vector {
              top: 53px;
              right: -149px;
            }
            .posts1-text06 {
              line-height: 140%;
            }
          }
        `}
      </style>
    </>
  )
}

Posts1.defaultProps = {
  postsEntities: [],
}

Posts1.propTypes = {
  postsEntities: PropTypes.array,
}

export default Posts1

export async function getStaticProps(context) {
  try {
    const contextH9p4qgProp = await posts2Resource({
      ...context?.params,
    })
    const contextV9cdx5Prop = await posts1Resource({
      ...context?.params,
    })
    const contextXex45mProp = await postsResource({
      ...context?.params,
    })
    const response = await postsPageInitialPropsTqDiResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        contextH9p4qgProp: contextH9p4qgProp,
        contextV9cdx5Prop: contextV9cdx5Prop,
        contextXex45mProp: contextXex45mProp?.data?.[0],
        postsEntities: response,
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
