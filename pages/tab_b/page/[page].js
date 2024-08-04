import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabBPageInitialPropsTq8gResource from '../../../resources/tab_b-page-initial-props-tq_8g'
import tabBPageInitialPathsTqDKResource from '../../../resources/tab_b-page-initial-paths-tq_d-k'

const Tabb1 = (props) => {
  return (
    <>
      <div className="tabb1-container">
        <Head>
          <title>Tabb - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabb - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabb1-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_bEntities) => (
                    <>
                      <div className="tabb1-container2">
                        <span>{Tab_bEntities?.tabNameTypeB}</span>
                        <span>{Tab_bEntities?.featuredTitle1B}</span>
                        <span>{Tab_bEntities?.featuredDescription1B}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabBEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabb1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabb1-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabb1-container2 {
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

Tabb1.defaultProps = {
  tabBEntities: [],
}

Tabb1.propTypes = {
  tabBEntities: PropTypes.array,
}

export default Tabb1

export async function getStaticProps(context) {
  try {
    const response = await tabBPageInitialPropsTq8gResource({
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
        tabBEntities: response,
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
    const response = await tabBPageInitialPathsTqDKResource({
      content_type: 'tabB',
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
