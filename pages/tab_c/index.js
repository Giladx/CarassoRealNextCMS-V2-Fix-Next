import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabCPageInitialPropsTqB0Resource from '../../resources/tab_c-page-initial-props-tq_b0'

const Tabc1 = (props) => {
  return (
    <>
      <div className="tabc1-container">
        <Head>
          <title>Tabc1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabc1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabc1-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_cEntities) => (
                    <>
                      <div className="tabc1-container2">
                        <span>{Tab_cEntities?.tabNameC}</span>
                        <span>{Tab_cEntities?.tabDescriptionC}</span>
                        <span>{Tab_cEntities?.id}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabCEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabc1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabc1-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabc1-container2 {
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

Tabc1.defaultProps = {
  tabCEntities: [],
}

Tabc1.propTypes = {
  tabCEntities: PropTypes.array,
}

export default Tabc1

export async function getStaticProps(context) {
  try {
    const response = await tabCPageInitialPropsTqB0Resource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabCEntities: response,
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
