import { types } from "mobx-state-tree";

export const Profile = types.model("Profile", {
  username: types.string,
  bio: types.string,
  image: types.maybeNull(types.string),
  following: types.boolean
});
