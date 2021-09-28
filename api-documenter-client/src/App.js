import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import ApiAccordion from './components/ApiAccordion';

export default function ApiDocsAccordion() {

  const [error, setError] = useState(null);
  const [apiDocs, setApiDocs] = useState([]);
  const [isLoaded, setisLoaded] = useState(false)

  function getAllApiDocs() {
    fetch('http://localhost:8080/api/v1/apidocs')
      .then(res => res.json())
      .then(res => {
        if(res) {
          setApiDocs(res);
          setisLoaded(true);
        }
      },
      error => {
        setError(error);
        setisLoaded(true);
      });
  }

  // Fetch the data once
  useEffect(() => {
    getAllApiDocs();
  }, []);

  console.log(apiDocs, isLoaded);

  let api = apiDocs[0];
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className='title'>{ api.apiTitle }</div>
        <div className='accordion-wrapper'>
          {api.endpoints.map(docs => (
            <ApiAccordion 
              key={docs.id} 
              requestType={docs.requestType} 
              endpoint={docs.endpoint}
              description={docs.description}
              output={docs.output}
              />
          ))}
        </div>
      </div>
    );
  }
}
