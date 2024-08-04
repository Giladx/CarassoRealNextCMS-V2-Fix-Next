import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import authorsPageInitialPropsTqSdResource from '../../resources/authors-page-initial-props-tq_sd'
import authorsPageInitialPathsTqHxResource from '../../resources/authors-page-initial-paths-tq_hx'

const Authors11 = (props) => {
  return (
    <>
      <div className="authors11-container">
        <Head>
          <title>Authors1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Authors1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(AuthorsEntity) => (
            <>
              <div className="authors11-container1">
                <h1>{AuthorsEntity?.name}</h1>
                <span>{AuthorsEntity?.email}</span>
                <span>{AuthorsEntity?.id}</span>
              </div>
            </>
          )}
          initialData={props.authorsEntity}
          persistDataDuringLoading={true}
          key={props?.authorsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .authors11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .authors11-container1 {
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

Authors11.defaultProps = {
  authorsEntity: [],
}

Authors11.propTypes = {
  authorsEntity: PropTypes.array,
}

export default Authors11

export async function getStaticProps(context) {
  try {
    const response = await authorsPageInitialPropsTqSdResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        authorsEntity: response?.data?.[0],
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
    const response = await authorsPageInitialPathsTqHxResource({
      content_type: 'authors',
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
