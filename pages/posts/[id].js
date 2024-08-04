import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import postsPageInitialPropsTqLfResource from '../../resources/posts-page-initial-props-tq_lf'
import postsPageInitialPathsTqUResource from '../../resources/posts-page-initial-paths-tq_-u'

const Posts = (props) => {
  return (
    <>
      <div className="posts-container">
        <Head>
          <title>Posts - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Posts - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(PostsEntity) => (
            <>
              <div className="posts-blogheadings">
                <div className="posts-frame18">
                  <div className="posts-frame10">
                    <span className="posts-text">
                      <span>קטגוריה 1</span>
                    </span>
                  </div>
                  <span className="posts-text02">
                    איך נראת דירה לאנשים שאוהבים לארח ולבשל לכל המשפחה
                  </span>
                  <div className="posts-frame94">
                    <div className="posts-frame35">
                      <span className="posts-text03">
                        <span>רחב</span>
                      </span>
                    </div>
                    <div className="posts-frame36">
                      <span className="posts-text05">
                        <span>מתכוונן</span>
                      </span>
                    </div>
                    <div className="posts-frame37">
                      <span className="posts-text07">
                        <span>מטבח</span>
                      </span>
                    </div>
                    <div className="posts-frame38">
                      <span className="posts-text09">
                        <span>קהילתי</span>
                      </span>
                    </div>
                    <div className="posts-frame39">
                      <span className="posts-text11">
                        <span>קולינרי</span>
                      </span>
                    </div>
                    <div className="posts-frame40">
                      <span className="posts-text13">
                        <span>גוש דן</span>
                      </span>
                    </div>
                    <div className="posts-frame41">
                      <span className="posts-text15">
                        <span>דירה גדולה</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="posts-frame19">
                  <div className="posts-writer">
                    <div className="posts-frame292">
                      <span className="posts-text17">
                        <span>קרסו · צוות התכנון</span>
                      </span>
                      <span className="posts-text19">
                        <span>
                          18 בינואר, 2023 · 3 דק׳
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
                    </div>
                    <div className="posts-frame291">
                      <img
                        alt="logo4870"
                        src="/external/logo4870-28k9.svg"
                        className="posts-logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src={PostsEntity?.featuredImage?.url}
                className="posts-image"
              />
              <div className="posts-blogcontent">
                <div className="posts-layoutboxed">
                  <span className="posts-text22">
                    {PostsEntity?.firstParagraph}
                  </span>
                  <span className="posts-text23">
                    {PostsEntity?.firstParagraph2}
                  </span>
                  <img
                    alt="image54870"
                    src={PostsEntity?.sectionImage?.url}
                    className="posts-image5"
                  />
                  <span className="posts-text24">
                    {PostsEntity?.sectionImage?.name}
                  </span>
                  <div className="posts-container1">
                    <img
                      alt="Arrow7Stroke4870"
                      src="/external/arrow7stroke4870-8ck.svg"
                      className="posts-arrow7-stroke"
                    />
                    <span className="posts-text25">
                      רוצה לדעת עוד על פרויקט אומאמי? לחצו כאן עכשיו
                    </span>
                  </div>
                </div>
                <span className="posts-text26">
                  {PostsEntity?.firstParagraph3}
                </span>
                <img
                  alt="image54870"
                  src={PostsEntity?.sectionImage2?.url}
                  className="posts-image51"
                />
                <span className="posts-text27">
                  {PostsEntity?.sectionImage2?.name}
                </span>
                <span className="posts-text28">
                  על הדירה החכמה כבר שמעתם? היא מתוכננת ביעילות ובקפידה, כוללת
                  פריטי נגרות שתוכננו עבורה במיוחד ונהנית מחללי פנאי ציבוריים
                  שמתפקדים כשלוחה שלה. איפה היא נמצאת? בפרויקט אומאמי שמשיקה
                  קרסו נדל&quot;ן באבן גבירול, הראשון בישראל שמציע דירות חכמות
                  ויעילות למכירה
                </span>
                <span className="posts-text29">
                  מי מתכנן דירות על פי מספר חדרים? את החשיבה המסורתית והשמרנית
                  הזאת מחליפה גישה חדשה שעומדת בבסיס תכנונן של הדירות בפרויקט
                  החדש ופורץ הדרך של קרסו נדל&quot;ן, פרויקט ME-CRO באבן גבירול.
                  החודש משיקה החברה את הפרויקט, שנולד כתגובה לשינויים בתפיסת
                  החיים והמגורים האופייניים לתקופתנו, בצורך בחשיבה אקלימית
                  ומקיימת ובחשיבה שיוצאת מהקופסה.את הבניין תכננו &quot;הפלטפורמה
                  העירונית&quot; ואת הדירות והרהיטים תכננו אדריכלים רוני אביצור
                  ועופר רוסמן מסטודיו XS, משרד אדריכלים המתמחה בתכנון קומפקטי.
                  רוסמן ואביצור הקפידו על תכנון נכון ואיכותי, שיאפשר להם לנצל כל
                  סנטימטר באופן היעיל ביותר ולכן התבססו על מגוון השימושים שייעשה
                  בדירות, ולא על מספר החדרים.
                </span>
                <div className="posts-container2">
                  <img
                    alt="Arrow7Stroke4870"
                    src="/external/arrow7stroke4870-8ck.svg"
                    className="posts-arrow7-stroke1"
                  />
                  <span className="posts-text30">
                    רוצה לדעת עוד על פרויקט אומאמי? לחצו כאן עכשיו
                  </span>
                </div>
                <img
                  alt="image54870"
                  src={PostsEntity?.sectionImage3?.url}
                  className="posts-image52"
                />
                <span className="posts-text31">
                  {PostsEntity?.sectionImage3?.name}
                </span>
                <img
                  alt="image54870"
                  src={PostsEntity?.sectionImage4?.url}
                  className="posts-image53"
                />
                <span className="posts-text32">
                  {PostsEntity?.sectionImage4?.name}
                </span>
                <span className="posts-text33">
                  מי מתכנן דירות על פי מספר חדרים? את החשיבה המסורתית והשמרנית
                  הזאת מחליפה גישה חדשה שעומדת בבסיס תכנונן של הדירות בפרויקט
                  החדש ופורץ הדרך של קרסו נדל&quot;ן, פרויקט ME-CRO באבן גבירול.
                  החודש משיקה החברה את הפרויקט, שנולד כתגובה לשינויים בתפיסת
                  החיים והמגורים האופייניים לתקופתנו, בצורך בחשיבה אקלימית
                  ומקיימת ובחשיבה שיוצאת מהקופסה.את הבניין תכננו &quot;הפלטפורמה
                  העירונית&quot; ואת הדירות והרהיטים תכננו אדריכלים רוני אביצור
                  ועופר רוסמן מסטודיו XS, משרד אדריכלים המתמחה בתכנון קומפקטי.
                  רוסמן ואביצור הקפידו על תכנון נכון ואיכותי, שיאפשר להם לנצל כל
                  סנטימטר באופן היעיל ביותר ולכן התבססו על מגוון השימושים שייעשה
                  בדירות, ולא על מספר החדרים.
                </span>
                <img
                  alt="image54870"
                  src={PostsEntity?.sectionImage5?.url}
                  className="posts-image54"
                />
                <span className="posts-text34">
                  {PostsEntity?.sectionImage5?.name}
                </span>
                <div className="posts-container3">
                  <div className="posts-frame124">
                    <div className="posts-frame123">
                      <img
                        alt="InstagramLogo4870"
                        src="/external/instagramlogo4870-wi.svg"
                        className="posts-instagram-logo"
                      />
                      <img
                        alt="LinkedinLogo4870"
                        src="/external/linkedinlogo4870-s53p.svg"
                        className="posts-linkedin-logo"
                      />
                      <img
                        alt="FacebookLogo4870"
                        src="/external/facebooklogo4870-xm8u.svg"
                        className="posts-facebook-logo"
                      />
                    </div>
                    <span className="posts-text35">
                      <span>לשיתוף הכתבה</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="posts-frame127">
                <span className="posts-text37">
                  <span>עוד כתבות שיעניינו אותך</span>
                </span>
                <div className="posts-frame284">
                  <div className="posts-frame281">
                    <div className="posts-frame9"></div>
                    <div className="posts-frame280">
                      <span className="posts-text39">
                        <span>18 לינואר, 2023</span>
                      </span>
                      <span className="posts-text41">
                        <span>עיצוב אדמתי לחלל הבית</span>
                      </span>
                      <span className="posts-text43">
                        <span>
                          בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח,
                          תכנון והקמה של מגוון פרויקטים מתקדמים
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="posts-frame2801">
                    <div className="posts-frame91"></div>
                    <div className="posts-frame2802">
                      <span className="posts-text45">
                        <span>18 לינואר, 2023</span>
                      </span>
                      <span className="posts-text47">
                        <span>איך נראת דירה לאנשים שאוהבים לארח</span>
                      </span>
                      <span className="posts-text49">
                        <span>
                          בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח,
                          תכנון והקמה של מגוון פרויקטים מתקדמים
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="posts-frame282">
                    <div className="posts-frame2811"></div>
                    <div className="posts-frame2803">
                      <span className="posts-text51">
                        <span>18 לינואר, 2023</span>
                      </span>
                      <span className="posts-text53">
                        <span>איך נראת דירה לאנשים שאוהבים לארח</span>
                      </span>
                      <span className="posts-text55">
                        <span>
                          בשנים האחרונות משקיעה החברה את מיטב המשאבים בפיתוח,
                          תכנון והקמה של מגוון פרויקטים מתקדמים
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="posts-carassobutton button">
                  <button className="posts-buttontextarrow">
                    <img
                      alt="Arrow7Stroke4870"
                      src="/external/arrow7stroke4870-dx48.svg"
                      className="posts-arrow7-stroke2"
                    />
                    <span className="posts-text57">
                      <span>בחזרה לחדשות ועידכונים</span>
                    </span>
                  </button>
                </button>
              </div>
            </>
          )}
          initialData={props.postsEntity}
          persistDataDuringLoading={true}
          key={props?.postsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .posts-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .posts-blogheadings {
            gap: 60px;
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .posts-frame18 {
            gap: 40px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .posts-frame10 {
            gap: 10px;
            display: flex;
            align-items: center;
            border-radius: 99px;
            justify-content: center;
          }
          .posts-text {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-text02 {
            color: var(--dl-color-carasso-primaryblack);
            width: 964px;
            height: auto;
            font-size: 64px;
            font-style: Medium;
            text-align: center;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 500;
            line-height: 120%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-frame94 {
            gap: 10px;
            display: flex;
            flex-wrap: wrap;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .posts-frame35 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-tagnotselected);
          }
          .posts-text03 {
            color: var(--dl-color-carasso-tagselected);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-frame36 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-tagnotselected);
          }
          .posts-text05 {
            color: var(--dl-color-carasso-tagselected);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-frame37 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-tagnotselected);
          }
          .posts-text07 {
            color: var(--dl-color-carasso-tagselected);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-frame38 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-tagnotselected);
          }
          .posts-text09 {
            color: var(--dl-color-carasso-tagselected);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-frame39 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-tagnotselected);
          }
          .posts-text11 {
            color: var(--dl-color-carasso-tagselected);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-frame40 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-tagnotselected);
          }
          .posts-text13 {
            color: var(--dl-color-carasso-tagselected);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-frame41 {
            gap: 10px;
            display: flex;
            padding: 7px;
            overflow: hidden;
            align-items: center;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-carasso-tagnotselected);
          }
          .posts-text15 {
            color: var(--dl-color-carasso-tagselected);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 400;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-frame19 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            margin-bottom: 60px;
            justify-content: center;
          }
          .posts-writer {
            gap: 22px;
            display: flex;
            align-items: center;
          }
          .posts-frame292 {
            gap: 16px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts-text17 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-text19 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            direction: rtl;
            font-size: 14px;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-frame291 {
            width: 60px;
            height: 60px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 99px;
            background-color: var(--dl-color-carasso-primaryblack);
          }
          .posts-logo {
            top: 21px;
            left: 10px;
            width: 40px;
            height: 20px;
            position: absolute;
          }
          .posts-image {
            width: 1260px;
            height: 600px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
            margin-bottom: 100px;
          }
          .posts-blogcontent {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .posts-layoutboxed {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts-text22 {
            color: rgba(0, 0, 0, 1);
            width: 700px;
            height: auto;
            font-size: 24px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-bottom: 60px;
            flex-direction: rtl;
            text-decoration: none;
          }
          .posts-text23 {
            color: rgba(0, 0, 0, 1);
            width: 700px;
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .posts-image5 {
            width: 700px;
            height: 500px;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .posts-text24 {
            color: var(--dl-color-carasso-darkergray);
            width: 700px;
            height: auto;
            direction: rtl;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .posts-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .posts-arrow7-stroke {
            width: 12px;
            height: 10px;
          }
          .posts-text25 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            align-self: flex-end;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 600;
            line-height: 140%;
            margin-left: var(--dl-space-space-halfunit);
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-text26 {
            color: rgba(0, 0, 0, 1);
            width: 700px;
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .posts-image51 {
            width: 700px;
            height: 500px;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .posts-text27 {
            color: var(--dl-color-carasso-darkergray);
            width: 700px;
            height: auto;
            direction: rtl;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .posts-text28 {
            color: rgba(0, 0, 0, 1);
            width: 700px;
            height: auto;
            font-size: 24px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-bottom: 60px;
            flex-direction: rtl;
            text-decoration: none;
          }
          .posts-text29 {
            color: rgba(0, 0, 0, 1);
            width: 700px;
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .posts-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .posts-arrow7-stroke1 {
            width: 12px;
            height: 10px;
          }
          .posts-text30 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            align-self: flex-end;
            text-align: right;
            font-family: 'Ploni ML v2 AAA D-Bold';
            font-weight: 600;
            line-height: 140%;
            margin-left: var(--dl-space-space-halfunit);
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-image52 {
            width: 700px;
            height: 500px;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .posts-text31 {
            color: var(--dl-color-carasso-darkergray);
            width: 700px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .posts-image53 {
            width: 700px;
            height: 500px;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .posts-text32 {
            color: var(--dl-color-carasso-darkergray);
            width: 700px;
            height: auto;
            direction: rtl;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .posts-text33 {
            color: rgba(0, 0, 0, 1);
            width: 700px;
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Light';
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .posts-image54 {
            width: 700px;
            height: 500px;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .posts-text34 {
            color: var(--dl-color-carasso-darkergray);
            width: 700px;
            height: auto;
            direction: rtl;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .posts-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .posts-frame124 {
            gap: 24px;
            width: auto;
            height: auto;
            display: flex;
            padding: 16px 20px;
            align-items: center;
            border-radius: 15px;
            justify-content: flex-end;
          }
          .posts-frame123 {
            gap: 12px;
            display: flex;
            align-items: flex-start;
          }
          .posts-instagram-logo {
            width: 28px;
            height: 28px;
          }
          .posts-linkedin-logo {
            width: 28px;
            height: 28px;
          }
          .posts-facebook-logo {
            width: 28px;
            height: 28px;
          }
          .posts-text35 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-frame127 {
            gap: 60px;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .posts-text37 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 50px;
            align-self: stretch;
            font-style: Medium;
            text-align: center;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 500;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-frame284 {
            gap: 30px;
            width: 1260px;
            height: 417px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .posts-frame281 {
            gap: 24px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts-frame9 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.07000000029802322);
            align-items: flex-start;
            border-radius: 20px;
            background-size: cover;
            justify-content: flex-end;
            background-image: 372c76c8-ec3c-4b70-bf31-4b90538efed9;
          }
          .posts-frame280 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts-text39 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-text41 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 24px;
            align-self: stretch;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-text43 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            direction: rtl;
            font-size: 18px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-frame2801 {
            gap: 24px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts-frame91 {
            gap: 10px;
            display: flex;
            padding: 30px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.07000000029802322);
            align-items: flex-end;
            border-radius: 20px;
            background-size: cover;
            background-image: 7f255f89-3dba-417d-90b3-2aaf3a25223f;
          }
          .posts-frame2802 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts-text45 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-text47 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 24px;
            align-self: stretch;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-text49 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            direction: rtl;
            font-size: 18px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-frame282 {
            gap: 24px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts-frame2811 {
            gap: 10px;
            display: flex;
            padding: 10px;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.07000000029802322);
            align-items: flex-start;
            border-radius: 20px;
            background-size: cover;
            justify-content: flex-end;
            background-image: 22fb5c26-c10a-48eb-94e0-44867e6f7d88;
          }
          .posts-frame2803 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .posts-text51 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            direction: rtl;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-text53 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 24px;
            align-self: stretch;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-text55 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            direction: rtl;
            font-size: 18px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: 'PloniMLv2AAA-Regular';
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .posts-carassobutton {
            gap: 12px;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 0 0 1px;
            flex-direction: column;
            justify-content: center;
          }
          .posts-buttontextarrow {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .posts-arrow7-stroke2 {
            width: 12px;
            height: 10px;
          }
          .posts-text57 {
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
          @media (max-width: 1200px) {
            .posts-image {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .posts-frame18 {
              width: 100%;
            }
            .posts-text02 {
              width: auto;
              font-family: Ploni ML v2 AAA Medium;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .posts-frame94 {
              width: 100%;
            }
            .posts-frame19 {
              width: 100%;
            }
            .posts-image {
              width: 100%;
            }
            .posts-frame124 {
              width: auto;
              justify-content: flex-start;
            }
            .posts-text35 {
              font-family: Ploni ML v2 AAA Light;
            }
          }
          @media (max-width: 767px) {
            .posts-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .posts-blogheadings {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .posts-image {
              height: 500px;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .posts-blogcontent {
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .posts-layoutboxed {
              width: 100%;
            }
            .posts-text22 {
              width: 100%;
            }
            .posts-text23 {
              width: 100%;
            }
            .posts-image5 {
              width: 100%;
            }
            .posts-text24 {
              width: 100%;
            }
            .posts-text26 {
              width: 100%;
            }
            .posts-image51 {
              width: 100%;
            }
            .posts-text28 {
              width: 100%;
            }
            .posts-text29 {
              width: 100%;
            }
            .posts-image52 {
              width: 100%;
            }
            .posts-text31 {
              width: 100%;
            }
            .posts-image53 {
              width: 100%;
            }
            .posts-text33 {
              width: 100%;
            }
            .posts-image54 {
              width: 100%;
            }
            .posts-frame127 {
              flex-direction: column;
            }
            .posts-text37 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Posts.defaultProps = {
  postsEntity: [],
}

Posts.propTypes = {
  postsEntity: PropTypes.array,
}

export default Posts

export async function getStaticProps(context) {
  try {
    const response = await postsPageInitialPropsTqLfResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        postsEntity: response?.data?.[0],
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
    const response = await postsPageInitialPathsTqUResource({
      content_type: 'posts',
      select: 'sys.id',
    })
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            id: (item?.sys?.id).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
