import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import esgSwiperPageInitialPropsTqBlResource from '../../resources/esg-swiper-page-initial-props-tq_bl'

const ESGSwiper1 = (props) => {
  return (
    <>
      <div className="esg-swiper1-container">
        <Head>
          <title>ESGSwiper1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="ESGSwiper1 - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="esg-swiper1-container1">
                <Repeater
                  items={params}
                  renderItem={(ESGSwiperEntities) => (
                    <>
                      <div className="esg-swiper1-container2">
                        <span>{ESGSwiperEntities?.esgTitle}</span>
                        <span>{ESGSwiperEntities?.id}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.eSGSwiperEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .esg-swiper1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .esg-swiper1-container1 {
            display: flex;
            flex-direction: column;
          }
          .esg-swiper1-container2 {
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

ESGSwiper1.defaultProps = {
  eSGSwiperEntities: [],
}

ESGSwiper1.propTypes = {
  eSGSwiperEntities: PropTypes.array,
}

export default ESGSwiper1

export async function getStaticProps(context) {
  try {
    const response = await esgSwiperPageInitialPropsTqBlResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        eSGSwiperEntities: response,
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
