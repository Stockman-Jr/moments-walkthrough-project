import React from 'react';
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from '../../components/Avatar';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from "../../styles/Post.module.css";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  return <Card className={styles.Post}>
    <Card.Body>
      <Media className="align-items-center justify-content-between">
        <Link to={`/posts/${profile_id}`}>
          <Avatar src={profile_image} height={55}/>
          {owner}
        </Link>
        <div className='d-flex align-items-center'>
          <span>{updated_at}</span>

        </div>
      </Media>
    </Card.Body>
  </Card>
};

export default Post;