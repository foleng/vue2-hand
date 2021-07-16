/*
 * :file description: 
 * :name: \vue2-hand\src\init.js
 * :author: 黄艺
 * :copyright: (c) 2021, Tungee
 * :date created: 2021-07-16 17:42:54
 * :last editor: 黄艺
 * :date last edited: 2021-07-16 17:45:30
 */
import {initState} from './initState'

function initMixin(Vue) {
 Vue.prototype._init =  function (options) {
   const vm = this;
   vm.$options = options

   initState(vm);
 }
}


export {initMixin}