import React, { useState } from 'react'

import PropTypes from 'prop-types'

const FAQ14 = (props) => {
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  return (
    <>
      <div className="faq14-faq8 thq-section-padding">
        <div className="faq14-max-width accordion">
          <div className="faq14-container thq-flex-column">
            <div className="faq14-list thq-flex-column">
              <div className="faq14-faq1">
                <div
                  onClick={() => setFaq1Visible(!faq1Visible)}
                  className="faq14-trigger"
                >
                  <p className="faq14-faq1-question thq-body-large">
                    {props.faq1Question}
                  </p>
                  <div className="faq14-icons-container">
                    {!faq1Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon">
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq1Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq14-icon2">
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq1Visible && (
                  <div className="faq14-container3">
                    <span className="thq-body-small">
                      Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                      sunt aut deleniti illum non repudiandae voluptatem. Aut
                      praesentium doloribus qui distinctio neque ut unde
                      temporibus. Cum exercitationem eveniet in omnis animi in
                      corporis nulla. Sed tempora excepturi et voluptatem modi
                      et exercitationem voluptate cum illum quisquam 33 quia
                      blanditiis eos minus consequatur.Ut neque quam qui
                      dignissimos voluptates ut voluptate totam aut consequuntur
                      quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                      eum earum tenetur? Est esse harum et Quis officiis et enim
                      amet.Et minima tempore et neque voluptatem eos amet
                      officiis et temporibus Quis. Et suscipit esse id nemo sunt
                      At nihil earum et consequatur fuga aut sapiente voluptate
                      est cupiditate esse non dolor cumque. Ut obcaecati
                      recusandae et beatae quae qui doloremque eligendi sit
                      eaque labore.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq14-faq8 {
            width: auto;
            height: auto;
            display: flex;
            padding: 0px;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq14-max-width {
            cursor: pointer;
          }
          .faq14-container {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq14-list {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            align-self: center;
            align-items: flex-start;
          }
          .faq14-faq1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq14-trigger {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-trigger:hover {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: var(--dl-color-theme-primary2);
          }
          .faq14-faq1-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq14-icons-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq14-icon {
            width: 24px;
            height: 24px;
          }
          .faq14-icon2 {
            width: 24px;
            height: 24px;
          }
          .faq14-container3 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          @media (max-width: 991px) {
            .faq14-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FAQ14.defaultProps = {
  faq1Question: 'מהם השלבים בתהליך התכנון והבנייה של פרויקט מגורים?',
}

FAQ14.propTypes = {
  faq1Question: PropTypes.string,
}

export default FAQ14
