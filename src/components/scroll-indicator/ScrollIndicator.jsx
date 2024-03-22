import React, { useEffect, useState } from 'react';
import './style.css';
const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [scrollPrecentage, setScrollPrecentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data?.products?.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPrecentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const fullScreenHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    // console.log((howMuchScrolled / height) * 100);

    setScrollPrecentage((howMuchScrolled / fullScreenHeight) * 100);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPrecentage);

    return () => {
      //remove it on unmount
      window.removeEventListener('scroll', handleScrollPrecentage);
    };
  }, []);

  if (loading) {
    return <div>Loading the data, please wait...</div>;
  }
  if (errorMsg !== '') {
    return <div>{errorMsg}</div>;
  }

  return (
    <div className="">
      <div className="upper-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPrecentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data?.length > 0 &&
          data.map((item) => <p key={item.id}>{item.title}</p>)}
      </div>
    </div>
  );
};

export default ScrollIndicator;
