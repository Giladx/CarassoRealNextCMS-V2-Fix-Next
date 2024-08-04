import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'

import esgSwiperResource from '../resources/esg-swiper'

const ESG = (props) => {
  return (
    <>
      <div className="esg-container">
        <Head>
          <title>ESG - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="ESG - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/58c2f8ee-ffd7-4d8b-bdd2-427960b94318/109b4fac-a4aa-4f2a-b514-c3edb8f8c6af?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_gg1zz8) => (
            <>
              <div className="esg-hero">
                <img
                  alt="image"
                  src="/external/a3e3772316e190bb9ee21a1edbe71b5d-1500w-1500w.jpeg"
                  className="esg-image"
                />
                <div className="esg-herotext">
                  <span className="esg-text">
                    <span className="esg-text01">כמה מילים על המחויבות</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="esg-text03">החברתית והסביבתית שלנו</span>
                  </span>
                </div>
                <div id="mask" className="esg-mask"></div>
              </div>
              <div className="esg-memories">
                <div className="esg-content-imagecontainer">
                  <div className="esg-gallery">
                    <div
                      data-thq="slider"
                      data-navigation="true"
                      data-pagination="true"
                      className="esg-slider swiper"
                    >
                      <div
                        data-thq="slider-wrapper"
                        className="esg-slider-wrapper swiper-wrapper"
                      >
                        <div
                          data-thq="slider-slide"
                          className="esg-slider-slide swiper-slide"
                        >
                          <img
                            alt="image"
                            src="/external/image-rectenagle-1500w-1500w.png"
                            className="esg-image1"
                          />
                          <Repeater
                            items={context_gg1zz8?.swiper || []}
                            renderItem={(context_4ohug) => (
                              <>
                                <div className="esg-container1">
                                  <img
                                    alt="image"
                                    src={context_4ohug?.url}
                                    className="esg-image2"
                                  />
                                </div>
                              </>
                            )}
                          />
                        </div>
                        <div
                          data-thq="slider-slide"
                          className="esg-slider-slide1 swiper-slide"
                        >
                          <img
                            alt="image"
                            src="/external/image-rectenagle-1500w-1500w.png"
                            className="esg-image3"
                          />
                        </div>
                        <div
                          data-thq="slider-slide"
                          className="esg-slider-slide2 swiper-slide"
                        >
                          <img
                            alt="image"
                            src="/external/image-rectenagle-1500w-1500w.png"
                            className="esg-image4"
                          />
                        </div>
                      </div>
                      <div
                        data-thq="slider-pagination"
                        className="esg-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                      >
                        <div
                          data-thq="slider-pagination-bullet"
                          className="esg-slider-pagination-bullet swiper-pagination-bullet swiper-pagination-bullet-active"
                        ></div>
                        <div
                          data-thq="slider-pagination-bullet"
                          className="esg-slider-pagination-bullet1 swiper-pagination-bullet"
                        ></div>
                        <div
                          data-thq="slider-pagination-bullet"
                          className="esg-slider-pagination-bullet2 swiper-pagination-bullet"
                        ></div>
                      </div>
                      <div
                        data-thq="slider-button-prev"
                        className="esg-slider-button-prev swiper-button-prev"
                      ></div>
                      <div
                        data-thq="slider-button-next"
                        className="esg-slider-button-next swiper-button-next"
                      ></div>
                    </div>
                    <Script
                      html={`<style>
    .swiper-button-prev:after, .swiper-button-next:after{
    font-size: 20px
    }
</style>`}
                    ></Script>
                  </div>
                  <div className="esg-content">
                    <span className="esg-text04">
                      <span>
                        מרגע שעלתה משפחת קרסו לארץ, היא השתמשה במשאביה כדי לקדם
                        סוגיות חברתיות
                      </span>
                    </span>
                    <span className="esg-text06">
                      הסוגיות אולי השתנו מאז, אבל המעורבות והמחויבות נשארו בדיוק
                      אותו הדבר.
                    </span>
                  </div>
                </div>
              </div>
              <div className="esg-frame3examples">
                <div className="esg-headlinescontainer">
                  <div className="esg-headlinecontent">
                    <div className="esg-headline01">
                      <span className="esg-text07">
                        <span>
                          הפעילויות שלנו היום מאפשרות לנו להביא לשינוי חיובי
                          בשכונות, בקהילות ובסביבה שבה אנו פועלים
                        </span>
                      </span>
                    </div>
                    <div className="esg-headline02">
                      <span className="esg-text09">
                        <span>הנה שלוש דוגמאות מתוך עשרות</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="esg-frame1261158186">
                  <div className="esg-frame1261158159">
                    <img
                      alt="ICON013727"
                      src="/external/icon013727-vgl.svg"
                      className="esg-icon01"
                    />
                    <div className="esg-headline">
                      <span className="esg-text11">
                        <span>שוויון מגדרי</span>
                      </span>
                    </div>
                    <div className="esg-text13">
                      <span className="esg-text14">
                        <span>
                          לפי נתוני הרשות לניירות ערך, רק בכ-6% מהחברות בישראל
                          מכהנות בדירקטוריון יותר משתי נשים. בדירקטוריון של חברת
                          קרסו מכהנות 5 נשים (שהן 42%). המצב דומה גם בשיעור
                          הנשים בחברה בכלל: 54% מעובדי ועובדות החברה הן נשים.
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="esg-frame1261158160">
                    <img
                      alt="ICON023727"
                      src="/external/icon023727-bmi6.svg"
                      className="esg-icon02"
                    />
                    <div className="esg-headline1">
                      <span className="esg-text16">
                        <span>תכנית קרסו למחקר ופיתוח דיור חברתי</span>
                      </span>
                    </div>
                    <div className="esg-text18">
                      <span className="esg-text19">
                        <span className="esg-text20">
                          <span>
                            תכנית
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
                        <span>
                          <span>
                            ׳הגר׳
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
                        <span>
                          הוקמה ב-2014 בפקולטה למשפטים באוניברסיטת תל אביב, והיא
                          כיום הגוף היחיד בישראל הממקד את פעילותו בקידום של דיור
                          חברתי. היא הוקמה כדי לפתח ידע וכלים חדשים בתחום הדיור
                          הציבורי והתחדשות עירונית וכדי לקדם דיור בהישג יד לבעלי
                          הכנסה בינונית ונמוכה.
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="esg-frame1261158161">
                    <img
                      alt="ICON033727"
                      src="/external/icon033727-pp5g.svg"
                      className="esg-icon03"
                    />
                    <div className="esg-frame1261158211">
                      <span className="esg-text27">
                        <span>בנייה סביבתית</span>
                      </span>
                    </div>
                    <div className="esg-frame1261158210">
                      <span className="esg-text29">
                        <span>
                          בפרויקטים חדשניים כמו Carasso SUNN ופלורה, התכנון נועד
                          למזער את ניצול המשאבים הטבעיים במערכות המים, האוויר
                          והאור, ואף לעודד חיים פעילים. ברבים מהפרויקטים מוטמעים
                          מקומות לאופניים, עמדות טעינה לרכב חשמלי, פאנלים
                          סולריים, גגות ירוקים, הצללה טבעית ועוד.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="esg-frame1261158164">
                  <div className="esg-content1">
                    <span className="esg-text31">
                      <span>
                        מלבד אלה, קרסו תורמת קרוב למיליון שקל מדי שנה למגוון
                        מטרות בעולמות החינוך, קידום נשים, רפואה ועוד. בשבילנו זה
                        תמיד היה המובן מאליו.
                      </span>
                    </span>
                  </div>
                  <a
                    href={context_gg1zz8?.esgReport?.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="esg-buttontextarrow"
                  >
                    <img
                      alt="Arrow7Stroke3728"
                      src="/external/arrow7stroke3728-8ojps.svg"
                      className="esg-arrow7-stroke"
                    />
                    <span className="esg-text33">2023</span>
                    <span className="esg-text34">
                      <span>דו״ח ESG</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="esg-policy">
                <div className="esg-top">
                  <div className="esg-frame1261158205">
                    <span className="esg-text36">
                      <span>
                        ״קרסו נדלן מכירה באחריותה לקיים תשתית עסקית ערכית
                        ואחראית בפעילותה. נמשיך לפעול בשקיפות תוך אמונה שעלינו
                        להוביל באמצעות דוגמה אישית כלפי כלל מחזיקי העניין של
                        החברה״.
                      </span>
                    </span>
                    <button
                      id="esgBtnId"
                      type="button"
                      className="esg-buttontextarrow1 accordion"
                    >
                      <img
                        id="esgarrow"
                        alt="CaretDown3728"
                        src="/external/caretdown3728-5t4y.svg"
                        className="esg-caret-down"
                      />
                      <span className="esg-text38">
                        <span>לקריאת מדיניות ה-ESG שלנו</span>
                      </span>
                    </button>
                  </div>
                  <div className="esg-frame1261158192">
                    <div className="esg-memberblock">
                      <div className="esg-topimage"></div>
                      <div className="esg-bottomtext">
                        <div className="esg-frame279">
                          <span className="esg-text40">
                            <span>דן פרנס</span>
                          </span>
                          <span className="esg-text42">
                            <span>מנכ״ל</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      alt="Vector3728"
                      src="/external/vector3728-6ozk.svg"
                      className="esg-vector"
                    />
                  </div>
                </div>
                <div id="esgId" className="esg-bottom panel">
                  <div className="esg-frame1261158208">
                    <span className="esg-text44">
                      <span>פעילות החברה מתמקדת ב-4 ערוצים עיקריים</span>
                    </span>
                    <div className="esg-frame1261158207">
                      <div className="esg-frame1261158217">
                        <div className="esg-frame1261158216">
                          <div className="esg-frame1261158199">
                            <span className="esg-text46">
                              <span>
                                יחסי החברה עם עובדיה, שימור ופיתוח הון אנושי
                                מגוון ואיכותי
                              </span>
                            </span>
                            <div className="esg-frame1261158196">
                              <img
                                alt="Ellipse13728"
                                src="/external/ellipse13728-3x8-200w-200w.png"
                                className="esg-ellipse1"
                              />
                              <span className="esg-text48">2</span>
                            </div>
                          </div>
                          <div className="esg-frame1261158200">
                            <span className="esg-text49">
                              <span>התנהלות עסקית אתית, אחראית, ונאותה</span>
                            </span>
                            <div className="esg-frame1261158195">
                              <img
                                alt="Ellipse13728"
                                src="/external/ellipse13728-sx3w-200w-200w.png"
                                className="esg-ellipse11"
                              />
                              <span className="esg-text51">1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="esg-frame1261158218">
                        <div className="esg-frame1261158202">
                          <span className="esg-text52">
                            <span>
                              מיסוד תשתית ארגונית לניהול סביבתי יעיל וחסכוני
                              המיטיב עם הסביבה
                            </span>
                          </span>
                          <div className="esg-frame1261158198">
                            <img
                              alt="Ellipse13728"
                              src="/external/ellipse13728-5bj9-200w-200w.png"
                              className="esg-ellipse12"
                            />
                            <span className="esg-text54">4</span>
                          </div>
                        </div>
                        <div className="esg-frame1261158201">
                          <span className="esg-text55">
                            <span>
                              השפעה (אימפקט) באמצעות אימוץ, יישום וקידום יעדי
                              הפיתוח של האו&quot;ם בפעילות החברה
                            </span>
                          </span>
                          <div className="esg-frame1261158197">
                            <img
                              alt="Ellipse13728"
                              src="/external/ellipse13728-jlte-200w-200w.png"
                              className="esg-ellipse13"
                            />
                            <span className="esg-text57">3</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="esg-frame1261158206">
                    <span className="esg-text58">
                      <span>מדיניות ה-ESG שלנו</span>
                    </span>
                    <span className="esg-text60">
                      <span>
                        אנו מאמינים בהובלה ומצוינות בפעילותנו בכל תחומי הפעילות
                        בחברה, ערכים אשר קיבלו ביטוי בשנת 2023 כאשר החברה פרסמה
                        לראשונה דו&quot;ח ESG מרצונה, אשר נועד לשקף לכלל בעלי
                        העניין את פעילות החברה וביצועיה בתחומי החברה, הסביבה
                        והתאגיד, מתוך אמונה כי פרקטיקות ESG מקומן בחיי היום יום
                        של פעילות החברה. במסגרת זו נמשיך לפעול, להעמיק ולשפר את
                        ביצועינו בתחומים אלה.
                      </span>
                    </span>
                  </div>
                </div>
                <Script
                  html={`<script>
// Get the modal
var modal = document.getElementById("esgId");

// Get the button that toggles the modal
var btn = document.getElementById("esgBtnId");

// Get the arrow element
var arrow = document.getElementById("esgarrow");

// Toggle the modal display and arrow rotation on button click
btn.onclick = function() {
  // Toggle modal display
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
  
  // Toggle arrow rotation
  arrow.style.transform = arrow.style.transform === "rotate(0deg)" ? "rotate(180deg)" : "rotate(0deg)";
}
</script>`}
                ></Script>
              </div>
              <div className="esg-kodeti">
                <div className="esg-frame1261158212">
                  <div className="esg-frame332">
                    <div className="esg-frame331">
                      <div className="esg-headline2">
                        <span className="esg-text62">
                          {' '}
                          האתי שלנו
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="esg-text63">הקוד</span>
                      </div>
                      <div className="esg-text64">
                        <span className="esg-text65">
                          <span>
                            הקוד האתי שלנו משקף את הערכים ותפישת העולם שלנו
                            ומשמש מצפן לפיו אנחנו מתנהלים, גם בתוך הבית וגם מול
                            הלקוחות, הספקים, הקולגות, הקהילה והסביבה, במטרה
                            להגשים את החזון שלפנינו - להמשיך לתכנן, ליזום ולאפשר
                            לכל אחד ואחת להגיע לסגנון החיים המושלם.
                          </span>
                        </span>
                      </div>
                      <a
                        href={context_gg1zz8?.esgEthics?.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="esg-buttontextarrow2"
                      >
                        <img
                          alt="Arrow7Stroke3728"
                          src="/external/arrow7stroke3728-3and.svg"
                          className="esg-arrow7-stroke1"
                        />
                        <span className="esg-text67">
                          <span>לקריאת הקוד האתי</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <img
                  alt="Vector3728"
                  src="/external/vector3728-sro.svg"
                  className="esg-vector1"
                />
              </div>
              <div className="esg-contactusform">
                <div className="esg-formwindowstage3">
                  <div className="esg-frame1261158156">
                    <div className="esg-formheader">
                      <div className="esg-formclose"></div>
                      <div className="esg-formheaders">
                        <span className="esg-text69">
                          טופס
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="esg-text70">פניות הציבור</span>
                      </div>
                    </div>
                    <div className="esg-frame166">
                      <div className="esg-frame164">
                        <Script
                          html={`<script type="text/javascript" src="https://form.jotform.com/jsform/241762112773454"></script>`}
                          className="esg-html-node2"
                        ></Script>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          initialData={props.contextGg1zz8Prop}
          persistDataDuringLoading={true}
        />
      </div>
      <style jsx>
        {`
          .esg-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .esg-hero {
            width: 100%;
            height: 800px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .esg-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .esg-herotext {
            gap: 10px;
            width: 751px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .esg-text {
            color: var(--dl-color-carasso-plainwhite);
            width: 751px;
            height: auto;
            z-index: 10;
            font-size: 64px;
            font-style: Light;
            text-align: center;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-text01 {
            font-family: 'Ploni ML v2 AAA Light';
          }
          .esg-text03 {
            font-family: 'PloniMLv2 AAA-Bold';
          }
          .esg-mask {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.4) 0%,
              rgba(0, 0, 0, 0.7) 100%
            );
          }
          .esg-memories {
            width: 100%;
            height: 713px;
            display: flex;
            padding: 100px 200px;
            z-index: 1;
            align-items: center;
            justify-content: center;
          }
          .esg-content-imagecontainer {
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: center;
          }
          .esg-gallery {
            gap: 16px;
            display: flex;
            flex-grow: 1;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
          }
          .esg-slider {
            width: 800px;
            height: 450px;
            display: inline-block;
            position: relative;
          }
          .esg-slider-wrapper {
            margin-bottom: 16px;
          }
          .esg-slider-slide {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
          }
          .esg-image1 {
            width: 90%;
            height: auto;
            display: none;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .esg-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius20);
            flex-direction: column;
          }
          .esg-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            align-content: center;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .esg-slider-slide1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .esg-image3 {
            width: 90%;
            height: auto;
            display: none;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .esg-slider-slide2 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .esg-image4 {
            width: 90%;
            height: auto;
            display: none;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .esg-slider-pagination {
            display: block;
          }
          .esg-slider-pagination-bullet {
            background: black;
          }
          .esg-slider-pagination-bullet1 {
            background: black;
          }
          .esg-slider-pagination-bullet2 {
            background: black;
          }
          .esg-slider-button-prev {
            color: var(--dl-color-theme-neutral-dark);
          }
          .esg-slider-button-next {
            color: var(--dl-color-theme-neutral-dark);
            font-size: 5px;
          }
          .esg-content {
            gap: 40px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            margin-left: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .esg-text04 {
            color: var(--dl-color-carasso-red);
            width: 471px;
            height: auto;
            direction: rtl;
            font-size: 36px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-text06 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 26px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-frame3examples {
            width: 100%;
            height: auto;
            display: flex;
            padding: 70px 90px;
            z-index: 2;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .esg-headlinescontainer {
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: center;
          }
          .esg-headlinecontent {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .esg-headline01 {
            gap: 10px;
            width: 740px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .esg-text07 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            direction: rtl;
            font-size: 36px;
            font-style: Light;
            text-align: center;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 130%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .esg-headline02 {
            gap: 10px;
            display: flex;
            align-items: flex-start;
          }
          .esg-text09 {
            color: rgba(0, 0, 0, 1);
            width: 740px;
            height: auto;
            direction: rtl;
            font-size: 24px;
            font-style: DemiBold;
            text-align: center;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 400;
            line-height: 130%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-frame1261158186 {
            gap: 5;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .esg-frame1261158159 {
            width: 407px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .esg-icon01 {
            width: 99px;
            height: 99px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .esg-headline {
            gap: 10px;
            display: flex;
            align-items: center;
          }
          .esg-text11 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            direction: rtl;
            font-size: 24px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 400;
            line-height: 130%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .esg-text13 {
            gap: 10px;
            display: flex;
            align-items: center;
          }
          .esg-text14 {
            color: var(--dl-color-carasso-primaryblack);
            width: 385px;
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: center;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-frame1261158160 {
            width: 405px;
            display: flex;
            direction: rtl;
            align-items: center;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .esg-icon02 {
            width: 99px;
            height: 99px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .esg-headline1 {
            gap: 10px;
            display: flex;
            align-items: center;
          }
          .esg-text16 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            direction: rtl;
            font-size: 24px;
            font-style: DemiBold;
            text-align: center;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 400;
            line-height: 130%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .esg-text18 {
            gap: 10px;
            display: flex;
            align-items: center;
          }
          .esg-text19 {
            color: var(--dl-color-carasso-primaryblack);
            width: 379px;
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: center;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-text20 {
            font-weight: 300;
          }
          .esg-frame1261158161 {
            width: 407px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .esg-icon03 {
            width: 99px;
            height: 99px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .esg-frame1261158211 {
            gap: 10px;
            display: flex;
            align-items: center;
          }
          .esg-text27 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            direction: rtl;
            font-size: 24px;
            font-style: DemiBold;
            text-align: center;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 400;
            line-height: 130%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .esg-frame1261158210 {
            gap: 10px;
            display: flex;
            align-items: center;
          }
          .esg-text29 {
            color: var(--dl-color-carasso-primaryblack);
            width: 371px;
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: center;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-frame1261158164 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .esg-content1 {
            display: flex;
            align-items: center;
          }
          .esg-text31 {
            color: var(--dl-color-carasso-primaryblack);
            width: 696px;
            height: auto;
            direction: rtl;
            font-size: 24px;
            font-style: Light;
            text-align: center;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 130%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .esg-buttontextarrow {
            gap: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .esg-arrow7-stroke {
            width: 8px;
            height: 7px;
          }
          .esg-text33 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 400;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-text34 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-policy {
            width: 100%;
            height: auto;
            display: flex;
            padding: 120px 90px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .esg-top {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .esg-frame1261158205 {
            gap: 40px;
            width: 540px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .esg-text36 {
            color: var(--dl-color-carasso-primaryblack);
            width: 540px;
            height: auto;
            direction: rtl;
            font-size: 24px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-buttontextarrow1 {
            cursor: pointer;
          }
          .esg-caret-down {
            width: 12px;
            height: 12px;
            transform: rotate(180deg);
            transition: 0.3s;
          }
          .esg-caret-down:active {
            transform: rotate(0deg);
          }
          .esg-text38 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-frame1261158192 {
            gap: 10px;
            display: flex;
            position: relative;
            align-items: center;
            margin-left: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .esg-memberblock {
            width: 250px;
            height: 333.33331298828125px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(56, 94, 157, 1);
            border-style: solid;
            border-width: 0.5px;
            border-radius: 16.66666603088379px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .esg-topimage {
            width: 100%;
            height: 100%;
            display: flex;
            padding: 8px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/external/top-image1-1500h-1500h.png');
          }
          .esg-bottomtext {
            display: flex;
            padding: 18px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .esg-frame279 {
            gap: 13.333333015441895px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .esg-text40 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 20px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-text42 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-vector {
            top: -20px;
            left: -50px;
            width: 94px;
            height: 107px;
            z-index: 1;
            position: absolute;
          }
          .esg-bottom {
            display: none;
          }
          .esg-frame1261158208 {
            width: 576px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .esg-text44 {
            color: var(--dl-color-carasso-blue);
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 500;
            line-height: 150%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .esg-frame1261158207 {
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .esg-frame1261158217 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .esg-frame1261158216 {
            gap: 30px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .esg-frame1261158199 {
            gap: 12px;
            width: 50%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            justify-content: flex-end;
          }
          .esg-text46 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-frame1261158196 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .esg-ellipse1 {
            top: 0px;
            left: 0.5px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .esg-text48 {
            top: 5px;
            left: 8px;
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: UltraLight;
            text-align: center;
            font-family: Ploni ML v2 AAA;
            font-weight: 100;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-frame1261158200 {
            gap: 12px;
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .esg-text49 {
            color: var(--dl-color-carasso-primaryblack);
            width: 250px;
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-frame1261158195 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .esg-ellipse11 {
            top: 0px;
            left: -0.5px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .esg-text51 {
            top: 5px;
            left: 8.5px;
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: UltraLight;
            text-align: center;
            font-family: Ploni ML v2 AAA;
            font-weight: 100;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-frame1261158218 {
            gap: 30px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .esg-frame1261158202 {
            gap: 12px;
            width: 50%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            justify-content: flex-end;
          }
          .esg-text52 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 18px;
            max-width: 300px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-frame1261158198 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .esg-ellipse12 {
            top: 0px;
            left: 0.5px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .esg-text54 {
            top: 5px;
            left: 8px;
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: UltraLight;
            text-align: center;
            font-family: Ploni ML v2 AAA;
            font-weight: 100;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-frame1261158201 {
            gap: 12px;
            width: 50%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            justify-content: flex-end;
          }
          .esg-text55 {
            color: var(--dl-color-carasso-primaryblack);
            width: 250px;
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-frame1261158197 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .esg-ellipse13 {
            top: 0px;
            left: 0.5px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .esg-text57 {
            top: 5px;
            left: 8px;
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: UltraLight;
            text-align: center;
            font-family: Ploni ML v2 AAA;
            font-weight: 100;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-frame1261158206 {
            width: 576px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .esg-text58 {
            color: var(--dl-color-carasso-blue);
            height: auto;
            direction: rtl;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            margin-bottom: 34px;
            text-decoration: none;
          }
          .esg-text60 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 18px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-kodeti {
            width: 100%;
            height: auto;
            display: flex;
            padding: 144px 0;
            z-index: 4;
            overflow: hidden;
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-carasso-blue);
          }
          .esg-frame1261158212 {
            gap: 10px;
            height: auto;
            display: flex;
            padding: 10px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .esg-frame332 {
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .esg-frame331 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .esg-headline2 {
            display: flex;
            align-items: center;
            margin-bottom: 60px;
          }
          .esg-text62 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 300;
            line-height: 130%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-text63 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 130%;
            margin-left: var(--dl-space-space-unit);
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-text64 {
            gap: 10px;
            display: flex;
            align-items: center;
          }
          .esg-text65 {
            color: var(--dl-color-carasso-plainwhite);
            width: 681px;
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: center;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 150%;
            font-stretch: normal;
            margin-bottom: 60px;
            text-decoration: none;
          }
          .esg-buttontextarrow2 {
            gap: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .esg-arrow7-stroke1 {
            width: 8px;
            height: 7px;
          }
          .esg-text67 {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'PloniMLv2 AAA-Bold';
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-vector1 {
            top: 70px;
            left: 0px;
            width: 498px;
            height: 517px;
            z-index: 1;
            position: absolute;
          }
          .esg-contactusform {
            gap: 10px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 72px 90px;
            z-index: 5;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
            background-color: #f6f6f6;
          }
          .esg-formwindowstage3 {
            gap: 80px;
            width: 1742px;
            display: flex;
            padding: 60px 0;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-radius: 20px;
            flex-direction: column;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .esg-frame1261158156 {
            gap: 60px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .esg-formheader {
            gap: 678px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .esg-formclose {
            gap: 10px;
            width: 20px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .esg-formheaders {
            gap: 15px;
            display: flex;
            align-items: flex-end;
            flex-direction: row-reverse;
          }
          .esg-text69 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-text70 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 300;
            font-stretch: normal;
            text-decoration: none;
          }
          .esg-frame166 {
            gap: 30px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .esg-frame164 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .esg-html-node2 {
            width: 100%;
          }
          @media (max-width: 1440px) {
            .esg-memories {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .esg-gallery {
              justify-content: center;
            }
            .esg-frame1261158212 {
              height: auto;
            }
            .esg-formwindowstage3 {
              width: 100%;
            }
          }
          @media (max-width: 1200px) {
            .esg-memories {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .esg-gallery {
              justify-content: center;
            }
            .esg-slider {
              width: 600px;
            }
            .esg-slider-slide {
              width: 100%;
              height: auto;
            }
            .esg-image1 {
              width: 90%;
            }
            .esg-image3 {
              width: 90%;
            }
            .esg-image4 {
              width: 90%;
            }
            .esg-frame3examples {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .esg-frame1261158186 {
              width: 100%;
            }
            .esg-frame1261158159 {
              width: auto;
              margin-left: 0px;
              margin-right: 0px;
            }
            .esg-frame1261158160 {
              width: auto;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .esg-frame1261158161 {
              width: auto;
              margin-left: 0px;
              margin-right: 0px;
            }
            .esg-policy {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .esg-frame1261158208 {
              width: 50%;
            }
            .esg-frame1261158206 {
              width: 25%;
            }
            .esg-frame1261158212 {
              height: auto;
            }
            .esg-formwindowstage3 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .esg-herotext {
              width: auto;
            }
            .esg-text {
              width: 700px;
            }
            .esg-memories {
              height: 100%;
            }
            .esg-content-imagecontainer {
              gap: 50px;
              width: 100%;
              flex-grow: unset;
              flex-direction: column;
            }
            .esg-gallery {
              flex-grow: unset;
            }
            .esg-slider {
              width: 800px;
            }
            .esg-slider-slide {
              margin-bottom: var(--dl-space-space-unit);
            }
            .esg-slider-slide1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .esg-slider-slide2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .esg-content {
              align-items: center;
              margin-left: 0px;
            }
            .esg-text04 {
              width: 50%;
              text-align: center;
            }
            .esg-text06 {
              align-self: center;
            }
            .esg-headlinescontainer {
              width: auto;
              height: auto;
            }
            .esg-headlinecontent {
              align-items: center;
              justify-content: center;
            }
            .esg-text09 {
              width: 100%;
              align-self: center;
            }
            .esg-frame1261158186 {
              align-items: center;
              flex-direction: column-reverse;
            }
            .esg-frame1261158159 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .esg-frame1261158160 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .esg-frame1261158161 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .esg-text31 {
              width: auto;
            }
            .esg-frame1261158208 {
              width: 100%;
            }
            .esg-frame1261158216 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .esg-text55 {
              width: 100%;
            }
            .esg-frame1261158206 {
              width: 100%;
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .esg-kodeti {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .esg-frame1261158212 {
              height: 100%;
            }
            .esg-formwindowstage3 {
              width: 100%;
            }
            .esg-formheader {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .esg-herotext {
              width: 100%;
            }
            .esg-text {
              width: 100%;
            }
            .esg-gallery {
              width: 100%;
            }
            .esg-slider {
              width: 100%;
            }
            .esg-image1 {
              width: 100%;
            }
            .esg-image3 {
              width: 90%;
            }
            .esg-image4 {
              width: 90%;
            }
            .esg-text04 {
              width: 100%;
              text-align: center;
            }
            .esg-headlinecontent {
              width: 100%;
              align-items: center;
              justify-content: center;
            }
            .esg-headline01 {
              width: 100%;
            }
            .esg-text07 {
              width: 100%;
            }
            .esg-text09 {
              width: 100%;
            }
            .esg-frame1261158186 {
              flex-direction: column-reverse;
            }
            .esg-top {
              flex-direction: column;
            }
            .esg-frame1261158205 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .esg-kodeti {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .esg-frame1261158212 {
              width: 100%;
              height: auto;
            }
            .esg-frame331 {
              width: 100%;
            }
            .esg-text65 {
              width: 100%;
            }
            .esg-vector1 {
              top: 300px;
              left: -150px;
            }
            .esg-formwindowstage3 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .esg-herotext {
              width: 100%;
            }
            .esg-text {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              font-size: 45px;
            }
            .esg-content-imagecontainer {
              width: 100%;
            }
            .esg-slider {
              height: 280px;
            }
            .esg-text04 {
              width: 100%;
            }
            .esg-text06 {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 20px;
              text-align: center;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 130%;
              text-decoration: none;
            }
            .esg-headlinecontent {
              align-items: center;
              justify-content: center;
            }
            .esg-text07 {
              width: 100%;
            }
            .esg-text09 {
              width: 100%;
            }
            .esg-frame1261158186 {
              flex-direction: column-reverse;
            }
            .esg-text31 {
              width: 100%;
            }
            .esg-frame1261158205 {
              width: 100%;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .esg-text36 {
              width: 100%;
            }
            .esg-topimage {
              background-position: center;
            }
            .esg-frame1261158216 {
              flex-direction: column-reverse;
            }
            .esg-frame1261158199 {
              width: 100%;
            }
            .esg-frame1261158200 {
              width: 100%;
            }
            .esg-frame1261158218 {
              flex-direction: column-reverse;
            }
            .esg-frame1261158202 {
              width: 100%;
            }
            .esg-frame1261158201 {
              width: 100%;
            }
            .esg-kodeti {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .esg-frame1261158212 {
              width: 100%;
              z-index: 5;
            }
            .esg-frame332 {
              width: 100%;
            }
            .esg-text65 {
              width: 100%;
            }
            .esg-vector1 {
              top: 450px;
            }
            .esg-contactusform {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .esg-formwindowstage3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default ESG

export async function getStaticProps(context) {
  try {
    const contextGg1zz8Prop = await esgSwiperResource({
      ...context?.params,
    })
    return {
      props: {
        contextGg1zz8Prop: contextGg1zz8Prop?.data?.[0],
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
