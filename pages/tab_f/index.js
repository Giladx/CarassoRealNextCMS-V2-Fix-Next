import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabFPageInitialPropsTqQhResource from '../../resources/tab_f-page-initial-props-tq_qh'

const Tabf1 = (props) => {
  return (
    <>
      <div className="tabf1-container">
        <Head>
          <title>Tabf1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabf1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabf1-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_fEntities) => (
                    <>
                      <div className="tabf1-container2">
                        <span>{Tab_fEntities?.tabTypeF}</span>
                        <span>{Tab_fEntities?.tabNameF}</span>
                        <span>{Tab_fEntities?.tabSubtitleF}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabFEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabf1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabf1-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabf1-container2 {
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

Tabf1.defaultProps = {
  tabFEntities: [],
}

Tabf1.propTypes = {
  tabFEntities: PropTypes.array,
}

export default Tabf1

export async function getStaticProps(context) {
  try {
    const response = await tabFPageInitialPropsTqQhResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabFEntities: response,
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
