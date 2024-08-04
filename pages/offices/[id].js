import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import officesPageInitialPropsTq1vResource from '../../resources/offices-page-initial-props-tq_1v'
import officesPageInitialPathsTqKrResource from '../../resources/offices-page-initial-paths-tq_kr'

const Offices = (props) => {
  return (
    <>
      <div className="offices-container">
        <Head>
          <title>Offices - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Offices - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(OfficesEntity) => (
            <>
              <div className="offices-container1">
                <span>{OfficesEntity?.brandName}</span>
                <span>{OfficesEntity?.brandSlogan}</span>
                <span>{OfficesEntity?.cityC}</span>
              </div>
            </>
          )}
          initialData={props.officesEntity}
          persistDataDuringLoading={true}
          key={props?.officesEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .offices-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .offices-container1 {
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

Offices.defaultProps = {
  officesEntity: [],
}

Offices.propTypes = {
  officesEntity: PropTypes.array,
}

export default Offices

export async function getStaticProps(context) {
  try {
    const response = await officesPageInitialPropsTq1vResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        officesEntity: response?.data?.[0],
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
    const response = await officesPageInitialPathsTqKrResource({
      content_type: 'offices',
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
