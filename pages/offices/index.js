import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import officesPageInitialPropsTqV9Resource from '../../resources/offices-page-initial-props-tq_v9'

const Offices1 = (props) => {
  return (
    <>
      <div className="offices1-container">
        <Head>
          <title>Offices1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Offices1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="offices1-container1">
                <Repeater
                  items={params}
                  renderItem={(OfficesEntities) => (
                    <>
                      <div className="offices1-container2">
                        <span>{OfficesEntities?.brandName}</span>
                        <span>{OfficesEntities?.brandSlogan}</span>
                        <span>{OfficesEntities?.cityC}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.officesEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .offices1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .offices1-container1 {
            display: flex;
            flex-direction: column;
          }
          .offices1-container2 {
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

Offices1.defaultProps = {
  officesEntities: [],
}

Offices1.propTypes = {
  officesEntities: PropTypes.array,
}

export default Offices1

export async function getStaticProps(context) {
  try {
    const response = await officesPageInitialPropsTqV9Resource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        officesEntities: response,
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
