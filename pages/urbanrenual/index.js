import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import urbanrenualPageInitialPropsTq2qResource from '../../resources/urbanrenual-page-initial-props-tq_2q'

const Urbanrenual = (props) => {
  return (
    <>
      <div className="urbanrenual-container">
        <Head>
          <title>Urbanrenual - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Urbanrenual - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="urbanrenual-container1">
                <Repeater
                  items={params}
                  renderItem={(UrbanrenualEntities) => (
                    <>
                      <div className="urbanrenual-container2">
                        <span>{UrbanrenualEntities?.id}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.urbanrenualEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .urbanrenual-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .urbanrenual-container1 {
            display: flex;
            flex-direction: column;
          }
          .urbanrenual-container2 {
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

Urbanrenual.defaultProps = {
  urbanrenualEntities: [],
}

Urbanrenual.propTypes = {
  urbanrenualEntities: PropTypes.array,
}

export default Urbanrenual

export async function getStaticProps(context) {
  try {
    const response = await urbanrenualPageInitialPropsTq2qResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        urbanrenualEntities: response,
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
