import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function AuthorProfile() {
  return (
    <div className="profile-card">
      <div className="circle"></div>
      <h2>Author Name</h2>
      <p>Lorem Ipsum Dolor</p>
    </div>
  );
}

function ReactionsBar() {
  const reactions = [
    { label: 'Like', percent: '20%' },
    { label: 'Love', percent: '60%' },
    { label: 'Angry', percent: '5%' },
    { label: 'Sad', percent: '5%' },
  ];
  const [active, setActive] = useState(null);

  return (
    <div className="reactions-bar">
      {reactions.map((r, idx) => (
        <div
          key={r.label}
          className={`reaction${active === idx ? ' active' : ''}`}
          onClick={() => setActive(idx)}
        >
          <div className="reaction-label">{r.label}</div>
          <div className="reaction-percent">{r.percent}</div>
        </div>
      ))}
    </div>
  );
}

const commentsData = [
  [
    {
      author: "Author Name",
      date: "10 February 2025",
      text: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
    },
    {
      author: "Author Name",
      date: "10 February 2025",
      text: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
    },
  ],
  [
    {
      author: "Author Name",
      date: "11 February 2025",
      text: "Second page comment. Lorem Ipsum Dolor Lorem Ipsum Dolor.",
    },
    {
      author: "Author Name",
      date: "11 February 2025",
      text: "Second page comment. Lorem Ipsum Dolor Lorem Ipsum Dolor.",
    },
  ],
  [
    {
      author: "Author Name",
      date: "12 February 2025",
      text: "Third page comment. Lorem Ipsum Dolor.",
    },
    {
      author: "Author Name",
      date: "12 February 2025",
      text: "Third page comment. Lorem Ipsum Dolor.",
    },
  ],
];

function Comment({ author, date, text }) {
  const [reaction, setReaction] = useState(null);

  return (
    <div className="comment-row">
      <div className="circle"></div>
      <div className="comment-content">
        <div className="comment-header">
          <Link to="/author" className="author-name">{author}</Link>, <span className="comment-date">{date}</span>
          <span className="report-link">Report</span>
        </div>
        <div className="comment-text">{text}</div>
        <div className="comment-actions">
          <span
            className={`comment-reaction${reaction === 'like' ? ' active' : ''}`}
            onClick={() => setReaction(reaction === 'like' ? null : 'like')}
          >
            Like 12
          </span>
          <span
            className={`comment-reaction${reaction === 'dislike' ? ' active' : ''}`}
            onClick={() => setReaction(reaction === 'dislike' ? null : 'dislike')}
          >
            Dislike 1
          </span>
          <span className="reply-link">Reply</span>
        </div>
      </div>
    </div>
  );
}

function CommentsSection() {
  const [page, setPage] = useState(0);

  return (
    <div className="comments-box">
      <div className="comments-title">20 Comments</div>
      <hr className="divider" />
      <input className="comment-input" placeholder="Write your comment.." />
      {commentsData[page].map((c, i) => (
        <Comment key={i} {...c} />
      ))}
      <div className="pagination">
        {[0, 1, 2].map(num => (
          <button
            key={num}
            className={`page-btn${page === num ? ' active' : ''}`}
            onClick={() => setPage(num)}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
function Home() {
  return (
    <div className="App">
      <h1 className='Subsection'>Section {">"} subsection</h1>
      <h2 className='SecondLine'>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor</h2>
      <p className='para1'>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum DolorLorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
      <div className='rectangle'></div>
      <p className='para2'>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum</p>
      <div className="author-row">
       <div className='circle'></div>
        <div className="author-info">
          <Link to="/author" className="author-name">Author Name</Link>
          <div className="author-date">7 January 2025</div>
        </div>
       </div>
       <hr className="divider" />
       <p className='para3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet animi facere inventore officia perspiciatis molestias esse ducimus. Illum eveniet provident odit, iusto, quidem harum placeat veniam voluptate, pariatur ad inventore? Recusandae ipsum reprehenderit cupiditate. At, ratione aspernatur eum repellendus totam eligendi quos dolor vel sint. Exercitationem quidem vel iure eius Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur corrupti corporis ipsam ea ratione sequi officiis, libero voluptatibus magni error inventore maxime in. Numquam illo reprehenderit repellendus repellat rerum, excepturi iure consectetur minima cumque eaque odit fuga magni ullam, explicabo tempore? Alias nulla cumque ab, repudiandae quis exercitationem facilis, sint consequuntur nesciunt in iure maxime dignissimos vero unde! Sint adipisci dignissimos ullam culpa, illo dolores rem mollitia quidem inventore iure accusantium quisquam unde consequuntur fugit, rerum earum quo ea necessitatibus tenetur error sunt nisi! Repudiandae distinctio omnis praesentium laborum, corporis cupiditate nihil odit vel, debitis corrupti, facere consectetur! Dolore, magni.</p>
       <hr className="divider" />
        <ReactionsBar />
        <CommentsSection />
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author" element={<AuthorProfile />} />
      </Routes>
    </Router>
  );
}


export default App;
