import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabAPageInitialPropsTqWpResource from '../../resources/tab_a-page-initial-props-tq_wp'
import tabAPageInitialPathsTq98Resource from '../../resources/tab_a-page-initial-paths-tq_98'

const Taba = (props) => {
  return (
    <>
      <div className="taba-container">
        <Head>
          <title>Taba - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Taba - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(Tab_aEntity) => (
            <>
              <div className="taba-container1">
                <span>{Tab_aEntity?.tabA}</span>
                <span>{Tab_aEntity?.tabTypeA}</span>
                <span>{Tab_aEntity?.tabASub}</span>
              </div>
            </>
          )}
          initialData={props.tabAEntity}
          persistDataDuringLoading={true}
          key={props?.tabAEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .taba-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .taba-container1 {
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

Taba.defaultProps = {
  tabAEntity: [],
}

Taba.propTypes = {
  tabAEntity: PropTypes.array,
}

export default Taba

export async function getStaticProps(context) {
  try {
    const response = await tabAPageInitialPropsTqWpResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabAEntity: response?.data?.[0],
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
    const response = await tabAPageInitialPathsTq98Resource({
      content_type: 'tabs',
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
