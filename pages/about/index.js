import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import aboutPageInitialPropsTqUkResource from '../../resources/about-page-initial-props-tq_uk'

const About2 = (props) => {
  return (
    <>
      <div className="about2-container">
        <Head>
          <title>About2 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="About2 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="about2-container1">
                <Repeater
                  items={params}
                  renderItem={(AboutEntities) => (
                    <>
                      <div className="about2-container2">
                        <span>{AboutEntities?.id}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.aboutEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .about2-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about2-container1 {
            display: flex;
            flex-direction: column;
          }
          .about2-container2 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

About2.defaultProps = {
  aboutEntities: [],
}

About2.propTypes = {
  aboutEntities: PropTypes.array,
}

export default About2

export async function getStaticProps(context) {
  try {
    const response = await aboutPageInitialPropsTqUkResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        aboutEntities: response,
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
