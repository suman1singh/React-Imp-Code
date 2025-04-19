import React, { useState, useEffect, useRef } from 'react';

function App234() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const pageSize = 30;  // Number of items per page
  const observer = useRef(null);  // Intersection observer reference
  const lastItemRef = useRef();  // Reference to the last item

  // Function to fetch data from the API
  const fetchData = () => {
    if (loading || !hasMoreData) return;

    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${pageSize}&_start=${data.length}`)
      .then((res) => res.json())
      .then((newData) => {
        setData((prevData) => [...prevData, ...newData]);
        setHasMoreData(newData.length === pageSize);  
        // If data length is less than pageSize, no more data
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  // Intersection Observer to detect when user reaches the bottom
  const handleObserver = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && !loading) {
      fetchData();
    }
  };

  // Set up the Intersection Observer
  useEffect(() => {
    observer.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px', // Trigger before reaching the bottom
      threshold: 1.0,
    });
  }, [loading]);

  // Observe the last item
  useEffect(() => {
    const currentObserver = observer.current;
    if (lastItemRef.current) {
      currentObserver.observe(lastItemRef.current);
    }
    return () => {
      if (lastItemRef.current) {
        currentObserver.unobserve(lastItemRef.current);
      }
    };
  }, [data]);

  // Fetch initial data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ height: '80vh', overflowY: 'auto' }}>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.url} alt={item.title} width="100" />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
      {/* Last item to observe */}
      {hasMoreData && (
        <div ref={lastItemRef} style={{ textAlign: 'center', padding: '20px' }}>
          {loading ? 'Loading more...' : 'Scroll to load more'}
        </div>
      )}
    </div>
  );
}

export default App234;