import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./Reducers/ticketsReducer";
import filtersReducer from "./Reducers/filtersReducer";

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  filter: filtersReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
