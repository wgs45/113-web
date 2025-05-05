import { bookA, bookB, bookC, bookD } from './data';

function Booklist() {
  var data = [
    {
      id: 1,
      img: bookA.img,
      title: bookA.title,
      author: bookA.author,
    },
    {
      id: 2,
      img: bookB.img,
      title: bookB.title,
      author: bookB.author,
    },
    {
      id: 3,
      img: bookC.img,
      title: bookC.title,
      author: bookC.author,
    },
  ];

  return (
    <section className='blogs-center'>
      {data.map((value) => (
        <Blog
          key={value.id}
          img={value.img}
          title={value.title}
          author={value.author}
        ></Blog>
      ))}
    </section>
  );
}

export default Booklist;
