import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import esgSwiperPageInitialPropsTq80Resource from '../../resources/esg-swiper-page-initial-props-tq_80'
import esgSwiperPageInitialPathsTqFqResource from '../../resources/esg-swiper-page-initial-paths-tq_fq'

const ESGSwiper = (props) => {
  return (
    <>
      <div className="esg-swiper-container">
        <Head>
          <title>ESGSwiper - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="ESGSwiper - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(ESGSwiperEntity) => (
            <>
              <div className="esg-swiper-container1">
                <span>{ESGSwiperEntity?.esgTitle}</span>
                <span>{ESGSwiperEntity?.id}</span>
              </div>
            </>
          )}
          initialData={props.eSGSwiperEntity}
          persistDataDuringLoading={true}
          key={props?.eSGSwiperEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .esg-swiper-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .esg-swiper-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

ESGSwiper.defaultProps = {
  eSGSwiperEntity: [],
}

ESGSwiper.propTypes = {
  eSGSwiperEntity: PropTypes.array,
}

export default ESGSwiper

export async function getStaticProps(context) {
  try {
    const response = await esgSwiperPageInitialPropsTq80Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        eSGSwiperEntity: response?.data?.[0],
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
    const response = await esgSwiperPageInitialPathsTqFqResource({
      content_type: 'esgSwiper',
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
