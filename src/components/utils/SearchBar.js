import React, { useEffect, useRef, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MySpinner from './Spinner';
import { MockSearch } from '../../functions/MockSearch';

const SearchBar = () => {
  // Use to control text-input
  const [content, setContent] = useState('');
  // Use to API/data request results.
  const [results, setResults] = useState([]);
  // Use to control if user clicks outside search bar and results and then close results.
  const searchContainerRef = useRef(null);
  // Use to show spinner while API/data request is resolving.
  const [showSpinner, setShowSpinner] = useState(false);

  /**
   * Allow user to edit input.
   * @param {*} e
   */
  const handleChange = (e) => {
    setContent(e.target.value);
    if (!e.target.value) {
      setResults({});
    }
  };

  /**
   * Handles user clicking on one of the results.
   * @param {*} result
   */
  const handleSearchResultClick = (result) => {
    // Put your code here with what you want to happen when the result is selected.
    setContent('');
    setResults({});
    setShowSpinner(false);
  };

  /**
   * Checks to see if user is clicking outside the search bar and results, if so close results.
   */
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the user click an element outside the search container.
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setResults({});
      }
    };
    document.addEventListener('mouseup', handleOutsideClick);
    return () => {
      document.removeEventListener('mouseup', handleOutsideClick);
    };
  }, []);

  /**
   * Fetches data based on text input from end user.
   */
  useEffect(() => {
    // Check if any text in search input.
    if (content) {
      // Show spinner while API/data request resolves.
      setShowSpinner(true);
      const fetchData = async () => {
        try {
          // Mock API/data request START. -----------------
          // Input your API/data request here.
          const data = MockSearch({ query: content });
          // Mock API/data request END. -----------------
          setResults(data);
        } catch (err) {
          /* empty */
        } finally {
          setShowSpinner(false);
        }
      };

      // A 1 second timer, to allow user to stop typing before requesting data.
      const timer = setTimeout(() => {
        fetchData();
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      // Remove spinner in search input is empty.
      setShowSpinner(false);
    }
  }, [content]);

  /**
   * JSX element to list results as clickable buttons.
   */
  const ShowResults = (
    <>
      {results.length &&
        results.map((result, index) => (
          <div key={index}>
            <Button
              variant="light"
              className="w-100 rounded-0"
              onClick={() => handleSearchResultClick(result)}
            >
              {result}
            </Button>
          </div>
        ))}
    </>
  );

  /**
   * JSX element to show spinner until user stops typing and API/data request resolves.
   */
  const ShowSpinner = (
    <>
      <div className="position-relative">
        <div
          className="border border-secondary  border-top-0 position-absolute"
          style={{ width: '100%' }}
        >
          <div className="w-100 rounded-0 bg-light text-dark py-2">
            <MySpinner variant="dark" />
          </div>
        </div>
      </div>
    </>
  );

  /**
   * JSX element to act as a container for results.
   */
  const ShowResultsContainer = (
    <>
      <div className="position-relative">
        <div
          className="border border-secondary  border-top-0 position-absolute"
          style={{ width: '100%' }}
        >
          {!showSpinner && ShowResults}
        </div>
      </div>
    </>
  );

  /**
   * JSX element to display the search bar.
   */
  const ShowSearchBar = (
    <>
      <InputGroup className="ms-0">
        <InputGroup.Text className="bg-light border-right-0 rounded-0 border-secondary">
          <i className="bi bi-search text-dark"></i>
        </InputGroup.Text>
        <Form.Control
          placeholder="User search"
          aria-label="User searchbar"
          className="rounded-0 border-secondary"
          onChange={handleChange}
          value={content}
        />
      </InputGroup>
    </>
  );

  /**
   * Main return render.
   */
  return (
    <div ref={searchContainerRef}>
      {ShowSearchBar}
      {results.length > 0 && ShowResultsContainer}
      {showSpinner && ShowSpinner}
    </div>
  );
};

export default SearchBar;
