import './App.css';
import { bookA, bookB, bookC, bookD } from './data';

function App() {
  return (
    <div className='blogs'>
      <div className='section-title'>
        <h2>latest blogs</h2>
      </div>
      <div className='blogs-center'>
        <Blog
          id={bookA.id}
          img={bookA.img}
          title={bookA.title}
          author={bookA.author}
        />
        <Blog
          id={bookB.id}
          img={bookB.img}
          title={bookB.title}
          author={bookB.author}
        />
        <Blog
          id={bookC.id}
          img={bookC.img}
          title={bookC.title}
          author={bookC.author}
        />
        <Blog
          id={bookD.id}
          img={bookD.img}
          title={bookD.title}
          author={bookD.author}
        />
      </div>
    </div>
  );
}

const Blog = ({ img, title, author }) => {
  return (
    <article className='blog'>
      <img src={img} alt={title} className='img blog-img' />
      <div className='blog-content'>
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </article>
  );
};

export default App;
