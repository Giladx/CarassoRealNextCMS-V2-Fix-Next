import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import aboutPageInitialPropsTqVpResource from '../../../resources/about-page-initial-props-tq_vp'
import aboutPageInitialPathsTqQxResource from '../../../resources/about-page-initial-paths-tq_qx'

const About21 = (props) => {
  return (
    <>
      <div className="about21-container">
        <Head>
          <title>About2 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="About2 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="about21-container1">
                <Repeater
                  items={params}
                  renderItem={(AboutEntities) => (
                    <>
                      <div className="about21-container2">
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
          .about21-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about21-container1 {
            display: flex;
            flex-direction: column;
          }
          .about21-container2 {
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

About21.defaultProps = {
  aboutEntities: [],
}

About21.propTypes = {
  aboutEntities: PropTypes.array,
}

export default About21

export async function getStaticProps(context) {
  try {
    const response = await aboutPageInitialPropsTqVpResource({
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

export async function getStaticPaths() {
  try {
    const response = await aboutPageInitialPathsTqQxResource({
      content_type: 'about',
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
