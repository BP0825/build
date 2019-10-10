/** @jsx jsx */
import { jsx } from '@emotion/core'

import React from 'react'
import { Builder } from '@builder.io/sdk'
import { BuilderStoreContext } from 'src/store/builder-store'

export interface SpacerProps {
  id: string
  position: 'before' | 'after'
}

interface SpacerState {
  grow: boolean
}

class Growser extends React.Component {
  state = {
    grow: false,
    show: false
  }
}

export class InsertSpacer extends React.Component<SpacerProps, SpacerState> {
  componentDidMount() {
    // TODO: only after grow
    // this.setState({
    //   grow: true
    // })
  }

  render() {
    if (!Builder.isEditing) {
      return null
    }

    return (
      <BuilderStoreContext.Consumer>
        {({ state }) => {
          const spacer = state._spacer
          if (!(spacer && spacer.subject === this.props.id)) {
            return null
          }

          if (['top', 'left'].includes(spacer.direction) && this.props.position === 'after') {
            return null
          }
          if (['bottom', 'right'].includes(spacer.direction) && this.props.position === 'before') {
            return null
          }

          console.log('render?', spacer, this.props)

          return (
            <div
              className="builder__spacer"
              css={{
                // width: 0,
                width: '100%',
                height: 30,
                backgroundColor: 'lightsteelblue',
                borderRadius: 4,
                border: '1px solid steelblue'
                // ...(this.state.grow && {
                //   width: '100%',
                //   height: 30
                // })
              }}
            />
          )
        }}
      </BuilderStoreContext.Consumer>
    )
  }
}