import { Instance, types } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { initializeRootStore } from "./RootStore";
import { UserStore } from "./UserStore";

export const RootStore = types.model({
  userStore: UserStore,
});

export type RootInstance = Instance<typeof RootStore>;
const RootStoreContext = createContext<null | RootInstance>(null);
const store = initializeRootStore();

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
}

export function useStore(): Instance<typeof RootStore> {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}
