/**
 * Created by of2163 on 2017/3/31.
 */
import {Action, Actor} from 'iflux2';


export default class GalleryActor extends Actor {
  defaultState() {
    return {
      dataList:{}
    }
  }

  @Action('list:query')
  search(state, value) {
    return state.set('dataList', value);
  }

}