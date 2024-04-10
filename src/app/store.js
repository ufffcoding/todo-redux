import { configureStore } from "@reduxjs/toolkit";
import todoSlice, {
  localStorageMiddleware,
  reHydrateStore,
} from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoSlice,
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
