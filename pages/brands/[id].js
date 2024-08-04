import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import brandsPageInitialPropsTqR1Resource from '../../resources/brands-page-initial-props-tq_r1'
import brandsPageInitialPathsTqG1Resource from '../../resources/brands-page-initial-paths-tq_g1'

const Brands = (props) => {
  return (
    <>
      <div className="brands-container">
        <Head>
          <title>Brands - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Brands - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(BrandsEntity) => (
            <>
              <div className="brands-container1">
                <span>{BrandsEntity?.brandName}</span>
                <span>{BrandsEntity?.brandSlogan}</span>
                <span>{BrandsEntity?.cityC}</span>
              </div>
            </>
          )}
          initialData={props.brandsEntity}
          persistDataDuringLoading={true}
          key={props?.brandsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .brands-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .brands-container1 {
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

Brands.defaultProps = {
  brandsEntity: [],
}

Brands.propTypes = {
  brandsEntity: PropTypes.array,
}

export default Brands

export async function getStaticProps(context) {
  try {
    const response = await brandsPageInitialPropsTqR1Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        brandsEntity: response?.data?.[0],
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
    const response = await brandsPageInitialPathsTqG1Resource({
      content_type: 'brands',
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
