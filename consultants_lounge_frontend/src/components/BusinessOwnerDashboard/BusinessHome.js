import React, { useState } from 'react';

import '../../styles/BusinessHome.css';

import Options from '../../resources/Options.png';
import CourseA from '../../resources/CourseA.png';
import CourseB from '../../resources/CourseB.png';
import Arrow from '../../resources/Arrow.png';
import A from '../../resources/A.png';
import P from '../../resources/P.png';
import LS from '../../resources/LS.png';
import DW from '../../resources/DW.png';
import NC from '../../resources/NC.png';
import ColoredPencils from '../../resources/ColoredPencils.png';
import BlankProfile from '../../resources/BlankProfile.png';

export default function BusinessesHome() {


  // State for managing posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: CourseA,
      author: 'Olivia Rhye',
      date: '20 Jan 2022',
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      tags: ['Design', 'Research', 'Presentation']
    },
    {
      id: 2,
      image: CourseB,
      author: 'Phoenix Baker',
      date: '19 Jan 2022',
      title: 'Migrating to Linear 101',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
      tags: ['Design', 'Research']
    }
  ]);

  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null); // Tracks which post is being edited
  const [editedContent, setEditedContent] = useState({ title: '', description: '' });


  // Function to add a post
  const addPost = () => {
    const newPost = {
      id: Date.now(), // Unique ID based on timestamp
      image: BlankProfile, // Placeholder image
      author: 'New Author',
      date: 'Today',
      title: 'New Post Title',
      description: 'New post description.',
      tags: ['Example']
    };
    setPosts([...posts, newPost]);
    setShowOptionsMenu(false); // Close menu after action

  };

  // Function to delete a post
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
    setShowOptionsMenu(false); // Close menu after action

  };

  const handleEditClick = (post) => {
    setEditingPostId(post.id);
    setEditedContent({ image: post.image, author: post.author, date: post.date, title: post.title, description: post.description, tags: post.tags });
  };

  // Function to save changes to the post
  const handleSaveClick = () => {

    // Update the post with the edited content
    setPosts(posts.map(post =>
      post.id === editingPostId
        ? { ...post, image: editedContent.image, author: editedContent.author, date: editedContent.date, title: editedContent.title, description: editedContent.description, tags: editedContent.tags }
        : post
    ));
    setEditingPostId(null); // Exit edit mode
  };

  const handleCancelClick = () => {
    setEditingPostId(null); // Exit edit mode without saving
  };


  // Top members data
  const topMembers = [
    { id: 1, name: 'Phoenix Baker', date: 'Member since Feb 2022', image: P },
    { id: 2, name: 'Lana Steiner', date: 'Member since Jan 2022', image: LS },
    { id: 3, name: 'Demi Wikinson', date: 'Member since Mar 2022', image: DW },
    { id: 4, name: 'Natali Craig', date: 'Member since Mar 2022', image: NC },
    { id: 5, name: 'Candice Wu', date: 'Member since Feb 2022', image: ColoredPencils },
    { id: 6, name: 'Orlando Diggs', date: 'Member since Apr 2022', image: ColoredPencils },
    { id: 7, name: 'Drew Cano', date: 'Member since Apr 2022', image: BlankProfile },
    { id: 8, name: 'Kate Morrison', date: 'Member since Jan 2022', image: BlankProfile },
    { id: 9, name: 'Korey Okamus', date: 'Member since Feb 2022', image: ColoredPencils },
    { id: 10, name: 'Ave Right', date: 'Member since Mar 2022', image: A }
  ];

  return (
    <div className="BusinessHome">
      <br />
      <br />
      <br />
      <br />
      <h2>Welcome Back, Business Owner Name!</h2>
      <br/>
      <br/>
      <div className="recent-posts">
        <h4>Recent Posts</h4>
        <div style={{ position: 'relative' }}>
          <button onClick={() => setShowOptionsMenu(!showOptionsMenu)}>
            <img src={Options} alt="Options" />
          </button>
          <br/>
          <br/>
          {showOptionsMenu && (
            <div className="options-menu">
              <button onClick={addPost}>Add Post</button>
              {posts.map(post => (
                <button key={post.id} onClick={() => deletePost(post.id)}>
                  Delete Post: {post.title}
                </button>
              ))}
            </div>
          )}
        </div>
        {posts.map(post => (
          <div key={post.id} className="post">
            <img src={post.image} alt={post.title} />
            <p>{post.author}</p>
            <p>{post.date}</p>
            <h5>{post.title}</h5>
            <button onClick={() => handleEditClick(post)}>
              <img src={Arrow} alt="Edit Post" />
            </button>
            <p>{post.description}</p>
            {editingPostId === post.id && (
              <div className="edit-form">
                <h2>Edit Post</h2>
                <label>Image</label>
                <input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setEditedContent({ ...editedContent, image: URL.createObjectURL(file) });
                    }
                  }}
                />
                <input
                  type="text"
                  value={editedContent.author}
                  onChange={(e) => setEditedContent({ ...editedContent, author: e.target.value })}
                />
                <input
                  type="date"
                  value={editedContent.date}
                  onChange={(e) => setEditedContent({ ...editedContent, date: e.target.value })}
                />
                <input
                  type="text"
                  value={editedContent.title}
                  onChange={(e) => setEditedContent({ ...editedContent, title: e.target.value })}
                />
                <textarea
                  value={editedContent.description}
                  onChange={(e) => setEditedContent({ ...editedContent, description: e.target.value })}
                />
                <input
                  type="text"
                  value={editedContent.tags.join(', ')}
                  onChange={(e) => setEditedContent({ ...editedContent, tags: e.target.value.split(', ') })}
                />
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick} className="cancel">Cancel</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="top-members">
        <p>Top Members</p>
        <ul>
          {topMembers.map(member => (
            <li key={member.id}>
              <img src={member.image} alt={member.name} />
              <div>{member.name}</div>
              <small>{member.date}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
