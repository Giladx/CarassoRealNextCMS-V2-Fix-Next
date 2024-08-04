import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import successstoriesPageInitialPropsTqS2Resource from '../../resources/successstories-page-initial-props-tq_s2'

const Successstories1 = (props) => {
  return (
    <>
      <div className="successstories1-container">
        <Head>
          <title>Successstories1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Successstories1 - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="successstories1-container1">
                <Repeater
                  items={params}
                  renderItem={(SuccessstoriesEntities) => (
                    <>
                      <div className="successstories1-container2">
                        <span>{SuccessstoriesEntities?.brandName}</span>
                        <span>{SuccessstoriesEntities?.brandSlogan}</span>
                        <span>{SuccessstoriesEntities?.cityC}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.successstoriesEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .successstories1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .successstories1-container1 {
            display: flex;
            flex-direction: column;
          }
          .successstories1-container2 {
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

Successstories1.defaultProps = {
  successstoriesEntities: [],
}

Successstories1.propTypes = {
  successstoriesEntities: PropTypes.array,
}

export default Successstories1

export async function getStaticProps(context) {
  try {
    const response = await successstoriesPageInitialPropsTqS2Resource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        successstoriesEntities: response,
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
