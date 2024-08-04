import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import esgSwiperPageInitialPropsTqS1Resource from '../../../resources/esg-swiper-page-initial-props-tq_s1'
import esgSwiperPageInitialPathsTqKeResource from '../../../resources/esg-swiper-page-initial-paths-tq_ke'

const ESGSwiper11 = (props) => {
  return (
    <>
      <div className="esg-swiper11-container">
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
              <div className="esg-swiper11-container1">
                <Repeater
                  items={params}
                  renderItem={(ESGSwiperEntities) => (
                    <>
                      <div className="esg-swiper11-container2">
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
          .esg-swiper11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .esg-swiper11-container1 {
            display: flex;
            flex-direction: column;
          }
          .esg-swiper11-container2 {
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

ESGSwiper11.defaultProps = {
  eSGSwiperEntities: [],
}

ESGSwiper11.propTypes = {
  eSGSwiperEntities: PropTypes.array,
}

export default ESGSwiper11

export async function getStaticProps(context) {
  try {
    const response = await esgSwiperPageInitialPropsTqS1Resource({
      ...context?.params,
      skip: (context.params.page - 1) * 10,
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

export async function getStaticPaths() {
  try {
    const response = await esgSwiperPageInitialPathsTqKeResource({
      content_type: 'esgSwiper',
    })
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
