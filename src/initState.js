/*
 * :file description: 
 * :name: \vue2-hand\src\initState.js
 * :author: 黄艺
 * :copyright: (c) 2021, Tungee
 * :date created: 2021-07-16 17:45:36
 * :last editor: 黄艺
 * :date last edited: 2021-07-16 17:50:48
 */

import {observe} from './observer/index.js'
export function initState (vm) {
  const opts = vm.$options;
  if (opts.props) {
    initProps(vm);
  }
  if (opts.methods) {
    initMethods(vm);
  }
  if (opts.data) {
    initData(vm);
  }
  if (opts.computed) {
    initComputed(vm)
  }
  if (opts.watch) {
    initWatch(vm);
  }
}


function initProps(){}
function initMethods(){}
function initData (vm) {
  let data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? data.call(vm) : data;
  observe(data);
}
function initComputed(){}
function initWatch(){}