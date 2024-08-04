import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import staffPageInitialPropsTqLcResource from '../../../resources/staff-page-initial-props-tq_lc'
import staffPageInitialPathsTq8aResource from '../../../resources/staff-page-initial-paths-tq_8a'

const Staff1 = (props) => {
  return (
    <>
      <div className="staff1-container">
        <Head>
          <title>Staff - Carasso Real Estate</title>
          <meta name="description" content="Carasso Real Estate" />
          <meta property="og:title" content="Staff - Carasso Real Estate" />
          <meta property="og:description" content="Carasso Real Estate" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="staff1-container1">
                <Repeater
                  items={params}
                  renderItem={(StaffEntities) => (
                    <>
                      <div className="staff1-container2">
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
          .staff1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .staff1-container1 {
            display: flex;
            flex-direction: column;
          }
          .staff1-container2 {
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

Staff1.defaultProps = {
  staffEntities: [],
}

Staff1.propTypes = {
  staffEntities: PropTypes.array,
}

export default Staff1

export async function getStaticProps(context) {
  try {
    const response = await staffPageInitialPropsTqLcResource({
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

export async function getStaticPaths() {
  try {
    const response = await staffPageInitialPathsTq8aResource({
      content_type: 'staff',
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
