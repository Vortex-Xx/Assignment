import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function AuthorProfile() {
  return (
    <div className="profile-card">
      <div className="circle profile-avatar"></div>
      <h2>Author Name</h2>
      <p>Lorem Ipsum Dolor</p>
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
