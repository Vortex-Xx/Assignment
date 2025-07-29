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

function Home() {
  return (
    <div className="App">
      <h1 className='Subsection'>Section subsection</h1>
      <h2 className='SecondLine'>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor</h2>
      <p className='para1'>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum DolorLorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
      <div className='rectangle'>
      </div>
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
