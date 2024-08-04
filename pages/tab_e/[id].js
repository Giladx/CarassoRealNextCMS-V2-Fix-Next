import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import tabEPageInitialPropsTq26Resource from '../../resources/tab_e-page-initial-props-tq_26'
import tabEPageInitialPathsTq20Resource from '../../resources/tab_e-page-initial-paths-tq_20'

const Tabe11 = (props) => {
  return (
    <>
      <div className="tabe11-container">
        <Head>
          <title>Tabe1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Tabe1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(Tab_eEntity) => (
            <>
              <div className="tabe11-container1">
                <span>{Tab_eEntity?.tabTypeE}</span>
                <span>{Tab_eEntity?.tabNameE}</span>
                <span>{Tab_eEntity?.tabTitleE}</span>
              </div>
            </>
          )}
          initialData={props.tabEEntity}
          persistDataDuringLoading={true}
          key={props?.tabEEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .tabe11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .tabe11-container1 {
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

Tabe11.defaultProps = {
  tabEEntity: [],
}

Tabe11.propTypes = {
  tabEEntity: PropTypes.array,
}

export default Tabe11

export async function getStaticProps(context) {
  try {
    const response = await tabEPageInitialPropsTq26Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        tabEEntity: response?.data?.[0],
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
    const response = await tabEPageInitialPathsTq20Resource({
      content_type: 'tabE',
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
