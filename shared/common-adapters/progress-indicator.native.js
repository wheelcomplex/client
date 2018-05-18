// @flow
import React, {Component} from 'react'
import {NativeActivityIndicator} from './native-wrappers.native'
import {globalColors, collapseStyles} from '../styles'

type Props = {
  style?: Object,
  white?: boolean,
  type?: 'Small' | 'Large',
}

class ProgressIndicator extends Component<Props> {
  render() {
    const size = this.props.type === 'Large' ? 'large' : 'small'

    return (
      <NativeActivityIndicator
        color={this.props.white ? globalColors.white : globalColors.black}
        size={size}
        style={collapseStyles([style, this.props.style])}
      />
    )
  }
}

const style = {
  alignItems: 'center',
  justifyContent: 'center',
}

export default ProgressIndicator
