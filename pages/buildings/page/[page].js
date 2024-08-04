import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import buildingsPageInitialPropsTqKeResource from '../../../resources/buildings-page-initial-props-tq_ke'
import buildingsPageInitialPathsTq0yResource from '../../../resources/buildings-page-initial-paths-tq_0y'

const Buildings1 = (props) => {
  return (
    <>
      <div className="buildings1-container">
        <Head>
          <title>Buildings - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Buildings - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="buildings1-container1">
                <Repeater
                  items={params}
                  renderItem={(BuildingsEntities) => (
                    <>
                      <div className="buildings1-container2">
                        <span>{BuildingsEntities?.buildingName}</span>
                        <span>{BuildingsEntities?.buildingStatus}</span>
                        <span>{BuildingsEntities?.sfId}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.buildingsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .buildings1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .buildings1-container1 {
            display: flex;
            flex-direction: column;
          }
          .buildings1-container2 {
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

Buildings1.defaultProps = {
  buildingsEntities: [],
}

Buildings1.propTypes = {
  buildingsEntities: PropTypes.array,
}

export default Buildings1

export async function getStaticProps(context) {
  try {
    const response = await buildingsPageInitialPropsTqKeResource({
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
        buildingsEntities: response,
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
    const response = await buildingsPageInitialPathsTq0yResource({
      content_type: 'buildings',
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
