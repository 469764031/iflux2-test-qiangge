/**
 * Created by of2163 on 2017/3/31.
 */
import React, {Component} from 'react'
import {StoreProvider} from 'iflux2'
import AppStore from './store'
import {QueryQL} from './ql';


@StoreProvider(AppStore, {debug: true})
export default class List extends Component {
  static defaultProps = {
    dataList: QueryQL
  };

  componentDidMount() {
    this.props.store.query()
  }

  render() {
    return (
      <div>11</div>
    )
  }
}