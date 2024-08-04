import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import shoppingCentersPageInitialPropsTqZ7Resource from '../../../resources/shopping-centers-page-initial-props-tq_z7'
import shoppingCentersPageInitialPathsTqNVResource from '../../../resources/shopping-centers-page-initial-paths-tq_n-v'

const ShoppingCenters11 = (props) => {
  return (
    <>
      <div className="shopping-centers11-container">
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
              <div className="shopping-centers11-container1">
                <Repeater
                  items={params}
                  renderItem={(ShoppingCentersEntities) => (
                    <>
                      <div className="shopping-centers11-container2">
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
          .shopping-centers11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .shopping-centers11-container1 {
            display: flex;
            flex-direction: column;
          }
          .shopping-centers11-container2 {
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

ShoppingCenters11.defaultProps = {
  shoppingCentersEntities: [],
}

ShoppingCenters11.propTypes = {
  shoppingCentersEntities: PropTypes.array,
}

export default ShoppingCenters11

export async function getStaticProps(context) {
  try {
    const response = await shoppingCentersPageInitialPropsTqZ7Resource({
      ...context?.params,
      skip: (context.params.page - 1) * 10,
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

export async function getStaticPaths() {
  try {
    const response = await shoppingCentersPageInitialPathsTqNVResource({
      content_type: 'shoppingCenters',
    })
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
