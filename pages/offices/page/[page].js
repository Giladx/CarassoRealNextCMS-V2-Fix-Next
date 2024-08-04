import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import officesPageInitialPropsTqKrResource from '../../../resources/offices-page-initial-props-tq_kr'
import officesPageInitialPathsTqCfResource from '../../../resources/offices-page-initial-paths-tq_cf'

const Offices11 = (props) => {
  return (
    <>
      <div className="offices11-container">
        <Head>
          <title>Offices1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Offices1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="offices11-container1">
                <Repeater
                  items={params}
                  renderItem={(OfficesEntities) => (
                    <>
                      <div className="offices11-container2">
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
          .offices11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .offices11-container1 {
            display: flex;
            flex-direction: column;
          }
          .offices11-container2 {
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

Offices11.defaultProps = {
  officesEntities: [],
}

Offices11.propTypes = {
  officesEntities: PropTypes.array,
}

export default Offices11

export async function getStaticProps(context) {
  try {
    const response = await officesPageInitialPropsTqKrResource({
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

export async function getStaticPaths() {
  try {
    const response = await officesPageInitialPathsTqCfResource({
      content_type: 'offices',
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
