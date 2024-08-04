import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import buildingsPageInitialPropsTqUmResource from '../../resources/buildings-page-initial-props-tq_um'
import buildingsPageInitialPathsTqLwResource from '../../resources/buildings-page-initial-paths-tq_lw'

const Buildings11 = (props) => {
  return (
    <>
      <div className="buildings11-container">
        <Head>
          <title>Buildings1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Buildings1 - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(BuildingsEntity) => (
            <>
              <div className="buildings11-container1">
                <span>{BuildingsEntity?.buildingName}</span>
                <span>{BuildingsEntity?.buildingStatus}</span>
                <span>{BuildingsEntity?.sfId}</span>
              </div>
            </>
          )}
          initialData={props.buildingsEntity}
          persistDataDuringLoading={true}
          key={props?.buildingsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .buildings11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .buildings11-container1 {
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

Buildings11.defaultProps = {
  buildingsEntity: [],
}

Buildings11.propTypes = {
  buildingsEntity: PropTypes.array,
}

export default Buildings11

export async function getStaticProps(context) {
  try {
    const response = await buildingsPageInitialPropsTqUmResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        buildingsEntity: response?.data?.[0],
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
    const response = await buildingsPageInitialPathsTqLwResource({
      content_type: 'buildings',
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
