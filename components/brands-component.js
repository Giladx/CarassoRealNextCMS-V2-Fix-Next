import React from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import brandsComponentResource from '../resources/brands-component'

const BrandsComponent = (props) => {
  return (
    <>
      <div className={`brands-component-container ${props.rootClassName} `}>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <div className="brands-component-container1">
                <Repeater
                  items={params}
                  renderItem={(context_3c9bqh) => <></>}
                />
              </div>
            </>
          )}
          initialData={props.context3c9bqhProp}
          persistDataDuringLoading={true}
          initialData={props.context3c9bqhProp}
          persistDataDuringLoading={true}
        />
      </div>
      <style jsx>
        {`
          .brands-component-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .brands-component-container1 {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

BrandsComponent.defaultProps = {
  rootClassName: '',
}

BrandsComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default BrandsComponent

export async function getStaticProps(context) {
  try {
    const context3c9bqhProp = await brandsComponentResource({
      ...context?.params,
    })
    const context3c9bqhProp = await brandsComponentResource({
      ...context?.params,
    })
    return {
      props: {
        context3c9bqhProp: context3c9bqhProp,
        context3c9bqhProp: context3c9bqhProp,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      props: {},
      revalidate: 60,
    }
  }
}
