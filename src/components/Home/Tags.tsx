import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import LoadingSpinner from "../LoadingSpinner";
import { useStore } from "../../stores/provider";

const Tags: React.FC = observer(() => {
  const { tags } = useStore();

  if (tags.state == "done") {
    return (
      <div className="tag-list">
        {tags.value.map(tag => {
          return (
            <Link
              to={{
                pathname: "/",
                search: "?tab=tag&tag=" + tag
              }}
              className="tag-default tag-pill"
              key={tag}
            >
              {tag}
            </Link>
          );
        })}
      </div>
    );
  } else {
    return <LoadingSpinner />;
  }
});

export default Tags;
