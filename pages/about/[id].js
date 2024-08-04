import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import aboutPageInitialPropsTqWFResource from '../../resources/about-page-initial-props-tq_w-f'
import aboutPageInitialPathsTqFmResource from '../../resources/about-page-initial-paths-tq_fm'

const About1 = (props) => {
  return (
    <>
      <div className="about1-container">
        <Head>
          <title>About1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="About1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(AboutEntity) => (
            <>
              <div className="about1-container1">
                <span>{AboutEntity?.id}</span>
              </div>
            </>
          )}
          initialData={props.aboutEntity}
          persistDataDuringLoading={true}
          key={props?.aboutEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .about1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about1-container1 {
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

About1.defaultProps = {
  aboutEntity: [],
}

About1.propTypes = {
  aboutEntity: PropTypes.array,
}

export default About1

export async function getStaticProps(context) {
  try {
    const response = await aboutPageInitialPropsTqWFResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        aboutEntity: response?.data?.[0],
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
    const response = await aboutPageInitialPathsTqFmResource({
      content_type: 'about',
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
