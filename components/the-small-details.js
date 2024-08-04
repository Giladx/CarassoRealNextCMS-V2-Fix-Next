import React, { useState } from 'react'

import PropTypes from 'prop-types'

const TheSmallDetails = (props) => {
  const [detailsisVisible1, setDetailsisVisible1] = useState(false)
  const [detailsisVisible2, setDetailsisVisible2] = useState(false)
  const [detailsisVisible3, setDetailsisVisible3] = useState(false)
  return (
    <>
      <div className="the-small-details-container">
        <div className="the-small-details-herourbanrenewal">
          <div className="the-small-details-container1">
            <img
              alt={props.vectorAlt}
              src={props.vectorSrc}
              className="the-small-details-vector"
            />
            <div className="the-small-details-leftcoloumn">
              <div className="the-small-details-content">
                <div className="the-small-details-frame144">
                  <img
                    alt={props.flagPennantAlt}
                    src={props.flagPennantSrc}
                    className="the-small-details-flag-pennant"
                  />
                  <span className="the-small-details-text">
                    <span>​​הערך המוסף שלנו</span>
                  </span>
                  <span className="the-small-details-text02">
                    <span>הידע והניסיון, המומחיות, והחשיבה החדשנית</span>
                  </span>
                  <div className="the-small-details-frame">
                    <div
                      onClick={() => setDetailsisVisible3(!detailsisVisible3)}
                      className="the-small-details-frame224"
                    >
                      <img
                        alt={props.caretDownAlt}
                        src={props.caretDownSrc}
                        className="the-small-details-caret-down"
                      />
                      <span className="the-small-details-text04">
                        <span>עוד פרטים</span>
                      </span>
                    </div>
                    {detailsisVisible3 && (
                      <div className="the-small-details-frame226">
                        <div className="the-small-details-frame125">
                          <span className="the-small-details-text06">
                            <span>
                              12 שנות פעילות בהן צברנו ידע וניסיון רב בתחום
                              ההתחדשות העירונית
                            </span>
                          </span>
                          <img
                            alt={props.arrow7StrokeAlt1}
                            src={props.arrow7StrokeSrc1}
                            className="the-small-details-arrow7-stroke"
                          />
                        </div>
                        <div className="the-small-details-frame128">
                          <span className="the-small-details-text08">
                            <span>מומחים בפרויקטים עירוניים מורכבים</span>
                          </span>
                          <img
                            alt={props.arrow7StrokeAlt2}
                            src={props.arrow7StrokeSrc2}
                            className="the-small-details-arrow7-stroke01"
                          />
                        </div>
                        <div className="the-small-details-frame129">
                          <span className="the-small-details-text10">
                            <span>גב פיננסי רחב ויציב</span>
                          </span>
                          <img
                            alt={props.arrow7StrokeAlt3}
                            src={props.arrow7StrokeSrc3}
                            className="the-small-details-arrow7-stroke02"
                          />
                        </div>
                        <div className="the-small-details-frame127">
                          <span className="the-small-details-text12">
                            <span>מערך שירות אישי</span>
                          </span>
                          <img
                            alt={props.arrow7StrokeAlt4}
                            src={props.arrow7StrokeSrc4}
                            className="the-small-details-arrow7-stroke03"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="the-small-details-frame145">
                  <img
                    alt={props.flagPennantAlt1}
                    src={props.flagPennantSrc1}
                    className="the-small-details-flag-pennant1"
                  />
                  <span className="the-small-details-text14">
                    <span>דואגים להכל</span>
                  </span>
                  <span className="the-small-details-text16">
                    <span>
                      מימון כל ההוצאות הנדרשות לקבלת שירותים מקצועיים הקשורים
                      לפרויקט
                    </span>
                  </span>
                  <div
                    onClick={() => setDetailsisVisible2(!detailsisVisible2)}
                    className="the-small-details-frame1"
                  >
                    <div className="the-small-details-frame2241">
                      <img
                        alt={props.caretDownAlt1}
                        src={props.caretDownSrc1}
                        className="the-small-details-caret-down1"
                      />
                      <span className="the-small-details-text18">
                        <span>עוד פרטים</span>
                      </span>
                    </div>
                    {detailsisVisible2 && (
                      <div className="the-small-details-frame2261">
                        <div className="the-small-details-frame1251">
                          <span className="the-small-details-text20">
                            <span>דמי שכירות מלאים לאורך כל הבנייה</span>
                          </span>
                          <img
                            alt={props.arrow7StrokeAlt5}
                            src={props.arrow7StrokeSrc5}
                            className="the-small-details-arrow7-stroke04"
                          />
                        </div>
                        <div className="the-small-details-frame1281">
                          <span className="the-small-details-text22">
                            <span>שירותי אריזה פינוי והובלות ללא עלות</span>
                          </span>
                          <img
                            alt={props.arrow7StrokeAlt6}
                            src={props.arrow7StrokeSrc6}
                            className="the-small-details-arrow7-stroke05"
                          />
                        </div>
                        <div className="the-small-details-frame1271">
                          <span className="the-small-details-text24">
                            <span>שירותי תיווך לאיתור דיור חלופי</span>
                          </span>
                          <img
                            alt={props.arrow7StrokeAlt7}
                            src={props.arrow7StrokeSrc7}
                            className="the-small-details-arrow7-stroke06"
                          />
                        </div>
                        <div className="the-small-details-frame1291">
                          <span className="the-small-details-text26">
                            <span>
                              ליווי צמוד ופתרונות מותאמים אישית של בעלי דירות
                              מבוגרים
                            </span>
                          </span>
                          <img
                            alt={props.arrow7StrokeAlt8}
                            src={props.arrow7StrokeSrc8}
                            className="the-small-details-arrow7-stroke07"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="the-small-details-frame146">
                  <img
                    alt={props.flagPennantAlt2}
                    src={props.flagPennantSrc2}
                    className="the-small-details-flag-pennant2"
                  />
                  <span className="the-small-details-text28">
                    <span>איתך בכל שלב</span>
                  </span>
                  <span className="the-small-details-text30">
                    <span>
                      נעמיד לרשותכם צוות שיהיה זמין לאורך כל הדרך ובכל שלב
                      בפרויקט
                    </span>
                  </span>
                  <div className="the-small-details-frame2">
                    <div
                      onClick={() => setDetailsisVisible1(!detailsisVisible1)}
                      className="the-small-details-frame2242"
                    >
                      <img
                        alt={props.caretDownAlt2}
                        src={props.caretDownSrc2}
                        className="the-small-details-caret-down2"
                      />
                      <span className="the-small-details-text32">
                        <span>עוד פרטים</span>
                      </span>
                    </div>
                    {detailsisVisible1 && (
                      <span className="the-small-details-text34">
                        <span className="the-small-details-text35">
                          אנחנו יודעים שפרויקט מורכב כזה דורש ליווי מסור לבעלי
                          הדירות ולדיירים ולכן נעמיד לרשותכם את הצוות הנדרש
                        </span>
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
                        <span>
                          מחתימת החוזה, דרך הבנייה ועד לטיפול בשינויים ובכל דבר
                          אחר שתצטרכו עם מסירת הדירה.
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="the-small-details-content1">
                <div className="the-small-details-container2">
                  <div className="the-small-details-frame1441">
                    <img
                      alt={props.flagPennantAlt}
                      src={props.flagPennantSrc}
                      className="the-small-details-flag-pennant3"
                    />
                    <span className="the-small-details-text40">
                      <span>​​הערך המוסף שלנו</span>
                    </span>
                    <span className="the-small-details-text42">
                      <span>הידע והניסיון, המומחיות, והחשיבה החדשנית</span>
                    </span>
                    <div className="the-small-details-frame3">
                      <div
                        onClick={() => setDetailsisVisible3(!detailsisVisible3)}
                        className="the-small-details-frame2243"
                      >
                        <img
                          alt={props.caretDownAlt}
                          src={props.caretDownSrc}
                          className="the-small-details-caret-down3"
                        />
                        <span className="the-small-details-text44">
                          <span>עוד פרטים</span>
                        </span>
                      </div>
                      {detailsisVisible3 && (
                        <div className="the-small-details-frame2262">
                          <div className="the-small-details-frame1252">
                            <span className="the-small-details-text46">
                              <span>
                                12 שנות פעילות בהן צברנו ידע וניסיון רב בתחום
                                ההתחדשות העירונית
                              </span>
                            </span>
                            <img
                              alt={props.arrow7StrokeAlt1}
                              src={props.arrow7StrokeSrc1}
                              className="the-small-details-arrow7-stroke08"
                            />
                          </div>
                          <div className="the-small-details-frame1282">
                            <span className="the-small-details-text48">
                              <span>מומחים בפרויקטים עירוניים מורכבים</span>
                            </span>
                            <img
                              alt={props.arrow7StrokeAlt2}
                              src={props.arrow7StrokeSrc2}
                              className="the-small-details-arrow7-stroke09"
                            />
                          </div>
                          <div className="the-small-details-frame1292">
                            <span className="the-small-details-text50">
                              <span>גב פיננסי רחב ויציב</span>
                            </span>
                            <img
                              alt={props.arrow7StrokeAlt3}
                              src={props.arrow7StrokeSrc3}
                              className="the-small-details-arrow7-stroke10"
                            />
                          </div>
                          <div className="the-small-details-frame1272">
                            <span className="the-small-details-text52">
                              <span>מערך שירות אישי</span>
                            </span>
                            <img
                              alt={props.arrow7StrokeAlt4}
                              src={props.arrow7StrokeSrc4}
                              className="the-small-details-arrow7-stroke11"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="the-small-details-frame147">
                    <button className="the-small-details-carassobutton">
                      <div className="the-small-details-frame123">
                        <img
                          alt={props.arrow7StrokeAlt}
                          src={props.arrow7StrokeSrc}
                          className="the-small-details-arrow7-stroke12"
                        />
                        <span className="the-small-details-text54">
                          <span>אשמח שתחדשו גם את הבניין שלי</span>
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="the-small-details-container3">
                  <div className="the-small-details-frame1461">
                    <img
                      alt={props.flagPennantAlt2}
                      src={props.flagPennantSrc2}
                      className="the-small-details-flag-pennant4"
                    />
                    <span className="the-small-details-text56">
                      <span>איתך בכל שלב</span>
                    </span>
                    <span className="the-small-details-text58">
                      <span>
                        נעמיד לרשותכם צוות שיהיה זמין לאורך כל הדרך ובכל שלב
                        בפרויקט
                      </span>
                    </span>
                    <div className="the-small-details-frame4">
                      <div
                        onClick={() => setDetailsisVisible1(!detailsisVisible1)}
                        className="the-small-details-frame2244"
                      >
                        <img
                          alt={props.caretDownAlt2}
                          src={props.caretDownSrc2}
                          className="the-small-details-caret-down4"
                        />
                        <span className="the-small-details-text60">
                          <span>עוד פרטים</span>
                        </span>
                      </div>
                      {detailsisVisible1 && (
                        <span className="the-small-details-text62">
                          <span className="the-small-details-text63">
                            אנחנו יודעים שפרויקט מורכב כזה דורש ליווי מסור לבעלי
                            הדירות ולדיירים ולכן נעמיד לרשותכם את הצוות הנדרש
                          </span>
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
                          <span>
                            מחתימת החוזה, דרך הבנייה ועד לטיפול בשינויים ובכל
                            דבר אחר שתצטרכו עם מסירת הדירה.
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="the-small-details-frame1451">
                    <img
                      alt={props.flagPennantAlt1}
                      src={props.flagPennantSrc1}
                      className="the-small-details-flag-pennant5"
                    />
                    <span className="the-small-details-text68">
                      <span>דואגים להכל</span>
                    </span>
                    <span className="the-small-details-text70">
                      <span>
                        מימון כל ההוצאות הנדרשות לקבלת שירותים מקצועיים הקשורים
                        לפרויקט
                      </span>
                    </span>
                    <div
                      onClick={() => setDetailsisVisible2(!detailsisVisible2)}
                      className="the-small-details-frame5"
                    >
                      <div className="the-small-details-frame2245">
                        <img
                          alt={props.caretDownAlt1}
                          src={props.caretDownSrc1}
                          className="the-small-details-caret-down5"
                        />
                        <span className="the-small-details-text72">
                          <span>עוד פרטים</span>
                        </span>
                      </div>
                      {detailsisVisible2 && (
                        <div className="the-small-details-frame2263">
                          <div className="the-small-details-frame1253">
                            <span className="the-small-details-text74">
                              <span>דמי שכירות מלאים לאורך כל הבנייה</span>
                            </span>
                            <img
                              alt={props.arrow7StrokeAlt5}
                              src={props.arrow7StrokeSrc5}
                              className="the-small-details-arrow7-stroke13"
                            />
                          </div>
                          <div className="the-small-details-frame1283">
                            <span className="the-small-details-text76">
                              <span>שירותי אריזה פינוי והובלות ללא עלות</span>
                            </span>
                            <img
                              alt={props.arrow7StrokeAlt6}
                              src={props.arrow7StrokeSrc6}
                              className="the-small-details-arrow7-stroke14"
                            />
                          </div>
                          <div className="the-small-details-frame1273">
                            <span className="the-small-details-text78">
                              <span>שירותי תיווך לאיתור דיור חלופי</span>
                            </span>
                            <img
                              alt={props.arrow7StrokeAlt7}
                              src={props.arrow7StrokeSrc7}
                              className="the-small-details-arrow7-stroke15"
                            />
                          </div>
                          <div className="the-small-details-frame1293">
                            <span className="the-small-details-text80">
                              <span>
                                ליווי צמוד ופתרונות מותאמים אישית של בעלי דירות
                                מבוגרים
                              </span>
                            </span>
                            <img
                              alt={props.arrow7StrokeAlt8}
                              src={props.arrow7StrokeSrc8}
                              className="the-small-details-arrow7-stroke16"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="the-small-details-rightcoloumn">
              <span className="the-small-details-text82">
                <span className="the-small-details-text83">
                  הפרטים הקטנים
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="the-small-details-text84">והחשובים</span>
              </span>
              <button className="the-small-details-carassobutton1">
                <div className="the-small-details-frame1231">
                  <img
                    alt={props.arrow7StrokeAlt}
                    src={props.arrow7StrokeSrc}
                    className="the-small-details-arrow7-stroke17"
                  />
                  <span className="the-small-details-text85">
                    <span>אשמח שתחדשו גם את הבניין שלי</span>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .the-small-details-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
            background-color: #ecf1ef;
          }
          .the-small-details-herourbanrenewal {
            gap: 50px;
            width: 1440px;
            height: auto;
            display: flex;
            padding: 70px 0;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(236, 241, 239, 1);
          }
          .the-small-details-container1 {
            display: flex;
            padding: 0 90px;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .the-small-details-vector {
            top: -13px;
            left: 1078px;
            width: 544px;
            height: 408px;
            position: absolute;
          }
          .the-small-details-leftcoloumn {
            gap: 20px;
            display: flex;
            z-index: 1;
            align-items: flex-start;
          }
          .the-small-details-content {
            gap: 60px;
            display: flex;
            align-items: flex-start;
          }
          .the-small-details-frame144 {
            gap: 28px;
            width: 273.3333435058594px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .the-small-details-flag-pennant {
            width: 64px;
            height: 64px;
          }
          .the-small-details-text {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-text02 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 18px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: bold;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-frame {
            gap: 16px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .the-small-details-frame224 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .the-small-details-caret-down {
            width: 12px;
            height: 12px;
          }
          .the-small-details-text04 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-frame226 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .the-small-details-frame125 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .the-small-details-text06 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-arrow7-stroke {
            width: 8px;
            height: 7px;
          }
          .the-small-details-frame128 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .the-small-details-text08 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-arrow7-stroke01 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-frame129 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .the-small-details-text10 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-arrow7-stroke02 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-frame127 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .the-small-details-text12 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-arrow7-stroke03 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-frame145 {
            gap: 28px;
            width: 273.33331298828125px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .the-small-details-flag-pennant1 {
            width: 64px;
            height: 64px;
          }
          .the-small-details-text14 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-text16 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 18px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: bold;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-frame1 {
            gap: 16px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .the-small-details-frame2241 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .the-small-details-caret-down1 {
            width: 12px;
            height: 12px;
          }
          .the-small-details-text18 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-frame2261 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .the-small-details-frame1251 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .the-small-details-text20 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-arrow7-stroke04 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-frame1281 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .the-small-details-text22 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-arrow7-stroke05 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-frame1271 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .the-small-details-text24 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-arrow7-stroke06 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-frame1291 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .the-small-details-text26 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-arrow7-stroke07 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-frame146 {
            gap: 28px;
            width: 273.33331298828125px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .the-small-details-flag-pennant2 {
            width: 64px;
            height: 64px;
          }
          .the-small-details-text28 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-text30 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 18px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: bold;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-frame2 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .the-small-details-frame2242 {
            gap: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .the-small-details-caret-down2 {
            width: 12px;
            height: 12px;
          }
          .the-small-details-text32 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-text34 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 16px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-text35 {
            font-weight: 300;
          }
          .the-small-details-content1 {
            gap: 60px;
            display: none;
            align-items: flex-start;
          }
          .the-small-details-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .the-small-details-frame1441 {
            gap: 28px;
            width: 273.33331298828125px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .the-small-details-flag-pennant3 {
            width: 64px;
            height: 64px;
          }
          .the-small-details-text40 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-text42 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: bold;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-frame3 {
            gap: 16px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .the-small-details-frame2243 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .the-small-details-caret-down3 {
            width: 12px;
            height: 12px;
          }
          .the-small-details-text44 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-frame2262 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .the-small-details-frame1252 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .the-small-details-text46 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-arrow7-stroke08 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-frame1282 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .the-small-details-text48 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-arrow7-stroke09 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-frame1292 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .the-small-details-text50 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-arrow7-stroke10 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-frame1272 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .the-small-details-text52 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-arrow7-stroke11 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-frame147 {
            gap: 28px;
            width: 273.3333435058594px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .the-small-details-carassobutton {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 0 0 12px;
            align-items: flex-start;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 0 0 1px;
          }
          .the-small-details-frame123 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .the-small-details-arrow7-stroke12 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-text54 {
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
          .the-small-details-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .the-small-details-frame1461 {
            gap: 28px;
            width: 273.33331298828125px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .the-small-details-flag-pennant4 {
            width: 64px;
            height: 64px;
          }
          .the-small-details-text56 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-text58 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: bold;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-frame4 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .the-small-details-frame2244 {
            gap: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .the-small-details-caret-down4 {
            width: 12px;
            height: 12px;
          }
          .the-small-details-text60 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-text62 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-text63 {
            font-weight: 300;
          }
          .the-small-details-frame1451 {
            gap: 28px;
            width: 273.33331298828125px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .the-small-details-flag-pennant5 {
            width: 64px;
            height: 64px;
          }
          .the-small-details-text68 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-text70 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: bold;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-frame5 {
            gap: 16px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .the-small-details-frame2245 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .the-small-details-caret-down5 {
            width: 12px;
            height: 12px;
          }
          .the-small-details-text72 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-frame2263 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .the-small-details-frame1253 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .the-small-details-text74 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-arrow7-stroke13 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-frame1283 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .the-small-details-text76 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-arrow7-stroke14 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-frame1273 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .the-small-details-text78 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-arrow7-stroke15 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-frame1293 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .the-small-details-text80 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-arrow7-stroke16 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-rightcoloumn {
            gap: 10px;
            display: flex;
            z-index: 2;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .the-small-details-text82 {
            color: var(--dl-color-carasso-primaryblack);
            width: 224px;
            height: auto;
            font-size: 32px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-small-details-carassobutton1 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 0 0 12px;
            align-items: flex-start;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 0 0 1px;
          }
          .the-small-details-frame1231 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .the-small-details-arrow7-stroke17 {
            width: 8px;
            height: 7px;
          }
          .the-small-details-text85 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: bold;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          @media (max-width: 1440px) {
            .the-small-details-herourbanrenewal {
              width: 100%;
              overflow: hidden;
            }
            .the-small-details-container1 {
              width: 100%;
            }
          }
          @media (max-width: 1200px) {
            .the-small-details-herourbanrenewal {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .the-small-details-container1 {
              gap: 20px;
              padding-left: 30px;
              padding-right: 30px;
            }
            .the-small-details-content {
              gap: 30px;
            }
            .the-small-details-text02 {
              font-weight: bold;
            }
            .the-small-details-text16 {
              font-weight: bold;
            }
            .the-small-details-text30 {
              font-weight: bold;
            }
            .the-small-details-content1 {
              display: none;
            }
            .the-small-details-text42 {
              font-weight: bold;
            }
            .the-small-details-text58 {
              font-weight: bold;
            }
            .the-small-details-text70 {
              font-weight: bold;
            }
          }
          @media (max-width: 991px) {
            .the-small-details-herourbanrenewal {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .the-small-details-container1 {
              align-self: center;
              align-items: center;
              flex-direction: column-reverse;
              justify-content: center;
            }
            .the-small-details-leftcoloumn {
              width: 100%;
              align-self: flex-end;
              flex-direction: row-reverse;
            }
            .the-small-details-content {
              display: none;
            }
            .the-small-details-content1 {
              width: 100%;
              display: flex;
              padding: var(--dl-space-space-fourunits);
              flex-direction: column-reverse;
            }
            .the-small-details-container2 {
              width: 100%;
              height: 266px;
              align-items: flex-start;
              flex-direction: row-reverse;
            }
            .the-small-details-frame1441 {
              width: 50%;
              height: 266px;
              padding: var(--dl-space-space-twounits);
            }
            .the-small-details-frame147 {
              width: 50%;
              height: 266px;
              padding: var(--dl-space-space-twounits);
              align-self: flex-end;
              justify-content: flex-end;
            }
            .the-small-details-text54 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .the-small-details-container3 {
              width: auto;
              height: 266px;
              align-self: flex-end;
              flex-direction: row-reverse;
            }
            .the-small-details-frame1461 {
              width: 50%;
              height: 266px;
              padding: var(--dl-space-space-twounits);
            }
            .the-small-details-frame1451 {
              width: 50%;
              height: 266px;
              padding: var(--dl-space-space-twounits);
            }
            .the-small-details-rightcoloumn {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .the-small-details-text82 {
              color: var(--dl-color-carasso-primaryblack);
              width: 100%;
              font-size: 32px;
              text-align: right;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 110%;
              text-decoration: none;
            }
            .the-small-details-text83 {
              font-weight: 300;
            }
            .the-small-details-text84 {
              font-family: Ploni ML v2 AAA Bold;
              font-weight: 700;
            }
            .the-small-details-carassobutton1 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .the-small-details-content1 {
              display: flex;
            }
            .the-small-details-container2 {
              gap: 0;
              height: auto;
              flex-direction: row-reverse;
            }
            .the-small-details-frame1441 {
              height: auto;
              justify-content: flex-start;
            }
            .the-small-details-frame147 {
              width: 50%;
              height: auto;
              padding-top: var(--dl-space-space-twounits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .the-small-details-container3 {
              height: auto;
              align-items: flex-start;
            }
            .the-small-details-frame1461 {
              height: auto;
              justify-content: flex-start;
            }
            .the-small-details-frame1451 {
              height: auto;
              justify-content: flex-start;
            }
            .the-small-details-text82 {
              font-size: 36px;
              text-align: right;
            }
          }
          @media (max-width: 479px) {
            .the-small-details-content1 {
              padding: 0px;
            }
            .the-small-details-container2 {
              flex-direction: column;
            }
            .the-small-details-frame1441 {
              width: 100%;
              padding-right: 0px;
            }
            .the-small-details-text40 {
              font-family: Ploni ML v2 AAA Light;
            }
            .the-small-details-text42 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .the-small-details-frame147 {
              width: 100%;
            }
            .the-small-details-container3 {
              flex-direction: column;
            }
            .the-small-details-frame1461 {
              width: 100%;
              padding-right: 0px;
            }
            .the-small-details-text56 {
              font-family: Ploni ML v2 AAA Light;
            }
            .the-small-details-text58 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .the-small-details-frame1451 {
              width: 100%;
              padding-right: 0px;
            }
            .the-small-details-text68 {
              font-family: Ploni ML v2 AAA Light;
            }
            .the-small-details-text70 {
              font-family: Ploni ML v2 AAA Bold;
            }
            .the-small-details-text82 {
              color: var(--dl-color-carasso-primaryblack);
              font-size: 32px;
              align-self: center;
              font-family: Ploni ML v2 AAA;
              font-weight: 300;
              line-height: 110%;
              text-decoration: none;
            }
            .the-small-details-text83 {
              font-weight: 300;
            }
            .the-small-details-text84 {
              font-family: Ploni ML v2 AAA Bold;
              font-weight: 700;
            }
          }
        `}
      </style>
    </>
  )
}

TheSmallDetails.defaultProps = {
  flagPennantAlt1: 'FlagPennant5030',
  flagPennantSrc: '/external/flagpennant5030-xo88.svg',
  arrow7StrokeAlt7: 'Arrow7Stroke5440',
  arrow7StrokeSrc5: '/external/arrow7stroke5440-fgxh.svg',
  arrow7StrokeSrc: '/external/arrow7stroke5030-rb9.svg',
  arrow7StrokeSrc2: '/external/arrow7stroke5030-1fkv.svg',
  caretDownSrc1: '/external/caretdown5030-99z.svg',
  caretDownAlt: 'CaretDown5030',
  arrow7StrokeSrc3: '/external/arrow7stroke5030-d4ds.svg',
  arrow7StrokeAlt6: 'Arrow7Stroke5440',
  arrow7StrokeSrc8: '/external/arrow7stroke5440-a4lh.svg',
  caretDownSrc2: '/external/caretdown5030-t6z9.svg',
  arrow7StrokeSrc1: '/external/arrow7stroke5030-irm.svg',
  arrow7StrokeSrc6: '/external/arrow7stroke5440-iyn.svg',
  arrow7StrokeSrc7: '/external/arrow7stroke5440-0apf.svg',
  arrow7StrokeAlt2: 'Arrow7Stroke5030',
  arrow7StrokeAlt4: 'Arrow7Stroke5030',
  arrow7StrokeAlt5: 'Arrow7Stroke5440',
  flagPennantAlt2: 'FlagPennant5030',
  arrow7StrokeAlt1: 'Arrow7Stroke5030',
  arrow7StrokeAlt: 'Arrow7Stroke5030',
  flagPennantAlt: 'FlagPennant5030',
  vectorAlt: 'Vector5030',
  arrow7StrokeAlt8: 'Arrow7Stroke5440',
  arrow7StrokeAlt3: 'Arrow7Stroke5030',
  flagPennantSrc1: '/external/flagpennant5030-hksf.svg',
  arrow7StrokeSrc4: '/external/arrow7stroke5030-0lnq.svg',
  caretDownAlt2: 'CaretDown5030',
  flagPennantSrc2: '/external/flagpennant5030-45fl.svg',
  vectorSrc: '/external/vector5030-uk5.svg',
  caretDownSrc: '/external/caretdown5030-fakf.svg',
  caretDownAlt1: 'CaretDown5030',
}

TheSmallDetails.propTypes = {
  flagPennantAlt1: PropTypes.string,
  flagPennantSrc: PropTypes.string,
  arrow7StrokeAlt7: PropTypes.string,
  arrow7StrokeSrc5: PropTypes.string,
  arrow7StrokeSrc: PropTypes.string,
  arrow7StrokeSrc2: PropTypes.string,
  caretDownSrc1: PropTypes.string,
  caretDownAlt: PropTypes.string,
  arrow7StrokeSrc3: PropTypes.string,
  arrow7StrokeAlt6: PropTypes.string,
  arrow7StrokeSrc8: PropTypes.string,
  caretDownSrc2: PropTypes.string,
  arrow7StrokeSrc1: PropTypes.string,
  arrow7StrokeSrc6: PropTypes.string,
  arrow7StrokeSrc7: PropTypes.string,
  arrow7StrokeAlt2: PropTypes.string,
  arrow7StrokeAlt4: PropTypes.string,
  arrow7StrokeAlt5: PropTypes.string,
  flagPennantAlt2: PropTypes.string,
  arrow7StrokeAlt1: PropTypes.string,
  arrow7StrokeAlt: PropTypes.string,
  flagPennantAlt: PropTypes.string,
  vectorAlt: PropTypes.string,
  arrow7StrokeAlt8: PropTypes.string,
  arrow7StrokeAlt3: PropTypes.string,
  flagPennantSrc1: PropTypes.string,
  arrow7StrokeSrc4: PropTypes.string,
  caretDownAlt2: PropTypes.string,
  flagPennantSrc2: PropTypes.string,
  vectorSrc: PropTypes.string,
  caretDownSrc: PropTypes.string,
  caretDownAlt1: PropTypes.string,
}

export default TheSmallDetails
