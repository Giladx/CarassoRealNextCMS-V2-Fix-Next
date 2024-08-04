import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabAPageInitialPropsTqOoResource from '../../resources/tab_a-page-initial-props-tq_oo'

const Taba1 = (props) => {
  return (
    <>
      <div className="taba1-container">
        <Head>
          <title>Taba1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Taba1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="taba1-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_aEntities) => (
                    <>
                      <div className="taba1-container2">
                        <span>{Tab_aEntities?.tabA}</span>
                        <span>{Tab_aEntities?.tabTypeA}</span>
                        <span>{Tab_aEntities?.tabASub}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabAEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .taba1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .taba1-container1 {
            display: flex;
            flex-direction: column;
          }
          .taba1-container2 {
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

Taba1.defaultProps = {
  tabAEntities: [],
}

Taba1.propTypes = {
  tabAEntities: PropTypes.array,
}

export default Taba1

export async function getStaticProps(context) {
  try {
    const response = await tabAPageInitialPropsTqOoResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabAEntities: response,
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
