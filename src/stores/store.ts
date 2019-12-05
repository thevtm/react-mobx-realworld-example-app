import { types, Instance } from "mobx-state-tree";

import { Async } from "../models/utils/async";
import { defaultApi } from "../api-instances";

export const AppStore = types
  .model("AppStore", {
    tags: types.optional(Async(types.array(types.string)), {})
  })
  .actions(self => ({
    load: () => {
      self.tags.load(
        defaultApi.tagsGet().then(tagsResponse => tagsResponse.tags)
      );
    }
  }));

export type AppStoreType = Instance<typeof AppStore>;
