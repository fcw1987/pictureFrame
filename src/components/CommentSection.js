/*
import React, { useState } from 'react';
import '../App.css';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const addComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="comment-section">
      <h2>Guestbook</h2>
      <input
        type="text"
        placeholder="Add a comment"
        value={newComment}
        onChange={handleCommentChange}
      />
      <button onClick={addComment}>Submit</button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
*/