import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabFPageInitialPropsTqPhResource from '../../../resources/tab_f-page-initial-props-tq_ph'
import tabFPageInitialPathsTqGResource from '../../../resources/tab_f-page-initial-paths-tq_g_'

const Tabf11 = (props) => {
  return (
    <>
      <div className="tabf11-container">
        <Head>
          <title>Tabf1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabf1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabf11-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_fEntities) => (
                    <>
                      <div className="tabf11-container2">
                        <span>{Tab_fEntities?.tabTypeF}</span>
                        <span>{Tab_fEntities?.tabNameF}</span>
                        <span>{Tab_fEntities?.tabSubtitleF}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabFEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabf11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabf11-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabf11-container2 {
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

Tabf11.defaultProps = {
  tabFEntities: [],
}

Tabf11.propTypes = {
  tabFEntities: PropTypes.array,
}

export default Tabf11

export async function getStaticProps(context) {
  try {
    const response = await tabFPageInitialPropsTqPhResource({
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
        tabFEntities: response,
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
    const response = await tabFPageInitialPathsTqGResource({
      content_type: 'tabF',
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
