import useFetch from '.';

const UseFetchHookTest = () => {
  const { data, errorMsg, loading } = useFetch(
    'https://dummyjson.com/products',
    {}
  );

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {loading ? (
        <h3>loading data! please wait...</h3>
      ) : errorMsg ? (
        <h2>Error Occurred, please try again</h2>
      ) : (
        data?.products?.map((item) => <p key={item.id}>{item.title}</p>)
      )}
    </div>
  );
};

export default UseFetchHookTest;

/*

  // Function to dynamically render data based on API response
  const renderData = () => {
    if (data) {
      // Find the first array in the data object
      const dataArray = Object.values(data).find(
        (value) => Array.isArray(value)
      );

      if (dataArray) {
        // If array found, dynamically render data based on its structure
        return dataArray.map((item) => {
          // Check if item is an object
          if (typeof item === 'object') {
            // If object, dynamically render data attributes
            return (
              <div key={item.id}>
                {Object.entries(item).map(([key, value]) => (
                  <p key={key}>{value}</p>
                ))}
              </div>
            );
          } else {
            // If not an object, render the item directly
            return <p key={item}>{item}</p>;
          }
        });
      }
    }

    // Return default message if no data or array found
    return <p>No data available</p>;
  };

*/
