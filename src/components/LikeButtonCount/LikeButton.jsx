// create a like button where the text of button changes to like -> liked
//  there should be like count and it should be increased by one  and vice versa it should decrease by 1
import React, { useState } from 'react';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(100);

  const toggleLike = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
    setLikeCount((prevLikeCount) => (isLiked ? prevLikeCount - 1 : prevLikeCount + 1));
  };

  return (
    <div className='text-center mt-5'>
      <button style={{ height: "40px"}} className={isLiked ? 'btn btn-success' : 'btn btn-danger'} onClick={toggleLike}>{isLiked ? 'Liked' : 'Like'}:{" "}{likeCount}</button>
      
    </div>
  );
};

export default LikeButton;
