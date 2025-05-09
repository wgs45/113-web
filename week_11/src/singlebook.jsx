import { bookA, bookB, bookC, bookD, bookE, bookF } from './data';

function Booklist() {
  var data = [bookA, bookB, bookC, bookD, bookE, bookF];

  const Blog = ({ img, title, author, desc }) => {
    return (
      <article className='blog'>
        <img src={img} alt={title} className='img blog-img' />
        <div className='blog-content'>
          <h1>{title}</h1>
          <h3>{author}</h3>
          <p>{desc}</p>
        </div>
      </article>
    );
  };

  return (
    <section className='blogs-center'>
      {data.map((value) => (
        <Blog
          key={value.id}
          img={value.img}
          title={value.title}
          author={value.author}
          desc={value.desc}
        ></Blog>
      ))}
    </section>
  );
}

export default Booklist;
