import './App.css';
import Booklist from './singlebook';

function App() {
  return (
    <div className='blogs'>
      <div className='section-title'>
        <h2>latest blogs</h2>
      </div>
      <div className='blogs-center'>
        <Booklist />
      </div>
    </div>
  );
}

// const Blog = ({ img, title, author, desc }) => {
//   return (
//     <article className='blog'>
//       <img src={img} alt={title} className='img blog-img' />
//       <div className='blog-content'>
//         <h3>{title}</h3>
//         <p>{author}</p>
//         <p>{desc}</p>
//       </div>
//     </article>
//   );
// };

export default App;
