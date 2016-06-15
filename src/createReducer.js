/*
  Copyright © 2016 Sergey Sova <i.am@lestad.net> (https://lestad.top)
  This work is free. You can redistribute it and/or modify it under the
  terms of the Do What The Fuck You Want To Public License, Version 2,
  as published by Sam Hocevar. See the COPYING file or http://www.wtfpl.net/
  for more details.
*/

const { Map, List, fromJS } = require('immutable');

module.exports =
function createReducer(handlers, initialState) {
 return (originState = initialState, action) => {
   let state = originState;

   if (!Map.isMap(originState) && !List.isList(originState)) {
     state = fromJS(originState);
   }

   const handler = handlers[action.type];

   if (!handler) {
     return state;
   }

   state = handler(state, action);

   if (!Map.isMap(state) && !List.isList(state)) {
     throw new TypeError('Reducers must return Immutable objects');
   }

   return state;
 };
}
