import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabCPageInitialPropsTqBNResource from '../../../resources/tab_c-page-initial-props-tq_b-n'
import tabCPageInitialPathsTqKuResource from '../../../resources/tab_c-page-initial-paths-tq_ku'

const Tabc11 = (props) => {
  return (
    <>
      <div className="tabc11-container">
        <Head>
          <title>Tabc1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabc1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="tabc11-container1">
                <Repeater
                  items={params}
                  renderItem={(Tab_cEntities) => (
                    <>
                      <div className="tabc11-container2">
                        <span>{Tab_cEntities?.tabNameC}</span>
                        <span>{Tab_cEntities?.tabDescriptionC}</span>
                        <span>{Tab_cEntities?.id}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.tabCEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .tabc11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabc11-container1 {
            display: flex;
            flex-direction: column;
          }
          .tabc11-container2 {
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

Tabc11.defaultProps = {
  tabCEntities: [],
}

Tabc11.propTypes = {
  tabCEntities: PropTypes.array,
}

export default Tabc11

export async function getStaticProps(context) {
  try {
    const response = await tabCPageInitialPropsTqBNResource({
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
        tabCEntities: response,
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
    const response = await tabCPageInitialPathsTqKuResource({
      content_type: 'tabC',
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
