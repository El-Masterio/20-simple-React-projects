import { useRef } from 'react';
import useFetch from '../use-fetch/index';

export default function ScrollToTopAndBottom() {
  const { data, errorMsg, loading } = useFetch(
    'https://dummyjson.com/products?limit=100',
    {}
  );
  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }
  return (
    <div>
      <h1>Scroll to Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <ul style={{ listStyle: 'none' }}>
        {loading ? (
          <h3>loading data! please wait...</h3>
        ) : errorMsg ? (
          <h2>Error Occurred, please try again</h2>
        ) : (
          data?.products?.length &&
          data.products.map((item) => <li key={item.id}>{item.title}</li>)
        )}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
}
