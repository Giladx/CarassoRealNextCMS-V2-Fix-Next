import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import shopsPageInitialPropsTqL6Resource from '../../resources/shops-page-initial-props-tq_l6'
import shopsPageInitialPathsTqNwResource from '../../resources/shops-page-initial-paths-tq_nw'

const Shops11 = (props) => {
  return (
    <>
      <div className="shops11-container">
        <Head>
          <title>Shops1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Shops1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(ShopsEntity) => (
            <>
              <div className="shops11-container1">
                <span>{ShopsEntity?.shopTitle}</span>
                <span>{ShopsEntity?.shopPhone}</span>
                <span>{ShopsEntity?.shopOpeningHours}</span>
              </div>
            </>
          )}
          initialData={props.shopsEntity}
          persistDataDuringLoading={true}
          key={props?.shopsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .shops11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .shops11-container1 {
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

Shops11.defaultProps = {
  shopsEntity: [],
}

Shops11.propTypes = {
  shopsEntity: PropTypes.array,
}

export default Shops11

export async function getStaticProps(context) {
  try {
    const response = await shopsPageInitialPropsTqL6Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        shopsEntity: response?.data?.[0],
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
    const response = await shopsPageInitialPathsTqNwResource({
      content_type: 'shops',
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
