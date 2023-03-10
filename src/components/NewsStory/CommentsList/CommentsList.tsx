import React from "react";
import Comment from "./Comment/Comment";
import st from "./styles.module.scss";

interface IProps {
  commentIds?: number[];
}

const CommentsList = React.memo(({ commentIds = [] }: IProps) => {
  return (
    <div className={st.list}>
      {commentIds.map((c) => (
        <Comment id={c} key={c}/>
      ))}
    </div>
  );
});

export default CommentsList;
