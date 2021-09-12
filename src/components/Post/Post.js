import Avatar from "@material-ui/core/Avatar";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SendIcon from "@material-ui/icons/Send";
import ShareIcon from "@material-ui/icons/Share";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import React, { forwardRef } from "react";
import "./post.css";

const Post = forwardRef(({ name, message, decription, imgUrl }, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__header">
        <div className="post__headerLeft">
          <Avatar src={imgUrl} />
          <div className="post_header_detail">
            <h3>{name}</h3>
            <p>{message}</p>
          </div>
        </div>

        <MoreVertIcon style={{ cursor: "pointer" }} />
      </div>

      <div className="post__body">
        <p>{decription}</p>
      </div>

      <div className="post__footer">
        <div className="post__footer__option">
          <ThumbUpAltOutlinedIcon />
          <span>Like</span>
        </div>
        <div className="post__footer__option">
          <CommentOutlinedIcon />
          <span>Comment</span>
        </div>
        <div className="post__footer__option">
          <ShareIcon />
          <span>Share</span>
        </div>
        <div className="post__footer__option">
          <SendIcon />
          <span>Send</span>
        </div>
      </div>
    </div>
  );
});

export default Post;
