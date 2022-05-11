import {configureAppStore} from '../configureStore';


const store = configureAppStore();

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


