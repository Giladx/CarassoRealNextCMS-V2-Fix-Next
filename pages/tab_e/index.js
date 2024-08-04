import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabEPageInitialPropsTq3yResource from '../../resources/tab_e-page-initial-props-tq_3y'

const Tabe = (props) => {
  return (
    <>
      <div className="tabe-container">
        <Head>
          <title>Tabe - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabe - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabe-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_eEntities) => (
                    <>
                      <div className="tabe-container2">
                        <span>{Tab_eEntities?.tabTypeE}</span>
                        <span>{Tab_eEntities?.tabNameE}</span>
                        <span>{Tab_eEntities?.tabTitleE}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabEEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabe-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabe-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabe-container2 {
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

Tabe.defaultProps = {
  tabEEntities: [],
}

Tabe.propTypes = {
  tabEEntities: PropTypes.array,
}

export default Tabe

export async function getStaticProps(context) {
  try {
    const response = await tabEPageInitialPropsTq3yResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabEEntities: response,
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
