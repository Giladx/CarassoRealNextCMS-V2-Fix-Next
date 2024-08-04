import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import successstoriesPageInitialPropsTqEResource from '../../resources/successstories-page-initial-props-tq__e'
import successstoriesPageInitialPathsTqFmResource from '../../resources/successstories-page-initial-paths-tq_fm'

const Successstories = (props) => {
  return (
    <>
      <div className="successstories-container">
        <Head>
          <title>Successstories - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Successstories - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(SuccessstoriesEntity) => (
            <>
              <div className="successstories-container1">
                <span>{SuccessstoriesEntity?.brandName}</span>
                <span>{SuccessstoriesEntity?.brandSlogan}</span>
                <span>{SuccessstoriesEntity?.cityC}</span>
              </div>
            </>
          )}
          initialData={props.successstoriesEntity}
          persistDataDuringLoading={true}
          key={props?.successstoriesEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .successstories-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .successstories-container1 {
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

Successstories.defaultProps = {
  successstoriesEntity: [],
}

Successstories.propTypes = {
  successstoriesEntity: PropTypes.array,
}

export default Successstories

export async function getStaticProps(context) {
  try {
    const response = await successstoriesPageInitialPropsTqEResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        successstoriesEntity: response?.data?.[0],
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
    const response = await successstoriesPageInitialPathsTqFmResource({
      content_type: 'successStories',
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
