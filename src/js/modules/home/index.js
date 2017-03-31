/**
 * Created by of2163 on 2017/3/31.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home页面</h3>
        <Link to="/list">列表</Link>
      </div>
    )
  }
}