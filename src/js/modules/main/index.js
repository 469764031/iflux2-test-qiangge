/**
 * Created by of2163 on 2017/3/30.
 *
 */
import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div>
        <h3>主页面</h3>
        { this.props.children }
      </div>
    )
  }
}