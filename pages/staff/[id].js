import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import staffPageInitialPropsTqSwResource from '../../resources/staff-page-initial-props-tq_sw'
import staffPageInitialPathsTqRuResource from '../../resources/staff-page-initial-paths-tq_ru'

const Staff11 = (props) => {
  return (
    <>
      <div className="staff11-container">
        <Head>
          <title>Staff1 - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Staff1 - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(StaffEntity) => (
            <>
              <div className="staff11-container1">
                <span>{StaffEntity?.fullName}</span>
                <span>{StaffEntity?.jobTitle}</span>
                <span>{StaffEntity?.id}</span>
              </div>
            </>
          )}
          initialData={props.staffEntity}
          persistDataDuringLoading={true}
          key={props?.staffEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .staff11-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .staff11-container1 {
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

Staff11.defaultProps = {
  staffEntity: [],
}

Staff11.propTypes = {
  staffEntity: PropTypes.array,
}

export default Staff11

export async function getStaticProps(context) {
  try {
    const response = await staffPageInitialPropsTqSwResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        staffEntity: response?.data?.[0],
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
    const response = await staffPageInitialPathsTqRuResource({
      content_type: 'staff',
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
