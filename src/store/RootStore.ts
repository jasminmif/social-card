import { types } from "mobx-state-tree";
import { UserStore } from "./UserStore";

export const RootStore = types.model({
	userStore: UserStore,
});

let _store: any = null;

export function initializeRootStore() {
	_store = RootStore.create({
		userStore: { users: [], isLoading: false },
	});
	return _store;
}
