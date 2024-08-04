import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import authorsPageInitialPropsTqMResource from '../../resources/authors-page-initial-props-tq__m'

const Authors = (props) => {
  return (
    <>
      <div className="authors-container">
        <Head>
          <title>Authors - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Authors - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="authors-container1">
                <Repeater
                  items={params}
                  renderItem={(AuthorsEntities) => (
                    <>
                      <div className="authors-container2">
                        <h1>{AuthorsEntities?.name}</h1>
                        <span>{AuthorsEntities?.name}</span>
                        <span>{AuthorsEntities?.email}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.authorsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .authors-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .authors-container1 {
            display: flex;
            flex-direction: column;
          }
          .authors-container2 {
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

Authors.defaultProps = {
  authorsEntities: [],
}

Authors.propTypes = {
  authorsEntities: PropTypes.array,
}

export default Authors

export async function getStaticProps(context) {
  try {
    const response = await authorsPageInitialPropsTqMResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        authorsEntities: response,
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
