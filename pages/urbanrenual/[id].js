import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import urbanrenualPageInitialPropsTqQvResource from '../../resources/urbanrenual-page-initial-props-tq_qv'
import urbanrenualPageInitialPathsTqR4Resource from '../../resources/urbanrenual-page-initial-paths-tq_r4'

const Urbanrenual11 = (props) => {
  return (
    <>
      <div className="urbanrenual11-container">
        <Head>
          <title>Urbanrenual1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Urbanrenual1 - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(UrbanrenualEntity) => (
            <>
              <div className="urbanrenual11-container1">
                <span>{UrbanrenualEntity?.id}</span>
              </div>
            </>
          )}
          initialData={props.urbanrenualEntity}
          persistDataDuringLoading={true}
          key={props?.urbanrenualEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .urbanrenual11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .urbanrenual11-container1 {
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

Urbanrenual11.defaultProps = {
  urbanrenualEntity: [],
}

Urbanrenual11.propTypes = {
  urbanrenualEntity: PropTypes.array,
}

export default Urbanrenual11

export async function getStaticProps(context) {
  try {
    const response = await urbanrenualPageInitialPropsTqQvResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        urbanrenualEntity: response?.data?.[0],
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
    const response = await urbanrenualPageInitialPathsTqR4Resource({
      content_type: 'urbanRenual',
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
