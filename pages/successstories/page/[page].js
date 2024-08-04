import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import successstoriesPageInitialPropsTqOkResource from '../../../resources/successstories-page-initial-props-tq_ok'
import successstoriesPageInitialPathsTqOJResource from '../../../resources/successstories-page-initial-paths-tq_o-j'

const Successstories11 = (props) => {
  return (
    <>
      <div className="successstories11-container">
        <Head>
          <title>Successstories1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta
            property="og:title"
            content="Successstories1 - Carasso Real Estate"
          />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="successstories11-container1">
                <Repeater
                  items={params}
                  renderItem={(SuccessstoriesEntities) => (
                    <>
                      <div className="successstories11-container2">
                        <span>{SuccessstoriesEntities?.brandName}</span>
                        <span>{SuccessstoriesEntities?.brandSlogan}</span>
                        <span>{SuccessstoriesEntities?.cityC}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.successstoriesEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .successstories11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .successstories11-container1 {
            display: flex;
            flex-direction: column;
          }
          .successstories11-container2 {
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

Successstories11.defaultProps = {
  successstoriesEntities: [],
}

Successstories11.propTypes = {
  successstoriesEntities: PropTypes.array,
}

export default Successstories11

export async function getStaticProps(context) {
  try {
    const response = await successstoriesPageInitialPropsTqOkResource({
      ...context?.params,
      skip: (context.params.page - 1) * 10,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        successstoriesEntities: response,
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
    const response = await successstoriesPageInitialPathsTqOJResource({
      content_type: 'successStories',
    })
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
