import React, { useState } from 'react';
import './BoardPage.module.css';

const BoardPage: React.FC = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' },
  ]);

  return (
    <div className="board-container">
      <h1 className="board-title">Community Board</h1>
      <ul className="board-list">
        {posts.map(post => (
          <li key={post.id} className="board-item">
            <h2 className="board-item-title">{post.title}</h2>
            <p className="board-item-content">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardPage;
