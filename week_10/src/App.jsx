import './App.css';
import Earth from '../public/earth.svg';

const App = () => {
    return (
        <div className="back">
            <div className="earth">
                <h2>Hello world</h2>
                <div className="logo-container">
                    <img className="logo" src={Earth} alt="Earth" />
                </div>
            </div>
            <p>The image is spining...</p>
        </div>
    );
};

export default App;
