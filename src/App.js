import SearchBar from './components/utils/SearchBar';
import appStyles from './styles/App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className={`${appStyles.Main}`
    }>
      <header className="">
      <h1 className={`${appStyles.GoldText} mt-3 mb-5`}>React Search Bar</h1>
      </header>
      <p className='mb-2'>Demo:</p>
      <SearchBar/>
      <p className='mt-5 mb-1 fs-4'>
        <a href="https://github.com/BobWritesCode"><i className="bi bi-github text-light"></i></a>
        <a href="https://www.linkedin.com/in/warwickhart/"><i className="bi bi-linkedin text-light ms-2"></i></a>
      </p>
      <p className={`${appStyles.GoldText}`}>Created by: Warwick Hart</p>
    </div>
  );
}

export default App;
