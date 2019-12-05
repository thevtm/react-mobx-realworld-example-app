import { types } from "mobx-state-tree";

import { Author } from "./author";

export const Comment = types.model("Comment", {
  id: types.identifierNumber,
  createdAt: types.Date,
  updatedAt: types.Date,
  body: types.string,
  author: Author
});
