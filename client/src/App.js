import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import ApiAccordion from './components/ApiAccordion';
import SideBar from './components/SideBar';

export default function ApiDocsAccordion() {

  const [error, setError] = useState(null);
  const [apiDocs, setApiDocs] = useState([]);
  const [apiDoc, setApiDoc] = useState([]);
  const [isLoaded, setisLoaded] = useState(false)

  function getAllApiDocs() {
    fetch('http://localhost:8080/api/v1/apidocs')
      .then(res => res.json())
      .then(res => {
        if(res) {
          setApiDocs(res);
        }
      },
      error => {
        setError(error);
      });
  }

  // Fetch the data once
  useEffect(() => {
    getAllApiDocs();
  }, []);

  // let api = apiDocs[0];

  function getApi(key) {
    fetch('http://localhost:8080/api/v1/apidocs/' + key)
      .then(res => res.json())
      .then(res => {
        if(res) {
          setApiDoc(res);
          setisLoaded(true);
        }
      },
      error => {
        setError(error);
        setisLoaded(true);
      });
 }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className='flex'>
    <SideBar apiDocs={apiDocs} getApi={getApi} />
    <div className='flex-grow-11'>
      <div className='title'>{ apiDoc.title }</div>
      <div className='accordion-wrapper'></div>
    </div>
  </div>;
  } else {
    return (
      <div className='flex'>
        <SideBar apiDocs={apiDocs} getApi={getApi} />
        <div className='flex-grow-11'>
          <div className='title'>{ apiDoc.title }</div>
          <div className='accordion-wrapper'>
            {apiDoc.endpoints.map(docs => (
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
      </div>
    );
  }
}
