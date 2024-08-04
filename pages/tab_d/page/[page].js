import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabDPageInitialPropsTqSiResource from '../../../resources/tab_d-page-initial-props-tq_si'
import tabDPageInitialPathsTqKaResource from '../../../resources/tab_d-page-initial-paths-tq_ka'

const Tabd1 = (props) => {
  return (
    <>
      <div className="tabd1-container">
        <Head>
          <title>Tabd - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabd - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabd1-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_dEntities) => (
                    <>
                      <div className="tabd1-container2">
                        <span>{Tab_dEntities?.tabTypeD}</span>
                        <span>{Tab_dEntities?.tabNameD}</span>
                        <span>{Tab_dEntities?.tabTitleD}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabDEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabd1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabd1-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabd1-container2 {
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

Tabd1.defaultProps = {
  tabDEntities: [],
}

Tabd1.propTypes = {
  tabDEntities: PropTypes.array,
}

export default Tabd1

export async function getStaticProps(context) {
  try {
    const response = await tabDPageInitialPropsTqSiResource({
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
        tabDEntities: response,
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
    const response = await tabDPageInitialPathsTqKaResource({
      content_type: 'tabD',
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
