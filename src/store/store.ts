import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { gitReducer } from "./gitRepo/gitRepoReduscer";
import gitSaga from "./sagas/gitSaga";

let reducers = combineReducers({
  gitRepo: gitReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(gitSaga);

// ______type of state___________

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

// ______type of actions___________

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>;

// ______type of thunk-creator___________


export interface IGitRepo {
  name: string;
  language: string;
  description: string;
}
