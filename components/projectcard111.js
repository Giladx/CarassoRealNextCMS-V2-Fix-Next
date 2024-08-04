import React from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import brandsResource from '../resources/brands'

const Projectcard111 = (props) => {
  return (
    <>
      <div
        id="image-container"
        className={`projectcard projectcard111-projectcard ${props.rootClassName} `}
      >
        <DataProvider
          renderSuccess={(context_j0v06) => (
            <>
              <div className="projectcard111-project-card">
                <div className="projectcard111-projectdetailscontainer project-inner">
                  <div className="projectcard111-projectstatus">
                    <span className="projectcard111-text">
                      {context_j0v06?.projectStatus}
                    </span>
                    <img
                      alt="VectorStroke3708"
                      src="/external/vectorstroke3708-4itf.svg"
                      className="projectcard111-vector-stroke"
                    />
                  </div>
                  <div className="projectcard111-projectcontent">
                    <img
                      id="btn-1"
                      alt="projectarrowbutton3708"
                      src="/external/projectarrowbutton3708-a4n2-200h-200h.webp"
                      loading="lazy"
                      className="projectcard111-projectarrowbutton"
                    />
                    <div className="projectcard111-projectdetails">
                      <div
                        id="info"
                        className="projectinfo projectcard111-projectnamelocation"
                      >
                        <span className="projectcard111-text1">
                          {context_j0v06?.cityC}
                        </span>
                        <span className="projectcard111-text2">
                          {context_j0v06?.brandName}
                        </span>
                        <span className="projectcard111-text3">
                          {context_j0v06?.mainDescription}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="projectcard111-container"></div>
                <div className="projectcard111-image project-img-small">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1625283518288-00362afc8663?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxoYXBweSUyMHBlb3BsZXxlbnwwfHx8fDE3MjEyMzA3NDl8MA&amp;ixlib=rb-4.0.3&amp;w=400"
                    className="projectcard111-image1 mask"
                  />
                </div>
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
                <div className="projectcard111-container1">
                  <div className="projectcard111-image2 project-img-small">
                    <img
                      id="mask"
                      alt="image"
                      src={context_j0v06?.mainFeaturedImage?.url}
                      className="projectcard111-image3 mask"
                    />
                  </div>
                  <img
                    alt={props.imageAlt}
                    src={context_j0v06?.heroImage?.url}
                    className="projectcard111-image4"
                  />
                  <div className="projectcard111-container2"></div>
                </div>
              </div>
            </>
          )}
          initialData={props.contextJ0v06Prop}
          persistDataDuringLoading={true}
          initialData={props.contextJ0v06Prop}
          persistDataDuringLoading={true}
        />
      </div>
      <style jsx>
        {`
          .projectcard111-project-card {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .projectcard111-projectdetailscontainer {
            z-index: 10;
          }
          .projectcard111-projectstatus {
            gap: 9px;
            cursor: pointer;
            display: flex;
            padding: 8px 15px;
            align-items: center;
            border-radius: 9999px;
            justify-content: flex-end;
            background-color: rgba(255, 255, 255, 0.30000001192092896);
          }
          .projectcard111-text {
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
          .projectcard111-vector-stroke {
            width: 12px;
            height: 12px;
          }
          .projectcard111-projectcontent {
            gap: 15px;
            width: 322px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .projectcard111-projectarrowbutton {
            top: 0;
            left: 0px;
            width: auto;
            cursor: pointer;
            height: auto;
            position: absolute;
          }
          .projectcard111-projectdetails {
            gap: 24px;
            width: auto;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .projectcard111-text1 {
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
          .projectcard111-text2 {
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
          .projectcard111-text3 {
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
          .projectcard111-container {
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
          .projectcard111-image {
            top: 46px;
            z-index: 10;
            overflow: hidden;
            transform: rotate(15deg);
            transition: 0.3s;
            border-color: var(--dl-color-carasso-plainwhite);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .projectcard111-image:hover {
            border-color: var(--dl-color-carasso-red);
          }
          .projectcard111-image1 {
            display: none;
          }
          .projectcard111-container1 {
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
          }
          .projectcard111-image2 {
            top: 46px;
            z-index: 10;
            overflow: hidden;
            transform: rotate(15deg);
            border-color: rgba(255, 82, 61, 0);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .projectcard111-image3 {
            width: 100%;
            height: 100%;
          }
          .projectcard111-image4 {
            width: 100%;
            height: 100%;
            z-index: 0;
            object-fit: cover;
          }
          .projectcard111-container2 {
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.05) 0%,
              rgba(0, 0, 0, 0.25) 47%,
              rgba(0, 0, 0, 0.6) 100%
            );
          }
          @media (max-width: 1200px) {
            .projectcard111-projectcard {
              margin-left: 20px;
            }
          }
          @media (max-width: 991px) {
            .projectcard111-projectcard {
              margin-left: 20px;
            }
          }
          @media (max-width: 479px) {
            .projectcard111-projectcard {
              width: 350px;
            }
            .projectcard111-projectnamelocation {
              right: 70px;
            }
          }
        `}
      </style>
    </>
  )
}

Projectcard111.defaultProps = {
  rootClassName: '',
  imageAlt: 'image',
}

Projectcard111.propTypes = {
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Projectcard111

export async function getStaticProps(context) {
  try {
    const contextJ0v06Prop = await brandsResource({
      ...context?.params,
    })
    const contextJ0v06Prop = await brandsResource({
      ...context?.params,
    })
    return {
      props: {
        contextJ0v06Prop: contextJ0v06Prop?.data?.[0],
        contextJ0v06Prop: contextJ0v06Prop?.data?.[0],
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
