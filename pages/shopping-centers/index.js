import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import shoppingCentersPageInitialPropsTqH8Resource from '../../resources/shopping-centers-page-initial-props-tq_h8'

const ShoppingCenters1 = (props) => {
  return (
    <>
      <div className="shopping-centers1-container">
        <Head>
          <title>ShoppingCenters1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="ShoppingCenters1 - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="shopping-centers1-container1">
                <Repeater
                  items={params}
                  renderItem={(ShoppingCentersEntities) => (
                    <>
                      <div className="shopping-centers1-container2">
                        <span>{ShoppingCentersEntities?.CenterName}</span>
                        <span>{ShoppingCentersEntities?.CenterSlogan}</span>
                        <span>{ShoppingCentersEntities?.cityC}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.shoppingCentersEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .shopping-centers1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .shopping-centers1-container1 {
            display: flex;
            flex-direction: column;
          }
          .shopping-centers1-container2 {
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

ShoppingCenters1.defaultProps = {
  shoppingCentersEntities: [],
}

ShoppingCenters1.propTypes = {
  shoppingCentersEntities: PropTypes.array,
}

export default ShoppingCenters1

export async function getStaticProps(context) {
  try {
    const response = await shoppingCentersPageInitialPropsTqH8Resource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        shoppingCentersEntities: response,
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
