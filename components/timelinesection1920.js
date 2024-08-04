import React, { useState } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Timelinesection1920 = (props) => {
  const [isVisible, setIsVisible] = useState(true)
  const [red, setRed] = useState(false)
  return (
    <>
      <div className="timelinesection1920-timelinesection1920">
        <div className="timelinesection1920-container">
          <div className="timelinesection1920-center">
            <div className="timelinesection1920-header main-container">
              <span className="timelinesection1920-text">
                <span className="timelinesection1920-text01">
                  הדרך שלנו
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="timelinesection1920-text02">לאורך השנים</span>
              </span>
              <div className="timelinesection1920-container01 tabs">
                <div className="timelinesection1920-years tab-titles">
                  <div className="timelinesection1920-frame292 tab-title">
                    <div className="tline"></div>
                    <span className="timelinesection1920-text03 tltext">
                      {props.text1}
                    </span>
                  </div>
                  <div className="timelinesection1920-frame303 tab-title">
                    <div className="timelinesection1920-container03 tline"></div>
                    <span className="timelinesection1920-text04 tltext">
                      {props.text2}
                    </span>
                  </div>
                  <div className="timelinesection1920-frame296 tab-title">
                    <div className="timelinesection1920-container04 tline"></div>
                    <span className="timelinesection1920-text05 tltext">
                      {props.text3}
                    </span>
                  </div>
                  <div className="timelinesection1920-frame298 tab-title">
                    <div className="timelinesection1920-container05 tline"></div>
                    <span className="timelinesection1920-text06 tltext">
                      <span>2010</span>
                    </span>
                  </div>
                  <div className="timelinesection1920-frame300 tab-title">
                    <div className="timelinesection1920-container06 tline"></div>
                    <span className="timelinesection1920-text08 tltext">
                      {props.text4}
                    </span>
                  </div>
                  <div className="timelinesection1920-frame302 tab-title">
                    <div className="timelinesection1920-container07 tline"></div>
                    <span className="timelinesection1920-text09 tltext">
                      {props.text5}
                    </span>
                  </div>
                  <div className="timelinesection1920-frame293 tab-title">
                    <div className="timelinesection1920-container08 tline"></div>
                    <span onSelect={() => setRed(true)} className="tltext">
                      {props.text6}
                    </span>
                  </div>
                  <div>
                    <div className="timelinesection1920-container10">
                      <Script
                        html={`<style>
    /* Styles when parent has 'tab-title-selected' class */
.tab-title-selected .tline {
    background-color: #E65103; /* Example selected background color */
    height: 15px;   
   /* Add other selected styles here */
}

.tab-title-selected .tltext {
    color: #E65103; /* Example selected text color */
    font-family: Ploni ML v2 AAA Medium;
    /* Add other selected styles here */
}
</style>`}
                      ></Script>
                    </div>
                  </div>
                </div>
                <div className="timelinesection1920-content tab-contents">
                  <div className="timelinesection1920-content-tab tab-content">
                    <div className="timelinesection1920-leftcoloumn">
                      <div className="timelinesection1920-frame321">
                        <div className="timelinesection1920-frame318">
                          <img
                            alt={props.vectorAlt}
                            src={props.vectorSrc}
                            className="timelinesection1920-vector"
                          />
                          <span className="timelinesection1920-text11">
                            <span>1933</span>
                          </span>
                        </div>
                        <div className="timelinesection1920-frame320">
                          <span className="timelinesection1920-text13">
                            <span>קרסו, נעים להכיר</span>
                          </span>
                          <span className="timelinesection1920-text15">
                            <span>
                              משפחת קרסו הגיעה מפיראוס בתחילת המאה ה-20 ומאז ועד
                              היום אנחנו יוזמים מפתחים ומקימים פרויקטים מגוונים
                              ברחבי הארץ.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      alt={props.pastedImageAlt1}
                      src={props.pastedImageSrc1}
                      className="timelinesection1920-vector01"
                    />
                    <img
                      alt={props.pastedImageAlt}
                      src={props.pastedImageSrc}
                      className="timelinesection1920-pasted-image"
                    />
                  </div>
                  <div className="timelinesection1920-content-tab1 tab-content">
                    <div className="timelinesection1920-leftcoloumn1">
                      <div className="timelinesection1920-frame3211">
                        <div className="timelinesection1920-frame3181">
                          <img
                            alt={props.vectorAlt}
                            src={props.vectorSrc}
                            className="timelinesection1920-vector02"
                          />
                          <span className="timelinesection1920-text17">
                            1943
                          </span>
                        </div>
                        <div className="timelinesection1920-frame3201">
                          <span className="timelinesection1920-text18">
                            <span>הוקמה חברת</span>
                            <br></br>
                            <span>משה קרסו ובניו</span>
                          </span>
                          <span className="timelinesection1920-text22">
                            <span>
                              כניסת ארבעת בניו של משה לעבודה בחברה - חיים, אריה,
                              שלמה ובנימין.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      alt={props.vectorAlt7}
                      src={props.vectorSrc7}
                      className="timelinesection1920-vector03"
                    />
                    <img
                      alt={props.pastedImageAlt4}
                      src={props.pastedImageSrc4}
                      className="timelinesection1920-pasted-image1"
                    />
                  </div>
                  <div className="timelinesection1920-content-tab2 tab-content">
                    <div className="timelinesection1920-leftcoloumn2">
                      <div className="timelinesection1920-frame3212">
                        <div className="timelinesection1920-frame3182">
                          <img
                            alt={props.vectorAlt}
                            src={props.vectorSrc}
                            className="timelinesection1920-vector04"
                          />
                          <span className="timelinesection1920-text24">
                            2009
                          </span>
                        </div>
                        <div className="timelinesection1920-frame3202">
                          <span className="timelinesection1920-text25">
                            <span>
                              התחלת הפעילות של קרסו נדל״ן כחברה עצמאית
                            </span>
                          </span>
                          <span className="timelinesection1920-text27">
                            <span>
                              קרסו עומדת מאחורי כמה מהפרויקטים הידועים ביותר
                              בישראל. ודאי שמעתם עליהם
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      alt={props.vectorAlt8}
                      src={props.vectorSrc8}
                      className="timelinesection1920-vector05"
                    />
                    <img
                      alt={props.pastedImageAlt5}
                      src={props.pastedImageSrc5}
                      className="timelinesection1920-pasted-image2"
                    />
                  </div>
                  <div className="timelinesection1920-content-tab3 tab-content">
                    <div className="timelinesection1920-leftcoloumn3">
                      <div className="timelinesection1920-frame3213">
                        <div className="timelinesection1920-frame3183">
                          <img
                            alt={props.vectorAlt}
                            src={props.vectorSrc}
                            className="timelinesection1920-vector06"
                          />
                          <span className="timelinesection1920-text29">
                            2010
                          </span>
                        </div>
                        <div className="timelinesection1920-frame3203">
                          <span className="timelinesection1920-text30">
                            <span>כניסה לעולמות ההתחדשות העירונית</span>
                          </span>
                          <span className="timelinesection1920-text32">
                            <span>
                              בנייה בתוך עיר חיה ונושמת היא התשוקה הגדולה שלנו.
                              יש לנו הזכות לבנות מחדש בערים הגדולות בישראל
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      alt={props.pastedImageAlt1}
                      src={props.pastedImageSrc1}
                      className="timelinesection1920-vector07"
                    />
                    <img
                      alt={props.pastedImageAlt6}
                      src={props.pastedImageSrc6}
                      className="timelinesection1920-pasted-image3"
                    />
                  </div>
                  <div className="timelinesection1920-content-tab4 tab-content">
                    <div className="timelinesection1920-leftcoloumn4">
                      <div className="timelinesection1920-frame3214">
                        <div className="timelinesection1920-frame3184">
                          <img
                            alt={props.vectorAlt}
                            src={props.vectorSrc}
                            className="timelinesection1920-vector08"
                          />
                          <span className="timelinesection1920-text34">
                            2011
                          </span>
                        </div>
                        <div className="timelinesection1920-frame3204">
                          <span className="timelinesection1920-text35">
                            <span>נכנסו לעולמות המרכזיים המסחריים</span>
                          </span>
                          <span className="timelinesection1920-text37">
                            <span>
                              יש לנו נוכחות משמעותית גם במרכזי העסקים הגדולים.
                              אנחנו מנהלים פורטפוליו מגוון של נכסים ברחבי הארץ,
                              כולל מגדלי משרדים, מתחמי לוגיסטיקה ומרכזי רכב. גם
                              את זה אנחנו עושים בסטנדרטים הגבוהים שאנחנו רגילים
                              להם.
                            </span>
                            <br></br>
                            <span></span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      alt={props.pastedImageAlt7}
                      src={props.pastedImageSrc7}
                      className="timelinesection1920-pasted-image4"
                    />
                    <img
                      alt={props.vectorAlt9}
                      src={props.vectorSrc9}
                      className="timelinesection1920-vector09"
                    />
                  </div>
                  <div className="timelinesection1920-content-tab5 tab-content">
                    <div className="timelinesection1920-leftcoloumn5">
                      <div className="timelinesection1920-frame3215">
                        <div className="timelinesection1920-frame3185">
                          <img
                            alt={props.vectorAlt}
                            src={props.vectorSrc}
                            className="timelinesection1920-vector10"
                          />
                          <span className="timelinesection1920-text41">
                            2019
                          </span>
                        </div>
                        <div className="timelinesection1920-frame3205">
                          <span className="timelinesection1920-text42">
                            <span>הפעם הראשונה שלנו בפרויקט פינוי בינוי</span>
                          </span>
                          <span className="timelinesection1920-text44">
                            <span>
                              ומאז 44 פרויקטים שהקמנו הכוללים שיטות עדכניות
                              למקסום החלל, פתרונות שתומכים באורח חיים פעיל,
                              ניצול של התאורה הטבעית, שילוב צמחיה עשירה ועוד.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      alt={props.pastedImageAlt8}
                      src={props.pastedImageSrc8}
                      className="timelinesection1920-pasted-image5"
                    />
                    <img
                      alt={props.vectorAlt10}
                      src={props.vectorSrc10}
                      className="timelinesection1920-vector11"
                    />
                  </div>
                  <div className="timelinesection1920-content-tab6 tab-content">
                    <div className="timelinesection1920-leftcoloumn6">
                      <div className="timelinesection1920-frame3216">
                        <div className="timelinesection1920-frame3186">
                          <img
                            alt={props.vectorAlt}
                            src={props.vectorSrc}
                            className="timelinesection1920-vector12"
                          />
                          <span className="timelinesection1920-text46">
                            2022
                          </span>
                        </div>
                        <div className="timelinesection1920-frame3206">
                          <span className="timelinesection1920-text47">
                            הונפקנו בבורסת ת״א ונכנסנו למדדי ת״א 90
                          </span>
                          <span className="timelinesection1920-text48">
                            טופ 90 - גאים להיות חלק מהחברות הגדולות והחזקות
                            בישראל.
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      alt={props.pastedImageAlt1}
                      src={props.pastedImageSrc1}
                      className="timelinesection1920-vector13"
                    />
                    <img
                      alt={props.pastedImageAlt9}
                      src={props.pastedImageSrc9}
                      className="timelinesection1920-pasted-image6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="timelinesection1920-container12">
                <Script
                  html={`<script>
  function initTabs() {
    // find all tabs containers
    const tabsContainers = document.getElementsByClassName("tabs");

    function selectContainer(tabContents, id) {
      Array.from(tabContents).forEach((tabContent, index) => {
        tabContent.style.display = id === index ? "flex" : "none";
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
</script>
`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .timelinesection1920-timelinesection1920 {
            gap: 66.66667175292969px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(240, 240, 240, 1);
          }
          .timelinesection1920-container {
            display: flex;
            padding: 0 120.00001525878906px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            justify-content: center;
          }
          .timelinesection1920-center {
            gap: 40px;
            display: flex;
            padding: 150px 0 0;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .timelinesection1920-header {
            gap: 80px;
            width: 100%;
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .timelinesection1920-text {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 42.6667px;
            font-style: Light;
            text-align: center;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timelinesection1920-years {
            gap: 56.000003814697266px;
            height: 70px;
            display: flex;
            padding: 0 413.3333740234375px;
            direction: rtl;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .timelinesection1920-frame292 {
            gap: 16px;
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .timelinesection1920-text03 {
            fill: var(--dl-color-carasso-darkergray);
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24px;
            font-style: Medium;
            text-align: right;
            transition: 0.3s;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 500;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-text03:active {
            color: var(--dl-color-theme-primary2);
            font-family: Ploni ML v2 AAA Medium;
          }
          .timelinesection1920-frame303 {
            gap: 16px;
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .timelinesection1920-container03 {
            flex: 0 0 auto;
            width: 1px;
            height: 5px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #73777b;
          }
          .timelinesection1920-text04 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame296 {
            gap: 16px;
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .timelinesection1920-container04 {
            flex: 0 0 auto;
            width: 1px;
            height: 5px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #73777b;
          }
          .timelinesection1920-text05 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame298 {
            gap: 16px;
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .timelinesection1920-container05 {
            flex: 0 0 auto;
            width: 1px;
            height: 5px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #73777b;
          }
          .timelinesection1920-text06 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24.000001907348633px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame300 {
            gap: 16px;
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .timelinesection1920-container06 {
            flex: 0 0 auto;
            width: 1px;
            height: 5px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #73777b;
          }
          .timelinesection1920-text08 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame302 {
            gap: 16px;
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .timelinesection1920-container07 {
            flex: 0 0 auto;
            width: 1px;
            height: 5px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #73777b;
          }
          .timelinesection1920-text09 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame293 {
            gap: 16px;
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            padding-top: 5px;
            flex-direction: column;
          }
          .timelinesection1920-container08 {
            flex: 0 0 auto;
            width: 1px;
            height: 5px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #73777b;
          }
          .timelinesection1920-container10 {
            display: contents;
          }
          .timelinesection1920-content {
            display: flex;
            padding: 66.66667175292969px 13.333334922790527px 0;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .timelinesection1920-content-tab {
            display: flex;
            padding: 66.66667175292969px 13.333334922790527px 0;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .timelinesection1920-leftcoloumn {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame321 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame318 {
            gap: 273.3333740234375px;
            display: flex;
            padding: 0 0 40px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: rgba(255, 82, 61, 1);
            border-style: solid;
            border-width: 0 0 0.6666667461395264px;
            justify-content: space-between;
          }
          .timelinesection1920-vector {
            width: 23px;
            height: 25px;
          }
          .timelinesection1920-text11 {
            color: var(--dl-color-carasso-red);
            height: auto;
            font-size: 42.66667175292969px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame320 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .timelinesection1920-text13 {
            color: var(--dl-color-carasso-primaryblack);
            width: 368px;
            height: auto;
            direction: rtl;
            font-size: 42.66667175292969px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 500;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-text15 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 24.000001907348633px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-vector01 {
            right: 250px;
            bottom: 28px;
            position: absolute;
          }
          .timelinesection1920-pasted-image {
            width: 493px;
            height: 440px;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .timelinesection1920-content-tab1 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .timelinesection1920-leftcoloumn1 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3211 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3181 {
            gap: 273.3333740234375px;
            display: flex;
            padding: 0 0 40px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: rgba(255, 82, 61, 1);
            border-style: solid;
            border-width: 0 0 0.6666667461395264px;
            justify-content: space-between;
          }
          .timelinesection1920-vector02 {
            width: 23px;
            height: 25px;
          }
          .timelinesection1920-text17 {
            color: var(--dl-color-carasso-red);
            height: auto;
            font-size: 42.6667px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame3201 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .timelinesection1920-text18 {
            color: var(--dl-color-carasso-primaryblack);
            width: 368px;
            height: auto;
            direction: rtl;
            font-size: 42.66667175292969px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 500;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-text22 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 24.000001907348633px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-vector03 {
            top: 0px;
            right: 220px;
            width: 230px;
            height: 230px;
            position: absolute;
          }
          .timelinesection1920-pasted-image1 {
            width: 493px;
            height: 440px;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .timelinesection1920-content-tab2 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .timelinesection1920-leftcoloumn2 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3212 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3182 {
            gap: 273.3333740234375px;
            display: flex;
            padding: 0 0 40px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: rgba(255, 82, 61, 1);
            border-style: solid;
            border-width: 0 0 0.6666667461395264px;
            justify-content: space-between;
          }
          .timelinesection1920-vector04 {
            width: 23px;
            height: 25px;
          }
          .timelinesection1920-text24 {
            color: var(--dl-color-carasso-red);
            height: auto;
            font-size: 42.6667px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame3202 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .timelinesection1920-text25 {
            color: var(--dl-color-carasso-primaryblack);
            width: 368px;
            height: auto;
            direction: rtl;
            font-size: 42.6667px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 500;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-text27 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 130%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-vector05 {
            right: 250px;
            width: 188px;
            bottom: 50px;
            height: 188px;
            position: absolute;
          }
          .timelinesection1920-pasted-image2 {
            width: 493px;
            height: 440px;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .timelinesection1920-content-tab3 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .timelinesection1920-leftcoloumn3 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3213 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3183 {
            gap: 273.3333740234375px;
            display: flex;
            padding: 0 0 40px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: rgba(255, 82, 61, 1);
            border-style: solid;
            border-width: 0 0 0.6666667461395264px;
            justify-content: space-between;
          }
          .timelinesection1920-vector06 {
            width: 23px;
            height: 25px;
          }
          .timelinesection1920-text29 {
            color: var(--dl-color-carasso-red);
            height: auto;
            font-size: 42.6667px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame3203 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .timelinesection1920-text30 {
            color: var(--dl-color-carasso-primaryblack);
            width: 368px;
            height: auto;
            direction: rtl;
            font-size: 42.66667175292969px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 500;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-text32 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 24.000001907348633px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-vector07 {
            top: 20px;
            right: 250px;
            position: absolute;
          }
          .timelinesection1920-pasted-image3 {
            width: 493px;
            height: 440px;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .timelinesection1920-content-tab4 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            overflow: hidden;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .timelinesection1920-leftcoloumn4 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3214 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3184 {
            gap: 273.3333740234375px;
            display: flex;
            padding: 0 0 40px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: rgba(255, 82, 61, 1);
            border-style: solid;
            border-width: 0 0 0.6666667461395264px;
            justify-content: space-between;
          }
          .timelinesection1920-vector08 {
            width: 23px;
            height: 25px;
          }
          .timelinesection1920-text34 {
            color: var(--dl-color-carasso-red);
            height: auto;
            font-size: 42.6667px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame3204 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .timelinesection1920-text35 {
            color: var(--dl-color-carasso-primaryblack);
            width: 368px;
            height: auto;
            direction: rtl;
            font-size: 42.66667175292969px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 500;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-text37 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 24.000001907348633px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-pasted-image4 {
            width: 493px;
            height: 440px;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .timelinesection1920-vector09 {
            top: 0px;
            right: 176px;
            width: 230px;
            height: 230px;
            position: absolute;
          }
          .timelinesection1920-content-tab5 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .timelinesection1920-leftcoloumn5 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3215 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3185 {
            gap: 273.3333740234375px;
            display: flex;
            padding: 0 0 40px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: rgba(255, 82, 61, 1);
            border-style: solid;
            border-width: 0 0 0.6666667461395264px;
            justify-content: space-between;
          }
          .timelinesection1920-vector10 {
            width: 23px;
            height: 25px;
          }
          .timelinesection1920-text41 {
            color: var(--dl-color-carasso-red);
            height: auto;
            font-size: 42.6667px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame3205 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .timelinesection1920-text42 {
            color: var(--dl-color-carasso-primaryblack);
            width: 368px;
            height: auto;
            direction: rtl;
            font-size: 42.66667175292969px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 500;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-text44 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 24.000001907348633px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-pasted-image5 {
            width: 493px;
            height: 440px;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .timelinesection1920-vector11 {
            right: 420px;
            width: 188px;
            bottom: 120px;
            height: 188px;
            position: absolute;
          }
          .timelinesection1920-content-tab6 {
            display: none;
            padding: 66.66667175292969px 13.333334922790527px 0;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .timelinesection1920-leftcoloumn6 {
            gap: 13.333334922790527px;
            height: 515.3333740234375px;
            display: flex;
            padding: 0 42.66667175292969px 0 0;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3216 {
            gap: 53.33333969116211px;
            width: 472.0000305175781px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .timelinesection1920-frame3186 {
            gap: 273.3333740234375px;
            display: flex;
            padding: 0 0 40px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            border-color: rgba(255, 82, 61, 1);
            border-style: solid;
            border-width: 0 0 0.6666667461395264px;
            justify-content: space-between;
          }
          .timelinesection1920-vector12 {
            width: 23px;
            height: 25px;
          }
          .timelinesection1920-text46 {
            color: var(--dl-color-carasso-red);
            height: auto;
            font-size: 42.6667px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-frame3206 {
            gap: 53.33333969116211px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .timelinesection1920-text47 {
            color: var(--dl-color-carasso-primaryblack);
            width: 368px;
            height: auto;
            direction: rtl;
            font-size: 42.6667px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 500;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-text48 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 130%;
            font-stretch: normal;
            text-decoration: none;
          }
          .timelinesection1920-vector13 {
            top: 10px;
            right: 250px;
            position: absolute;
          }
          .timelinesection1920-pasted-image6 {
            width: 493px;
            height: 440px;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .timelinesection1920-container12 {
            display: contents;
          }
          @media (max-width: 1440px) {
            .timelinesection1920-center {
              width: 100%;
            }
            .timelinesection1920-years {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timelinesection1920-vector01 {
              right: 0px;
            }
            .timelinesection1920-vector03 {
              right: -25px;
            }
            .timelinesection1920-vector05 {
              right: 0px;
            }
            .timelinesection1920-vector07 {
              right: 0px;
            }
            .timelinesection1920-vector09 {
              right: 0px;
            }
            .timelinesection1920-vector11 {
              right: 200px;
            }
            .timelinesection1920-vector13 {
              right: 0px;
            }
          }
          @media (max-width: 1200px) {
            .timelinesection1920-vector01 {
              right: -50px;
            }
            .timelinesection1920-vector03 {
              right: -55px;
            }
            .timelinesection1920-vector05 {
              right: -55px;
            }
            .timelinesection1920-vector07 {
              right: -55px;
            }
            .timelinesection1920-vector09 {
              right: -55px;
            }
            .timelinesection1920-vector11 {
              right: 50px;
            }
            .timelinesection1920-vector13 {
              right: -55px;
            }
          }
          @media (max-width: 991px) {
            .timelinesection1920-container {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .timelinesection1920-center {
              width: 100%;
            }
            .timelinesection1920-header {
              width: 100%;
            }
            .timelinesection1920-years {
              width: 100%;
              align-self: center;
              padding-left: 0px;
              padding-right: 0px;
            }
            .timelinesection1920-content-tab {
              width: 100%;
            }
            .timelinesection1920-leftcoloumn {
              width: 50%;
            }
            .timelinesection1920-frame321 {
              width: auto;
            }
            .timelinesection1920-vector01 {
              left: auto;
              right: -50px;
              bottom: 100px;
            }
            .timelinesection1920-pasted-image {
              width: 50%;
              height: auto;
            }
            .timelinesection1920-content-tab1 {
              width: 100%;
            }
            .timelinesection1920-leftcoloumn1 {
              width: 50%;
            }
            .timelinesection1920-frame3211 {
              width: auto;
            }
            .timelinesection1920-vector03 {
              top: 20px;
              left: auto;
              right: -50px;
            }
            .timelinesection1920-pasted-image1 {
              width: 50%;
              height: auto;
            }
            .timelinesection1920-content-tab2 {
              width: 100%;
            }
            .timelinesection1920-leftcoloumn2 {
              width: 50%;
            }
            .timelinesection1920-frame3212 {
              width: auto;
            }
            .timelinesection1920-vector05 {
              right: -50px;
            }
            .timelinesection1920-pasted-image2 {
              width: 50%;
              height: auto;
            }
            .timelinesection1920-content-tab3 {
              width: 100%;
            }
            .timelinesection1920-leftcoloumn3 {
              width: 50%;
            }
            .timelinesection1920-frame3213 {
              width: auto;
            }
            .timelinesection1920-vector07 {
              right: -55px;
            }
            .timelinesection1920-pasted-image3 {
              width: 50%;
              height: 350px;
            }
            .timelinesection1920-content-tab4 {
              width: 100%;
            }
            .timelinesection1920-leftcoloumn4 {
              width: 50%;
            }
            .timelinesection1920-frame3214 {
              width: auto;
            }
            .timelinesection1920-pasted-image4 {
              width: 50%;
              height: 400px;
            }
            .timelinesection1920-vector09 {
              top: 0px;
              right: -65px;
            }
            .timelinesection1920-content-tab5 {
              width: 100%;
            }
            .timelinesection1920-leftcoloumn5 {
              width: 50%;
            }
            .timelinesection1920-frame3215 {
              width: auto;
            }
            .timelinesection1920-frame3205 {
              width: auto;
            }
            .timelinesection1920-pasted-image5 {
              width: 50%;
              height: 400px;
            }
            .timelinesection1920-vector11 {
              right: 26px;
              bottom: 129px;
            }
            .timelinesection1920-content-tab6 {
              width: 100%;
            }
            .timelinesection1920-leftcoloumn6 {
              width: 50%;
            }
            .timelinesection1920-frame3216 {
              width: auto;
            }
            .timelinesection1920-vector13 {
              left: 700px;
            }
            .timelinesection1920-pasted-image6 {
              width: 50%;
              height: auto;
            }
          }
          @media (max-width: 767px) {
            .timelinesection1920-text {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 42.6667px;
              font-family: Ploni ML v2 AAA Bold;
              font-weight: 300;
              line-height: 110%;
              text-decoration: none;
            }
            .timelinesection1920-text01 {
              font-family: Ploni ML v2 AAA Light;
            }
            .timelinesection1920-text02 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .timelinesection1920-years {
              gap: 30px;
            }
            .timelinesection1920-content-tab {
              flex-direction: column;
            }
            .timelinesection1920-leftcoloumn {
              width: auto;
              height: auto;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .timelinesection1920-vector01 {
              right: -55px;
              bottom: 0px;
            }
            .timelinesection1920-pasted-image {
              width: 100%;
              height: 100%;
            }
            .timelinesection1920-content-tab1 {
              flex-direction: column;
            }
            .timelinesection1920-leftcoloumn1 {
              width: 100%;
              height: auto;
              margin-bottom: var(--dl-space-space-threeunits);
              padding-right: 0px;
            }
            .timelinesection1920-vector03 {
              top: auto;
              right: -28px;
              bottom: 320px;
            }
            .timelinesection1920-pasted-image1 {
              width: 100%;
              height: 100%;
            }
            .timelinesection1920-content-tab2 {
              flex-direction: column;
            }
            .timelinesection1920-leftcoloumn2 {
              width: auto;
              height: auto;
              margin-bottom: var(--dl-space-space-threeunits);
              padding-right: 0px;
            }
            .timelinesection1920-frame3212 {
              width: 100%;
            }
            .timelinesection1920-pasted-image2 {
              width: 100%;
              height: 100%;
            }
            .timelinesection1920-content-tab3 {
              flex-direction: column;
            }
            .timelinesection1920-leftcoloumn3 {
              width: auto;
              height: auto;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .timelinesection1920-vector07 {
              top: auto;
              right: -45px;
              bottom: -40px;
            }
            .timelinesection1920-pasted-image3 {
              width: 100%;
              height: 100%;
            }
            .timelinesection1920-content-tab4 {
              flex-direction: column;
            }
            .timelinesection1920-leftcoloumn4 {
              width: auto;
              padding-right: 0px;
            }
            .timelinesection1920-pasted-image4 {
              width: 100%;
              height: 100%;
            }
            .timelinesection1920-vector09 {
              top: auto;
              right: -88px;
              bottom: 5px;
              z-index: 100;
            }
            .timelinesection1920-content-tab5 {
              flex-direction: column;
            }
            .timelinesection1920-leftcoloumn5 {
              width: auto;
              padding-right: 0px;
            }
            .timelinesection1920-pasted-image5 {
              width: 100%;
              height: 100%;
            }
            .timelinesection1920-vector11 {
              right: 29px;
              bottom: 19px;
            }
            .timelinesection1920-content-tab6 {
              flex-direction: column;
            }
            .timelinesection1920-leftcoloumn6 {
              width: auto;
              padding-right: 0px;
            }
            .timelinesection1920-vector13 {
              top: auto;
              left: auto;
              right: -55px;
            }
            .timelinesection1920-pasted-image6 {
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 479px) {
            .timelinesection1920-container {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .timelinesection1920-header {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timelinesection1920-years {
              gap: 5px;
            }
            .timelinesection1920-content {
              width: 100%;
            }
            .timelinesection1920-content-tab {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .timelinesection1920-leftcoloumn {
              width: 100%;
              padding-right: 0px;
            }
            .timelinesection1920-frame321 {
              width: 100%;
            }
            .timelinesection1920-vector01 {
              left: auto;
              bottom: -55px;
            }
            .timelinesection1920-content-tab1 {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .timelinesection1920-leftcoloumn1 {
              width: 100%;
              padding-right: 0px;
            }
            .timelinesection1920-frame3211 {
              width: 100%;
            }
            .timelinesection1920-vector03 {
              top: auto;
              left: 250px;
              bottom: 180px;
            }
            .timelinesection1920-content-tab2 {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .timelinesection1920-leftcoloumn2 {
              width: 100%;
              padding-right: 0px;
            }
            .timelinesection1920-frame3212 {
              width: 100%;
            }
            .timelinesection1920-vector05 {
              right: -40px;
              bottom: 0px;
            }
            .timelinesection1920-content-tab3 {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .timelinesection1920-leftcoloumn3 {
              width: 100%;
              padding-right: 0px;
            }
            .timelinesection1920-frame3213 {
              width: 100%;
            }
            .timelinesection1920-vector07 {
              right: -50px;
              bottom: -80px;
            }
            .timelinesection1920-content-tab4 {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .timelinesection1920-leftcoloumn4 {
              width: 100%;
              padding-right: 0px;
            }
            .timelinesection1920-frame3214 {
              width: 100%;
            }
            .timelinesection1920-vector09 {
              bottom: -60px;
            }
            .timelinesection1920-content-tab5 {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .timelinesection1920-leftcoloumn5 {
              width: 100%;
              padding-right: 0px;
            }
            .timelinesection1920-vector11 {
              right: -33px;
              bottom: -31px;
            }
            .timelinesection1920-content-tab6 {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .timelinesection1920-leftcoloumn6 {
              width: 100%;
              padding-right: 0px;
            }
            .timelinesection1920-vector13 {
              top: auto;
              bottom: 250px;
            }
          }
        `}
      </style>
    </>
  )
}

Timelinesection1920.defaultProps = {
  pastedImageAlt5: 'pastedImage',
  text1: '1933',
  pastedImageAlt4: 'pastedImage',
  pastedImageAlt7: 'pastedImage',
  pastedImageAlt6: 'pastedImage',
  vectorSrc9: '/external/vectori7149-1nh.svg',
  pastedImageSrc: '/external/pastedimage-23u-1500w.png',
  vectorAlt: 'Vector3716',
  pastedImageSrc9: '/external/pastedimage-7c8d-1500w.jpeg',
  pastedImageAlt1: 'pastedImage',
  pastedImageSrc5: '/external/pastedimage-x2m-1500w.jpeg',
  vectorAlt7: 'VectorI7149',
  pastedImageSrc6: '/external/pastedimage-tfkd-1500w.png',
  text5: '2019',
  pastedImageAlt: 'pastedImage',
  vectorSrc: '/external/vector3716-4qw.svg',
  pastedImageAlt8: 'pastedImage',
  vectorAlt8: 'VectorI7149',
  pastedImageSrc7: '/external/pastedimage-7jbf-1500w.jpeg',
  text2: '1945',
  pastedImageSrc8: '/external/pastedimage-f9cv-1500w.jpeg',
  vectorAlt10: 'VectorI7149',
  vectorAlt9: 'VectorI7149',
  pastedImageAlt9: 'pastedImage',
  vectorSrc8: '/external/vectori7149-qynl.svg',
  pastedImageSrc1: '/external/pastedimage-xj43.svg',
  vectorSrc7: '/external/vectori7149-knvq.svg',
  text4: '2011',
  text6: '2022',
  vectorSrc10: '/external/vectori7149-t7ou.svg',
  pastedImageSrc4: '/external/pastedimage-rrly-1500w.jpeg',
  text3: '2009',
}

Timelinesection1920.propTypes = {
  pastedImageAlt5: PropTypes.string,
  text1: PropTypes.string,
  pastedImageAlt4: PropTypes.string,
  pastedImageAlt7: PropTypes.string,
  pastedImageAlt6: PropTypes.string,
  vectorSrc9: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  vectorAlt: PropTypes.string,
  pastedImageSrc9: PropTypes.string,
  pastedImageAlt1: PropTypes.string,
  pastedImageSrc5: PropTypes.string,
  vectorAlt7: PropTypes.string,
  pastedImageSrc6: PropTypes.string,
  text5: PropTypes.string,
  pastedImageAlt: PropTypes.string,
  vectorSrc: PropTypes.string,
  pastedImageAlt8: PropTypes.string,
  vectorAlt8: PropTypes.string,
  pastedImageSrc7: PropTypes.string,
  text2: PropTypes.string,
  pastedImageSrc8: PropTypes.string,
  vectorAlt10: PropTypes.string,
  vectorAlt9: PropTypes.string,
  pastedImageAlt9: PropTypes.string,
  vectorSrc8: PropTypes.string,
  pastedImageSrc1: PropTypes.string,
  vectorSrc7: PropTypes.string,
  text4: PropTypes.string,
  text6: PropTypes.string,
  vectorSrc10: PropTypes.string,
  pastedImageSrc4: PropTypes.string,
  text3: PropTypes.string,
}

export default Timelinesection1920
