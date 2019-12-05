import { types } from "mobx-state-tree";

export const Author = types.model("Author", {
  username: types.string,
  bio: types.string,
  image: types.string,
  following: types.boolean
});
