import { useEffect, useState } from 'react';
import './App.css';
import Alert from './components/Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = 'Enter something', type = 'no') => {
    setAlert({ show, msg, type });
    // console.log(
    //   'state ' + alert.show + ' msg ' + alert.msg + ' type ' + alert.type
    // );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlert(true, 'Empty Value', 'Invalid value');
    } else {
      showAlert(true, 'Value Changed', 'Success');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName('');
    }

    console.log(alert);
  };

  return (
    <section className='section-center'>
      <form className='grocery' onSubmit={handleSubmit}>
        <h3>Menu</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='Search'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button type='submit' className='submit-btn'>
            submit
          </button>
        </div>
      </form>
    </section>
  );
}
export default App;
