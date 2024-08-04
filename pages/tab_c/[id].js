import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabCPageInitialPropsTqRdResource from '../../resources/tab_c-page-initial-props-tq_rd'
import tabCPageInitialPathsTqE4Resource from '../../resources/tab_c-page-initial-paths-tq_e4'

const Tabc = (props) => {
  return (
    <>
      <div className="tabc-container">
        <Head>
          <title>Tabc - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabc - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(Tab_cEntity) => (
            <>
              <div className="tabc-container1">
                <span>{Tab_cEntity?.tabNameC}</span>
                <span>{Tab_cEntity?.tabDescriptionC}</span>
                <span>{Tab_cEntity?.id}</span>
              </div>
            </>
          )}
          initialData={props.tabCEntity}
          persistDataDuringLoading={true}
          key={props?.tabCEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .tabc-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabc-container1 {
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

Tabc.defaultProps = {
  tabCEntity: [],
}

Tabc.propTypes = {
  tabCEntity: PropTypes.array,
}

export default Tabc

export async function getStaticProps(context) {
  try {
    const response = await tabCPageInitialPropsTqRdResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabCEntity: response?.data?.[0],
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
    const response = await tabCPageInitialPathsTqE4Resource({
      content_type: 'tabC',
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
