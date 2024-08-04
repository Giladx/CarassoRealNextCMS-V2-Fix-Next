import React, { useState } from 'react'

import PropTypes from 'prop-types'

const GridCard = (props) => {
  const [backimage, setBackimage] = useState(true)
  return (
    <>
      <div className={`grid-card-container ${props.rootClassName} `}>
        <div
          onMouseEnter={() => setBackimage(false)}
          onMouseLeave={() => setBackimage(true)}
          className="grid-card-cardgridviewnarrow"
        >
          <div className="grid-card-projectimageandtags imageBox">
            <div className="grid-card-projectstatus"></div>
            <img
              alt="image"
              src={props.mainImageSrc}
              className="grid-card-main-image"
            />
            {backimage && <div className="secondImg"></div>}
          </div>
          <div className="grid-card-projectdetails">
            <div className="grid-card-projectdetails1"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .grid-card-container {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .grid-card-cardgridviewnarrow {
            gap: 30px;
            width: 100%;
            cursor: pointer;
            display: flex;
            flex-grow: 1;
            align-self: flex-end;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .grid-card-projectimageandtags {
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
          .grid-card-projectstatus {
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
          .grid-card-main-image {
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .grid-card-projectdetails {
            gap: 108px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .grid-card-projectdetails1 {
            gap: 30px;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .grid-card-text {
            color: var(--dl-color-carasso-primaryblack);
            width: 99px;
            height: auto;
            display: inline-block;
            font-size: 14px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .grid-card-text1 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            display: inline-block;
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
          .grid-card-text2 {
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
          .grid-card-text3 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            display: inline-block;
            direction: rtl;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Bold';
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

GridCard.defaultProps = {
  toptag: undefined,
  mainImageSrc:
    'https://images.unsplash.com/photo-1721925376073-4d2c53dd12f2?ixid=M3w5MTMyMXwwfDF8YWxsfDJ8fHx8fHwyfHwxNzIyNzExODg1fA&ixlib=rb-4.0.3&w=1500',
  name: undefined,
  rootClassName: '',
  description: undefined,
  city: undefined,
  imageSecondSrc:
    'https://images.unsplash.com/photo-1722648404133-f101f15f69c1?ixid=M3w5MTMyMXwwfDF8YWxsfDE0fHx8fHx8Mnx8MTcyMjcxMTg4NXw&ixlib=rb-4.0.3&w=1500',
}

GridCard.propTypes = {
  toptag: PropTypes.element,
  mainImageSrc: PropTypes.string,
  name: PropTypes.element,
  rootClassName: PropTypes.string,
  description: PropTypes.element,
  city: PropTypes.element,
  imageSecondSrc: PropTypes.string,
}

export default GridCard
