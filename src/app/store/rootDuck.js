import { combineReducers } from "redux";

import { metronic } from "../../_metronic";

export const rootReducer = combineReducers({
  i18n: metronic.i18n.reducer,
  builder: metronic.builder.reducer
});


