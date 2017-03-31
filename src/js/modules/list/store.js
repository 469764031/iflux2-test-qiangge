/**
 * Created by machenike on 2017/3/31.
 */
import {Store} from 'iflux2';
import ListActor from './actor/list-actor';
import {fromJS} from 'immutable';
export default class AppStore extends Store {
  constructor(props) {
    super(props);
    window.store = this;
  }

  bindActor() {
    return [
      new ListActor
    ]
  }

  query = () => {
    $.ajax({
      type: "GET",
      url: "http://localhost:8093/demo",
      dataType: "json",
      success: function(data){
        console.log(data);
      }
    });
    let dataList = {};
    this.dispatch('list:query', fromJS(dataList))
  };
}