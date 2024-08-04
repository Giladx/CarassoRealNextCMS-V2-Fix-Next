import React from 'react'

import Script from 'dangerous-html/react'

const Bignumbers = (props) => {
  return (
    <>
      <div className="bignumbers-bignumbers">
        <div>
          <div className="bignumbers-container1">
            <Script
              html={`<script>
    document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.value');
    const speed = 200;

    const animate = (counter) => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time).toLocaleString();
            setTimeout(() => animate(counter), 1);
        } else {
            counter.innerText = value.toLocaleString();
        }
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                observer.unobserve(entry.target); // Stop observing after animation starts
            }
        });
    }, {
        threshold: 1.0 // Adjusted to ensure the entire element is in view
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
</script>`}
            ></Script>
          </div>
        </div>
        <div className="bignumbers-numberrowcontainer">
          <div className="bignumbers-bignumberblock">
            <div className="bignumbers-numbertext">
              <img
                alt="Vector5472"
                src="/external/vector5472-civk.svg"
                className="bignumbers-vector"
              />
              <span akhi="4462" className="bignumbers-text value">
                0
              </span>
            </div>
            <div className="bignumbers-bignumbertitleandicon">
              <img
                alt="UsersThree5472"
                src="/external/usersthree5472-lqi6.svg"
                className="bignumbers-users-three"
              />
              <span className="bignumbers-text01">
                <span>בעלי דירות שותפים</span>
              </span>
            </div>
          </div>
          <div className="bignumbers-bignumberblock1">
            <div className="bignumbers-numbertext1">
              <img
                alt="Vector5472"
                src="/external/vector5472-le6b.svg"
                className="bignumbers-vector1"
              />
              <span akhi="54" className="bignumbers-text03 value">
                0
              </span>
            </div>
            <div className="bignumbers-bignumbertitleandicon1">
              <img
                alt="buildingsicon5472"
                src="/external/buildingsicon5472-xnx4.svg"
                className="bignumbers-buildingsicon"
              />
              <span className="bignumbers-text04">
                <span>פרויקטים למגורים</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bignumbers-numberrowcontainer1">
          <div className="bignumbers-bignumberblock2">
            <button className="bignumbers-carassobutton">
              <div className="bignumbers-frame123">
                <img
                  alt="Arrow7Stroke5472"
                  src="/external/arrow7stroke5472-k5fk.svg"
                  className="bignumbers-arrow7-stroke"
                />
                <span className="bignumbers-text06">
                  <span>סיפורי הצלחה</span>
                </span>
              </div>
            </button>
          </div>
          <div className="bignumbers-bignumberblock3">
            <div className="bignumbers-numbertext2">
              <img
                alt="Vector5472"
                src="/external/vector5472-wrob.svg"
                className="bignumbers-vector2"
              />
              <span akhi="11110" className="bignumbers-text08 value">
                0
              </span>
            </div>
            <div className="bignumbers-bignumbertitleandicon2">
              <img
                alt="ArrowSquareOut5472"
                src="/external/arrowsquareout5472-jjvr.svg"
                className="bignumbers-arrow-square-out"
              />
              <span className="bignumbers-text09">
                <span>דירות לשיווק</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .bignumbers-bignumbers {
            gap: 70px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .bignumbers-container1 {
            display: contents;
          }
          .bignumbers-numberrowcontainer {
            gap: 70px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bignumbers-bignumberblock {
            gap: 30px;
            width: 235px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .bignumbers-numbertext {
            gap: 20px;
            display: flex;
            align-items: flex-end;
          }
          .bignumbers-vector {
            width: 15px;
            height: 15px;
          }
          .bignumbers-text {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 80px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 500;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .bignumbers-bignumbertitleandicon {
            gap: 37px;
            display: flex;
            padding: 9px 0 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(115, 119, 123, 1);
            border-style: solid;
            border-width: 0.5px 0 0;
            justify-content: space-between;
          }
          .bignumbers-users-three {
            width: 24px;
            height: 24px;
          }
          .bignumbers-text01 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .bignumbers-bignumberblock1 {
            gap: 30px;
            width: 235px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .bignumbers-numbertext1 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
          }
          .bignumbers-vector1 {
            width: 15px;
            height: 15px;
          }
          .bignumbers-text03 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 80px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 500;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .bignumbers-bignumbertitleandicon1 {
            gap: 37px;
            display: flex;
            padding: 9px 0 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(115, 119, 123, 1);
            border-style: solid;
            border-width: 0.5px 0 0;
            justify-content: space-between;
          }
          .bignumbers-buildingsicon {
            width: 24px;
            height: 24px;
          }
          .bignumbers-text04 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .bignumbers-numberrowcontainer1 {
            gap: 60px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bignumbers-bignumberblock2 {
            gap: 30px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .bignumbers-carassobutton {
            gap: 12px;
            display: flex;
            padding: 0 0 12px;
            align-items: flex-start;
            border-color: rgba(42, 42, 42, 1);
            border-style: solid;
            border-width: 0 0 1px;
          }
          .bignumbers-frame123 {
            gap: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .bignumbers-arrow7-stroke {
            width: 8px;
            height: 7px;
          }
          .bignumbers-text06 {
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
          .bignumbers-bignumberblock3 {
            gap: 30px;
            width: 240px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .bignumbers-numbertext2 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
            padding-left: 3px;
          }
          .bignumbers-vector2 {
            width: 15px;
            height: 15px;
          }
          .bignumbers-text08 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 80px;
            font-style: Medium;
            text-align: right;
            font-family: 'Ploni ML v2 AAA Medium';
            font-weight: 500;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .bignumbers-bignumbertitleandicon2 {
            gap: 37px;
            display: flex;
            padding: 9px 0 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(115, 119, 123, 1);
            border-style: solid;
            border-width: 0.5px 0 0;
            justify-content: space-between;
          }
          .bignumbers-arrow-square-out {
            width: 24px;
            height: 24px;
          }
          .bignumbers-text09 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Bignumbers
