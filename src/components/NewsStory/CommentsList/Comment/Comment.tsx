import { Card } from "@mui/material";
import React from "react";
import { useGetNewsItemCommentsQuery } from "../../../../redux/services/news/newsApi";
import st from "./styles.module.scss";
import parse from "html-react-parser";
import { useToggle } from "../../../../hooks/useToggle";
import classNames from "classnames";

interface IProps {
  id: number;
  isChild?: boolean;
}

const Comment = React.memo(({ id, isChild = false }: IProps) => {
  const { data } = useGetNewsItemCommentsQuery(id);
  const { isOpen, onToggle } = useToggle();

  const hasChilds = data?.kids && data.kids?.length;

  return (
    <div className={classNames(st.wrapper, { [st.childNode]: isChild })}>
      <Card className={st.card} onClick={onToggle}>
        {!!data && (
          <div className={st.content}>
            <div className={st.main}>
              <div>Author: {data.by}</div>
              <div>{parse(data.text)}</div>
            </div>

            {hasChilds && <div className={st.replies}>{data.kids.length} replies</div>}
          </div>
        )}
      </Card>

      {hasChilds && isOpen ? data.kids.map((com) => <Comment key={com} id={com} isChild />) : null}
    </div>
  );
});

export default Comment;
