import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabBPageInitialPropsTqTResource from '../../resources/tab_b-page-initial-props-tq_t_'

const Tabb = (props) => {
  return (
    <>
      <div className="tabb-container">
        <Head>
          <title>Tabb - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabb - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabb-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_bEntities) => (
                    <>
                      <div className="tabb-container2">
                        <span>{Tab_bEntities?.tabNameTypeB}</span>
                        <span>{Tab_bEntities?.featuredTitle1B}</span>
                        <span>{Tab_bEntities?.featuredDescription1B}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabBEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabb-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabb-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabb-container2 {
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

Tabb.defaultProps = {
  tabBEntities: [],
}

Tabb.propTypes = {
  tabBEntities: PropTypes.array,
}

export default Tabb

export async function getStaticProps(context) {
  try {
    const response = await tabBPageInitialPropsTqTResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabBEntities: response,
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
