import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import urbanrenualPageInitialPropsTqRzResource from '../../../resources/urbanrenual-page-initial-props-tq_rz'
import urbanrenualPageInitialPathsTqRZResource from '../../../resources/urbanrenual-page-initial-paths-tq_r-z'

const Urbanrenual1 = (props) => {
  return (
    <>
      <div className="urbanrenual1-container">
        <Head>
          <title>Urbanrenual - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Urbanrenual - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="urbanrenual1-container1">
                <Repeater
                  items={params}
                  renderItem={(UrbanrenualEntities) => (
                    <>
                      <div className="urbanrenual1-container2">
                        <span>{UrbanrenualEntities?.id}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.urbanrenualEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .urbanrenual1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .urbanrenual1-container1 {
            display: flex;
            flex-direction: column;
          }
          .urbanrenual1-container2 {
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

Urbanrenual1.defaultProps = {
  urbanrenualEntities: [],
}

Urbanrenual1.propTypes = {
  urbanrenualEntities: PropTypes.array,
}

export default Urbanrenual1

export async function getStaticProps(context) {
  try {
    const response = await urbanrenualPageInitialPropsTqRzResource({
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
        urbanrenualEntities: response,
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
    const response = await urbanrenualPageInitialPathsTqRZResource({
      content_type: 'urbanRenual',
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
