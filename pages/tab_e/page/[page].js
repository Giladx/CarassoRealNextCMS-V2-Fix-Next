import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabEPageInitialPropsTqOPResource from '../../../resources/tab_e-page-initial-props-tq_o-p'
import tabEPageInitialPathsTqM7Resource from '../../../resources/tab_e-page-initial-paths-tq_m7'

const Tabe1 = (props) => {
  return (
    <>
      <div className="tabe1-container">
        <Head>
          <title>Tabe - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabe - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabe1-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_eEntities) => (
                    <>
                      <div className="tabe1-container2">
                        <span>{Tab_eEntities?.tabTypeE}</span>
                        <span>{Tab_eEntities?.tabNameE}</span>
                        <span>{Tab_eEntities?.tabTitleE}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabEEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabe1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabe1-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabe1-container2 {
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

Tabe1.defaultProps = {
  tabEEntities: [],
}

Tabe1.propTypes = {
  tabEEntities: PropTypes.array,
}

export default Tabe1

export async function getStaticProps(context) {
  try {
    const response = await tabEPageInitialPropsTqOPResource({
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
        tabEEntities: response,
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
    const response = await tabEPageInitialPathsTqM7Resource({
      content_type: 'tabE',
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
