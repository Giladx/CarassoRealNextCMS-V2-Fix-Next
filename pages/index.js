import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Projectcard1 from '../components/projectcard1'
import Bignumbers from '../components/bignumbers'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/58c2f8ee-ffd7-4d8b-bdd2-427960b94318/109b4fac-a4aa-4f2a-b514-c3edb8f8c6af?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div className="home-background">
          <img
            alt="image"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e6d869ac-5e69-4dae-a864-fa816f5ebf6c/f5688a1e-b60e-4dab-8c50-a0686c96929d?org_if_sml=189877&amp;force_format=original"
            className="home-image"
          />
          <video
            src="https://ik.imagekit.io/tosee/carassocompressed_Rzu68mstAH.mp4?updatedAt=1709743496164"
            loop="true"
            muted="true"
            poster="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e6d869ac-5e69-4dae-a864-fa816f5ebf6c/f5688a1e-b60e-4dab-8c50-a0686c96929d?org_if_sml=189877&amp;force_format=original"
            preload="auto"
            autoPlay="true"
            playsInline="true"
            className="home-video"
          ></video>
        </div>
        <section className="home-projects">
          <div className="home-projectsrightblock">
            <button className="home-carassobutton">
              <img
                alt="Arrow7Stroke3882"
                src="/external/arrow7stroke3882-sj2n1.svg"
                className="home-arrow7-stroke"
              />
              <span className="home-text">
                <span>פרויקטים למגורים</span>
              </span>
            </button>
            <div className="home-projectsheadlineandtabs">
              <span className="home-text02">
                <span>
                  <span>
                    <span>
                      <span>
                        פרויקטים
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
                  </span>
                  <span>
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
                  </span>
                </span>
                <span>נבחרים</span>
              </span>
              <div className="home-projectstabs">
                <div className="home-frame70">
                  <span className="home-text19">
                    <span>משרדים ותעסוקה</span>
                  </span>
                </div>
                <div className="home-frame69">
                  <span className="home-text21">
                    <span>מרכזים מסחריים</span>
                  </span>
                </div>
                <div className="home-frame">
                  <span className="home-text23">
                    <span>מגורים</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-selected-projects">
            <div id="slider" className="home-left-column draggable">
              <div>
                <div className="home-container02">
                  <Script
                    html={`<script>
touchScroll('.draggable');

function touchScroll (\$bind = '') {
  const slider = document.querySelector(\$bind);
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking();
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    beginMomentumTracking();
  });

  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    var prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - walk;
    velX = slider.scrollLeft - prevScrollLeft;
  });
  
  slider.addEventListener('wheel', (e) => {
    cancelMomentumTracking();
  });  

  // Detect animation
  var velX = 0;
  var momentumID;

  function beginMomentumTracking(){
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
  }
  function cancelMomentumTracking(){
    cancelAnimationFrame(momentumID);
  }
  function momentumLoop(){
    slider.scrollLeft += velX;
    velX *= 0.95; 
    if (Math.abs(velX) > 0.5){
      momentumID = requestAnimationFrame(momentumLoop);
    }
  }
}
//scroll
//  var item = document.getElementById("slider");
//  window.addEventListener("wheel", (evt) => {
    // evt.preventDefault();
//    item.scrollLeft -= evt.deltaY * 12;
//  });
</script>
`}
                  ></Script>
                </div>
              </div>
              <Projectcard1></Projectcard1>
              <Projectcard1
                imageSrc="/external/elipse-image-200h.png"
                rootClassName="projectcard1-root-class-name"
              ></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
              <Projectcard1></Projectcard1>
            </div>
            <div className="home-right-column">
              <div className="home-projectsrightblock1">
                <div className="home-projectsheadlineandtabs1">
                  <span className="home-text25">
                    <span>פרויקטים נבחרים</span>
                    <br></br>
                  </span>
                  <div className="home-projectstabs1">
                    <span className="home-text28">
                      <span>מגורים</span>
                    </span>
                    <img
                      alt="Vector543708"
                      src="/external/vector543708-5chc1.svg"
                      className="home-vector54"
                    />
                    <span className="home-text30">
                      <span>מרכזים מסחריים</span>
                    </span>
                    <img
                      alt="Vector553708"
                      src="/external/vector553708-3m2r1.svg"
                      className="home-vector55"
                    />
                    <span className="home-text32">משרדים ותעסוקה</span>
                  </div>
                </div>
                <div className="home-container03">
                  <button type="button" className="home-buttontextarrow">
                    <img
                      alt="Arrow7Stroke3708"
                      src="/external/arrow7stroke3708-fasf1.svg"
                      className="home-arrow7-stroke1"
                    />
                    <span className="home-text33">לפרויקטים נוספים</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="home-arrow-container">
            <div className="home-arrows">
              <button
                id="btnl"
                type="button"
                className="home-button-left button"
              >
                <img
                  alt="arrowforward3708"
                  src="/external/arrowforward3708-k3sa.svg"
                  loading="lazy"
                  className="home-arrowforward"
                />
              </button>
              <button
                id="btnr"
                type="button"
                className="home-button-right button"
              >
                <img
                  alt="arrowbackward3708"
                  src="/external/arrowbackward3708-8d3e1.svg"
                  loading="lazy"
                  className="home-arrowbackward"
                />
              </button>
              <div>
                <div className="home-container05">
                  <Script
                    html={`<script>
  // Bottom Arrows Navigation
  document
    .getElementById("btnr")
    .addEventListener("click", function pullRight() {
      const cont1 = document.getElementById("slider");
      cont1.scrollLeft += 407 * 2;
      console.log(cont1.scroll);
    });

  document
    .getElementById("btnl")
    .addEventListener("click", function pushLeft() {
      const cont2 = document.getElementById("slider");
      cont2.scrollLeft -= 407 * 2;
      console.log(cont2.scroll);
    });
</script>
`}
                  ></Script>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="home-success-story">
          <div className="home-container06">
            <div className="home-leftcoloumn">
              <div className="home-successcopycontent">
                <div className="home-successnumbercontent">
                  <div className="home-bignumberscontent">
                    <span className="home-text34">
                      <span className="home-text35">90 שנים</span>
                      <span> </span>
                      <span className="home-text37">של פעילות במספרים</span>
                      <br></br>
                    </span>
                    <Bignumbers></Bignumbers>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-rightcoloumn">
              <div className="home-container07">
                <div
                  data-aos="slide-down"
                  data-aos-duration="3000"
                  className="home-square"
                >
                  <div className="home-circle">
                    <img
                      alt="pastedImage"
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/14c93c59-01fe-475a-af14-0b9907e3270d?org_if_sml=11350075&amp;force_format=original"
                    />
                  </div>
                </div>
                <div aos-data="slide-up" className="home-circle1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-urban-renewal">
          <div className="home-container08">
            <div className="home-leftcoloumn1"></div>
            <div className="home-rightcoloumn1">
              <div className="home-frame1261158162">
                <span className="home-text39">
                  <span className="home-text40">
                    <span>השותפים שלך</span>
                    <br></br>
                    <span></span>
                  </span>
                  <span>להתחדשות עירונית</span>
                </span>
                <span className="home-text45">
                  <span>
                    אנחנו מחלוצי ההתחדשות העירונית בארץ, עם מעל ל-12 שנה של
                    ניסיון בתחום. אנחנו פעילים בהתחדשות שכונות ופרויקטים רחבי
                    היקף של פינוי בינוי והקמת פרויקטי בוטיק מתוקף תמ״א 38/2
                    ומובילים במדדים היוקרתיים Dun’s 100 של חברת דן אנד ברדסטריט,
                    BDI CODE ומדד ההתחדשות העירונית של מדלן.
                  </span>
                </span>
                <button className="home-carassobutton1">
                  <div className="home-frame123">
                    <img
                      alt="Arrow7Stroke5472"
                      src="/external/arrow7stroke5472-dn3f.svg"
                      className="home-arrow7-stroke2"
                    />
                    <span className="home-text47">
                      <span>התחדשות עירונית</span>
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container09">
          <div className="home-leftcoloumn2">
            <div className="home-links">
              <div className="home-linksrow2">
                <span className="home-text49">
                  <span>פנו אלינו</span>
                </span>
                <div className="home-links1">
                  <div className="home-frame133">
                    <span className="home-text51">
                      <span>+972 050 123 1234</span>
                    </span>
                    <span className="home-text53">
                      <span>ריב״ל 24, תל אביב-יפו</span>
                    </span>
                    <span className="home-text55">
                      <span>info@carasso-nadlan.com</span>
                    </span>
                  </div>
                  <div className="home-frame1261158158">
                    <img
                      alt="LinkedinLogo5472"
                      src="/external/linkedinlogo5472-wmth.svg"
                      className="home-linkedin-logo"
                    />
                    <img
                      alt="InstagramLogo5472"
                      src="/external/instagramlogo5472-0y4k.svg"
                      className="home-instagram-logo"
                    />
                    <img
                      alt="FacebookLogo5472"
                      src="/external/facebooklogo5472-il2.svg"
                      className="home-facebook-logo"
                    />
                  </div>
                </div>
              </div>
              <div className="home-linksrow21">
                <span className="home-text57">
                  <span>פרויקטים</span>
                </span>
                <div className="home-links2">
                  <span className="home-text59">
                    <span>פרויקטים למגורים</span>
                  </span>
                  <span className="home-text61">
                    <span>סיפורי הצלחה</span>
                  </span>
                  <span className="home-text63">
                    <span>מרכזי קניות</span>
                  </span>
                  <span className="home-text65">
                    <span>משרדים והייטק</span>
                  </span>
                </div>
              </div>
              <div className="home-linksrow1">
                <span className="home-text67">
                  <span>על החברה</span>
                </span>
                <div className="home-links3">
                  <span className="home-text69">
                    <span>דף הבית</span>
                  </span>
                  <span className="home-text71">
                    <span>הסיפור שלנו</span>
                  </span>
                  <span className="home-text73">
                    <span>התחדשות עירונית</span>
                  </span>
                  <span className="home-text75">
                    <span>חדשות ועידכונים</span>
                  </span>
                  <span className="home-text77">
                    <span>יצירת קשר</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-info">
              <div className="home-termslinks">
                <span className="home-text79">
                  <span>הצהרת נגישות</span>
                </span>
                <span className="home-text81">
                  <span>איסוף נתונים</span>
                </span>
                <span className="home-text83">
                  <span>מדיניות פרטיות</span>
                </span>
                <span className="home-text85">
                  <span>אחריות תאגידית</span>
                </span>
                <div className="home-frame56">
                  <span className="home-text87">
                    <span>2023 קרסו</span>
                  </span>
                  <img
                    alt="Copyright5472"
                    src="/external/copyright5472-j32.svg"
                    className="home-copyright"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="home-rightcoloumn2">
            <img
              alt="Vector5472"
              src="/external/vector5472-3ap.svg"
              className="home-vector"
            />
            <img
              alt="Carassologo5472"
              src="/external/carassologo5472-4son.svg"
              className="home-carassologo"
            />
            <div className="home-moveo-design-credit">
              <div className="home-moveologo">
                <span className="home-text89">
                  <span>Designed by</span>
                </span>
                <img
                  alt="Vector5472"
                  src="/external/vector5472-3cu.svg"
                  className="home-vector1"
                />
                <img
                  alt="Vector5472"
                  src="/external/vector5472-py5p.svg"
                  className="home-vector2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-background {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .home-image {
            width: 100%;
            display: none;
            object-fit: cover;
          }
          .home-video {
            width: 100%;
            height: auto;
          }
          .home-projects {
            width: 100%;
            height: auto;
            display: flex;
            padding: 80px 0;
            overflow: hidden;
            overflow-y: hidden;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .home-projectsrightblock {
            gap: 50px;
            width: 100%;
            height: auto;
            display: none;
            padding: 20px 0;
            flex-grow: 1;
            align-items: flex-end;
            justify-content: flex-end;
          }
          .home-carassobutton {
            gap: 12px;
            display: flex;
            align-items: flex-start;
          }
          .home-arrow7-stroke {
            width: 8px;
            height: 7px;
          }
          .home-text {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-projectsheadlineandtabs {
            gap: 35px;
            width: 568px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-text02 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 42px;
            font-style: Light;
            text-align: right;
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-projectstabs {
            gap: 30px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .home-frame70 {
            gap: 10px;
            display: flex;
            padding: 0 0 10px;
            align-items: flex-start;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: flex-end;
          }
          .home-text19 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-frame69 {
            gap: 10px;
            display: flex;
            padding: 0 0 10px;
            align-items: flex-start;
            border-color: rgba(187, 188, 191, 1);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: flex-end;
          }
          .home-text21 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-frame {
            gap: 10px;
            display: flex;
            padding: 0 0 10px;
            align-items: flex-start;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 0 0 1px;
            justify-content: flex-end;
          }
          .home-text23 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-selected-projects {
            gap: 0;
            display: flex;
            padding: 0 90px 0 0;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .home-left-column {
            gap: 20px;
          }
          .home-container02 {
            display: contents;
          }
          .home-right-column {
            gap: 10px;
            display: flex;
            padding: 0 0 0 90px;
            align-items: flex-start;
          }
          .home-projectsrightblock1 {
            gap: 160px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-projectsheadlineandtabs1 {
            gap: 95px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text25 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 50px;
            text-align: right;
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-projectstabs1 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text28 {
            color: rgba(187, 189, 191, 1);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            transition: 0.3s;
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text28:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-text28:active {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-vector54 {
            width: 177px;
            height: 1px;
            align-self: stretch;
          }
          .home-text30 {
            color: rgba(187, 189, 191, 1);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            transition: 0.3s;
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text30:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-text30:active {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-vector55 {
            width: 177px;
            height: 1px;
            align-self: stretch;
          }
          .home-text32 {
            color: rgb(187, 189, 191);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            transition: 0.3s;
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text32:hover {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-text32:active {
            color: var(--dl-color-carasso-primaryblack);
          }
          .home-container03 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-buttontextarrow {
            gap: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            border-color: rgba(187, 187, 187, 1);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-arrow7-stroke1 {
            width: 8px;
            height: 7px;
          }
          .home-text33 {
            color: var(--dl-color-carasso-primaryblack);
            cursor: pointer;
            height: auto;
            font-size: 18px;
            font-style: DemiBold;
            text-align: right;
            font-weight: 400;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-arrow-container {
            gap: 10px;
            display: flex;
            padding: 20px 0 20px 90px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-arrows {
            gap: 9px;
            display: flex;
            align-items: flex-start;
          }
          .home-button-left {
            display: flex;
            border-width: 0px;
            flex-direction: row;
          }
          .home-arrowforward {
            width: 39px;
            height: 27px;
          }
          .home-button-right {
            display: flex;
            border-width: 0px;
            flex-direction: row;
          }
          .home-arrowbackward {
            width: 39px;
            height: 27px;
          }
          .home-container05 {
            display: contents;
          }
          .home-success-story {
            width: 100%;
            height: auto;
            display: flex;
            overflow: visible;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(236, 236, 236, 1);
          }
          .home-container06 {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .home-leftcoloumn {
            display: flex;
            padding: 0 70px 20px 90px;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            justify-content: flex-end;
          }
          .home-successcopycontent {
            gap: 10px;
            width: 560px;
            display: flex;
            padding: 10px;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .home-successnumbercontent {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .home-bignumberscontent {
            gap: 80px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text34 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            direction: rtl;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text35 {
            font-family: 'Ploni ML v2 AAA Light';
          }
          .home-text37 {
            font-family: 'PloniMLv2 AAA-Bold';
          }
          .home-rightcoloumn {
            gap: 10px;
            height: 735px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 735px;
            height: 735px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            mask-composite: subtract;
            background-size: cover;
          }
          .home-square {
            top: -45px;
            flex: 0 0 auto;
            left: 0px;
            width: 538px;
            height: 538px;
            display: flex;
            z-index: 2;
            overflow: hidden;
            position: absolute;
            transform: rotate(30deg);
            align-items: flex-start;
            border-color: var(--dl-color-carasso-blue);
            border-width: 2px;
            border-radius: 16.8px;
            flex-direction: column;
            background-size: cover;
          }
          .home-circle {
            top: 61px;
            flex: 0 0 auto;
            left: 95px;
            width: 701px;
            height: 701px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-clip: padding-box;
          }
          .home-circle1 {
            top: 85px;
            flex: 0 0 auto;
            width: 701px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 701px;
            display: flex;
            overflow: revert;
            position: absolute;
            align-items: flex-start;
            border-color: var(--dl-color-carasso-blue);
            border-style: solid;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-clip: padding-box;
          }
          .home-urban-renewal {
            width: 100%;
            height: auto;
            display: flex;
            padding: 60px 0;
            overflow: hidden;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .home-container08 {
            gap: 2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .home-leftcoloumn1 {
            gap: 20px;
            width: 823px;
            height: 762px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 0 20px 20px 0;
            background-size: auto;
            justify-content: flex-end;
            background-image: a86f785d-c347-4375-bc9e-c9d69553725a;
            background-repeat: no-repeat;
          }
          .home-rightcoloumn1 {
            gap: 10px;
            display: flex;
            padding: 60px 120px 60px 90px;
            align-items: center;
          }
          .home-frame1261158162 {
            gap: 70px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text39 {
            color: var(--dl-color-carasso-primaryblack);
            width: 407px;
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 110.00000238418579%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text40 {
            font-weight: 300;
          }
          .home-text45 {
            color: var(--dl-color-carasso-primaryblack);
            width: 407px;
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
          .home-carassobutton1 {
            gap: 12px;
            display: flex;
            padding: 0 0 12px;
            align-items: flex-start;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 0 0 1px;
          }
          .home-frame123 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .home-arrow7-stroke2 {
            width: 8px;
            height: 7px;
          }
          .home-text47 {
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
          .home-container09 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .home-leftcoloumn2 {
            gap: 80px;
            height: 458px;
            display: flex;
            padding: 80px 0 80px 90px;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-links {
            gap: 100px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .home-linksrow2 {
            gap: 40px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text49 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-links1 {
            gap: 24px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-frame133 {
            gap: 24px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .home-text51 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text53 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text55 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 104.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-frame1261158158 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .home-linkedin-logo {
            width: 24px;
            height: 24px;
          }
          .home-instagram-logo {
            width: 24px;
            height: 24px;
          }
          .home-facebook-logo {
            width: 24px;
            height: 24px;
          }
          .home-linksrow21 {
            gap: 40px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text57 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-links2 {
            gap: 24px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text59 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text61 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text63 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text65 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-linksrow1 {
            gap: 40px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text67 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-links3 {
            gap: 24px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-text69 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text71 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text73 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text75 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text77 {
            color: var(--dl-color-carasso-darkergray);
            height: auto;
            font-size: 18px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-info {
            gap: 24px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-termslinks {
            gap: 30px;
            display: flex;
            align-items: center;
          }
          .home-text79 {
            color: rgba(153, 153, 153, 1);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text81 {
            color: rgba(153, 153, 153, 1);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text83 {
            color: rgba(153, 153, 153, 1);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text85 {
            color: rgba(153, 153, 153, 1);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-frame56 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .home-text87 {
            color: rgba(153, 153, 153, 1);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-copyright {
            width: 16px;
            height: 16px;
          }
          .home-rightcoloumn2 {
            gap: 90px;
            height: 458px;
            display: flex;
            padding: 80px 90px 80px 220px;
            position: relative;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-vector {
            top: 210px;
            left: 45.037109375px;
            width: 559px;
            height: 417px;
            position: absolute;
          }
          .home-carassologo {
            width: 141px;
            height: 99px;
            z-index: 1;
          }
          .home-moveo-design-credit {
            gap: 12px;
            display: flex;
            z-index: 2;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-moveologo {
            gap: 5.6781768798828125px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-text89 {
            color: var(--dl-color-carasso-graytextcolor);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-vector1 {
            width: 22px;
            height: 11px;
          }
          .home-vector2 {
            width: 45px;
            height: 8px;
          }
          @media (max-width: 1440px) {
            .home-projectsrightblock {
              display: none;
            }
          }
          @media (max-width: 1200px) {
            .home-projectsrightblock {
              display: none;
            }
            .home-left-column {
              gap: 0;
              overflow-x: scroll;
            }
          }
          @media (max-width: 991px) {
            .home-projects {
              padding-right: 40px;
            }
            .home-projectsrightblock {
              display: flex;
              align-items: flex-end;
            }
            .home-carassobutton {
              border-color: var(--dl-color-carasso-graytextcolor);
              border-width: 1px;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-arrow7-stroke {
              align-self: center;
            }
            .home-projectsheadlineandtabs {
              width: auto;
            }
            .home-text02 {
              font-style: normal;
              font-weight: 400;
            }
            .home-selected-projects {
              padding-right: 0px;
            }
            .home-left-column {
              gap: 0;
            }
            .home-right-column {
              display: none;
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
            }
          }
          @media (max-width: 767px) {
            .home-projects {
              padding-right: 40px;
            }
            .home-carassobutton {
              display: none;
            }
            .home-left-column {
              gap: 0;
            }
            .home-arrow-container {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .home-projects {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 20px;
              padding-bottom: 0px;
            }
            .home-projectsrightblock {
              padding-top: 40px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .home-projectsheadlineandtabs {
              padding-bottom: 30px;
            }
            .home-selected-projects {
              padding-right: 0px;
            }
            .home-arrow-container {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
