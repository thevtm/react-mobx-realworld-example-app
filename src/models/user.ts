import { types } from "mobx-state-tree";

export const User = types.model("User", {
  username: types.string,
  email: types.string,
  token: types.string,
  bio: types.string,
  image: types.maybeNull(types.string)
});
