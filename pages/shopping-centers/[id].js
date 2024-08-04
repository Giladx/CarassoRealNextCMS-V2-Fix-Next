import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import shoppingCentersPageInitialPropsTq3uResource from '../../resources/shopping-centers-page-initial-props-tq_3u'
import shoppingCentersPageInitialPathsTqOQResource from '../../resources/shopping-centers-page-initial-paths-tq_o-q'

const ShoppingCenters = (props) => {
  return (
    <>
      <div className="shopping-centers-container">
        <Head>
          <title>ShoppingCenters - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="ShoppingCenters - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(ShoppingCentersEntity) => (
            <>
              <div className="shopping-centers-container1">
                <span>{ShoppingCentersEntity?.CenterName}</span>
                <span>{ShoppingCentersEntity?.CenterSlogan}</span>
                <span>{ShoppingCentersEntity?.cityC}</span>
              </div>
            </>
          )}
          initialData={props.shoppingCentersEntity}
          persistDataDuringLoading={true}
          key={props?.shoppingCentersEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .shopping-centers-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .shopping-centers-container1 {
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

ShoppingCenters.defaultProps = {
  shoppingCentersEntity: [],
}

ShoppingCenters.propTypes = {
  shoppingCentersEntity: PropTypes.array,
}

export default ShoppingCenters

export async function getStaticProps(context) {
  try {
    const response = await shoppingCentersPageInitialPropsTq3uResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        shoppingCentersEntity: response?.data?.[0],
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
    const response = await shoppingCentersPageInitialPathsTqOQResource({
      content_type: 'shoppingCenters',
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
