import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabDPageInitialPropsTqAuResource from '../../resources/tab_d-page-initial-props-tq_au'

const Tabd = (props) => {
  return (
    <>
      <div className="tabd-container">
        <Head>
          <title>Tabd - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabd - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabd-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_dEntities) => (
                    <>
                      <div className="tabd-container2">
                        <span>{Tab_dEntities?.tabTypeD}</span>
                        <span>{Tab_dEntities?.tabNameD}</span>
                        <span>{Tab_dEntities?.tabTitleD}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabDEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabd-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabd-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabd-container2 {
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

Tabd.defaultProps = {
  tabDEntities: [],
}

Tabd.propTypes = {
  tabDEntities: PropTypes.array,
}

export default Tabd

export async function getStaticProps(context) {
  try {
    const response = await tabDPageInitialPropsTqAuResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabDEntities: response,
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
