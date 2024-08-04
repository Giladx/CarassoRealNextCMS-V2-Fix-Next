import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabAPageInitialPropsTq8pResource from '../../../resources/tab_a-page-initial-props-tq_8p'
import tabAPageInitialPathsTq0yResource from '../../../resources/tab_a-page-initial-paths-tq_0y'

const Taba11 = (props) => {
  return (
    <>
      <div className="taba11-container">
        <Head>
          <title>Taba1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Taba1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="taba11-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_aEntities) => (
                    <>
                      <div className="taba11-container2">
                        <span>{Tab_aEntities?.tabA}</span>
                        <span>{Tab_aEntities?.tabTypeA}</span>
                        <span>{Tab_aEntities?.tabASub}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabAEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .taba11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .taba11-container1 {
            display: flex;
            flex-direction: column;
          }
          .taba11-container2 {
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

Taba11.defaultProps = {
  tabAEntities: [],
}

Taba11.propTypes = {
  tabAEntities: PropTypes.array,
}

export default Taba11

export async function getStaticProps(context) {
  try {
    const response = await tabAPageInitialPropsTq8pResource({
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
        tabAEntities: response,
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
    const response = await tabAPageInitialPathsTq0yResource({
      content_type: 'tabs',
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
