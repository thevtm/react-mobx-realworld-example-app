import { types } from "mobx-state-tree";

import { Author } from "./author";

export const Article = types.model("Article", {
  slug: types.identifier,
  title: types.string,
  description: types.string,
  body: types.string,
  tagList: types.array(types.string),
  createdAt: types.Date,
  updatedAt: types.Date,
  favorited: types.boolean,
  favoritesCount: types.integer,
  author: Author
});
