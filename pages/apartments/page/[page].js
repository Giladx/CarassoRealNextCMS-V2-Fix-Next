import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import apartmentsPageInitialPropsTqLUResource from '../../../resources/apartments-page-initial-props-tq_l-u'
import apartmentsPageInitialPathsTqSlResource from '../../../resources/apartments-page-initial-paths-tq_sl'

const Apartments1 = (props) => {
  return (
    <>
      <div className="apartments1-container">
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
              <div className="apartments1-container1">
                <Repeater
                  items={params}
                  renderItem={(ApartmentsEntities) => (
                    <>
                      <div className="apartments1-container2">
                        <span className="apartments1-text">
                          {ApartmentsEntities?.mainTitle}
                        </span>
                        <span className="apartments1-text1">
                          {ApartmentsEntities?.mainBoldTitle}
                        </span>
                        <span className="apartments1-text2">
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
          .apartments1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .apartments1-container1 {
            display: flex;
            flex-direction: column;
          }
          .apartments1-container2 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .apartments1-text {
            direction: rtl;
          }
          .apartments1-text1 {
            direction: rtl;
          }
          .apartments1-text2 {
            direction: rtl;
          }
        `}
      </style>
    </>
  )
}

Apartments1.defaultProps = {
  apartmentsEntities: [],
}

Apartments1.propTypes = {
  apartmentsEntities: PropTypes.array,
}

export default Apartments1

export async function getStaticProps(context) {
  try {
    const response = await apartmentsPageInitialPropsTqLUResource({
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

export async function getStaticPaths() {
  try {
    const response = await apartmentsPageInitialPathsTqSlResource({
      content_type: 'apartments',
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
