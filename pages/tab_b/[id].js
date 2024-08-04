import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabBPageInitialPropsTq3hResource from '../../resources/tab_b-page-initial-props-tq_3h'
import tabBPageInitialPathsTqWOResource from '../../resources/tab_b-page-initial-paths-tq_w-o'

const Tabb11 = (props) => {
  return (
    <>
      <div className="tabb11-container">
        <Head>
          <title>Tabb1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabb1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(Tab_bEntity) => (
            <>
              <div className="tabb11-container1">
                <span>{Tab_bEntity?.tabNameTypeB}</span>
                <span>{Tab_bEntity?.featuredTitle1B}</span>
                <span>{Tab_bEntity?.featuredDescription1B}</span>
              </div>
            </>
          )}
          initialData={props.tabBEntity}
          persistDataDuringLoading={true}
          key={props?.tabBEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .tabb11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabb11-container1 {
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

Tabb11.defaultProps = {
  tabBEntity: [],
}

Tabb11.propTypes = {
  tabBEntity: PropTypes.array,
}

export default Tabb11

export async function getStaticProps(context) {
  try {
    const response = await tabBPageInitialPropsTq3hResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabBEntity: response?.data?.[0],
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
    const response = await tabBPageInitialPathsTqWOResource({
      content_type: 'tabB',
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
