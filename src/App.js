import SearchBar from './components/utils/SearchBar';
import appStyles from './styles/App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className={`${appStyles.Main}`}>
      <header className="">
        <h1 className={`${appStyles.GoldText} mt-3 mb-1`}>React Search Bar</h1>
      </header>
      <p className="mb-1 fs-4">
        <a href="https://github.com/BobWritesCode">
          <i className="bi bi-github text-secondary"></i>
        </a>
        <a href="https://www.linkedin.com/in/warwickhart/">
          <i className="bi bi-linkedin text-secondary ms-2"></i>
        </a>
      </p>
      <p className={`${appStyles.GoldText}`}>Created by: Warwick Hart</p>
      <SearchBar />
    </div>
  );
}

export default App;
