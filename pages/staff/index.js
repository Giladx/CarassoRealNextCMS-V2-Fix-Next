import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import staffPageInitialPropsTqDcResource from '../../resources/staff-page-initial-props-tq_dc'

const Staff = (props) => {
  return (
    <>
      <div className="staff-container">
        <Head>
          <title>Staff - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Staff - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="staff-container1">
                <Repeater
                  items={params}
                  renderItem={(StaffEntities) => (
                    <>
                      <div className="staff-container2">
                        <span>{StaffEntities?.fullName}</span>
                        <span>{StaffEntities?.jobTitle}</span>
                        <span>{StaffEntities?.id}</span>
                      </div>
                    </>
                  )}
                />
              </div>
            </>
          )}
          initialData={props.staffEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .staff-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .staff-container1 {
            display: flex;
            flex-direction: column;
          }
          .staff-container2 {
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

Staff.defaultProps = {
  staffEntities: [],
}

Staff.propTypes = {
  staffEntities: PropTypes.array,
}

export default Staff

export async function getStaticProps(context) {
  try {
    const response = await staffPageInitialPropsTqDcResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        staffEntities: response,
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
