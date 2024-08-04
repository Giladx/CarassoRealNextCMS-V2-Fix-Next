import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import apartmentsPageInitialPropsTq9aResource from '../../resources/apartments-page-initial-props-tq_9a'

const Apartments = (props) => {
  return (
    <>
      <div className="apartments-container">
        <Head>
          <title>Apartments - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Apartments - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="apartments-container1">
                <Repeater
                  items={params}
                  renderItem={(ApartmentsEntities) => (
                    <>
                      <div className="apartments-container2">
                        <span className="apartments-text">
                          {ApartmentsEntities?.mainTitle}
                        </span>
                        <span className="apartments-text1">
                          {ApartmentsEntities?.mainBoldTitle}
                        </span>
                        <span className="apartments-text2">
                          {ApartmentsEntities?.descriptionC}
                        </span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.apartmentsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .apartments-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .apartments-container1 {
            display: flex;
            flex-direction: column;
          }
          .apartments-container2 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .apartments-text {
            direction: rtl;
          }
          .apartments-text1 {
            direction: rtl;
          }
          .apartments-text2 {
            direction: rtl;
          }
        `}
      </style>
    </>
  )
}

Apartments.defaultProps = {
  apartmentsEntities: [],
}

Apartments.propTypes = {
  apartmentsEntities: PropTypes.array,
}

export default Apartments

export async function getStaticProps(context) {
  try {
    const response = await apartmentsPageInitialPropsTq9aResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        apartmentsEntities: response,
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
