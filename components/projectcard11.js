import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Projectcard11 = (props) => {
  return (
    <>
      <div
        id="image-container"
        className="projectcard projectcard11-projectcard"
      >
        <div className="projectcard11-container"></div>
        <div className="projectcard11-container1">
          <div className="projectcard11-image project-img-small">
            <img
              id="mask"
              alt="image"
              src="https://images.unsplash.com/photo-1625283518288-00362afc8663?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxoYXBweSUyMHBlb3BsZXxlbnwwfHx8fDE3MjEyMzA3NDl8MA&amp;ixlib=rb-4.0.3&amp;w=400"
              className="mask"
            />
          </div>
        </div>
        <div className="project-inner">
          <div className="projectcard11-projectstatus">
            <span className="projectcard11-text">בתכנון</span>
            <img
              alt="VectorStroke3708"
              src="/external/vectorstroke3708-4itf.svg"
              className="projectcard11-vector-stroke"
            />
          </div>
          <div className="projectcard11-projectcontent">
            <img
              id="btn-1"
              alt="projectarrowbutton3708"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e6d869ac-5e69-4dae-a864-fa816f5ebf6c/79a64e02-3b02-4b4a-8514-ebd288949ec7?org_if_sml=1&amp;q=80350&amp;force_format=original"
              loading="lazy"
              className="projectcard11-projectarrowbutton"
            />
            <div className="projectcard11-projectdetails">
              <div
                id="info"
                className="projectinfo projectcard11-projectnamelocation"
              >
                <span className="projectcard11-text1">קריית אונו</span>
                <span className="projectcard11-text2">אומאמי</span>
                <span className="projectcard11-text3">
                  בבסיס התכנון של המתחם עומדת האהבה לבישול ולאירוח, אהבה שניתן
                  להרגיש החל במרחבים המשותפים, דרך הדירות עצמן ועד למטבחים.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="projectcard11-image2 project-img-small">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1625283518288-00362afc8663?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxoYXBweSUyMHBlb3BsZXxlbnwwfHx8fDE3MjEyMzA3NDl8MA&amp;ixlib=rb-4.0.3&amp;w=400"
            className="projectcard11-image3 mask"
          />
        </div>
        <div>
          <div className="projectcard11-container3">
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
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .projectcard11-container {
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
          .projectcard11-container1 {
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
            background-image: radial-gradient(
              circle at center,
              rgba(189, 195, 199, 0) 0%,
              rgba(0, 0, 0, 0.6) 100%
            );
          }
          .projectcard11-image {
            top: 46px;
            overflow: hidden;
            transform: rotate(15deg);
            border-color: rgba(255, 82, 61, 0);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .projectcard11-projectstatus {
            gap: 9px;
            cursor: pointer;
            display: flex;
            padding: 8px 15px;
            align-items: center;
            border-radius: 9999px;
            justify-content: flex-end;
            background-color: rgba(255, 255, 255, 0.30000001192092896);
          }
          .projectcard11-text {
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
          .projectcard11-vector-stroke {
            width: 12px;
            height: 12px;
          }
          .projectcard11-projectcontent {
            gap: 15px;
            width: 322px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .projectcard11-projectarrowbutton {
            top: 0;
            left: 0px;
            width: auto;
            cursor: pointer;
            height: auto;
            position: absolute;
          }
          .projectcard11-projectdetails {
            gap: 24px;
            width: auto;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .projectcard11-text1 {
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
          .projectcard11-text2 {
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
          .projectcard11-text3 {
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
          .projectcard11-image2 {
            top: 46px;
            overflow: hidden;
            transform: rotate(15deg);
            transition: 0.3s;
            border-color: var(--dl-color-carasso-plainwhite);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .projectcard11-image2:hover {
            border-color: var(--dl-color-carasso-red);
          }
          .projectcard11-image3 {
            display: none;
          }
          .projectcard11-container3 {
            display: contents;
          }
          @media (max-width: 1200px) {
            .projectcard11-projectcard {
              margin-left: 20px;
            }
          }
          @media (max-width: 991px) {
            .projectcard11-projectcard {
              margin-left: 20px;
            }
          }
          @media (max-width: 479px) {
            .projectcard11-projectcard {
              width: 350px;
            }
            .projectcard11-projectnamelocation {
              right: 70px;
            }
          }
        `}
      </style>
    </>
  )
}

Projectcard11.defaultProps = {
  rootClassName: '',
}

Projectcard11.propTypes = {
  rootClassName: PropTypes.string,
}

export default Projectcard11
