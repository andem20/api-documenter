import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import ApiAccordion from './components/ApiAccordion';
import Button from './components/Button'
import SideBar from './components/SideBar';

export default function ApiDocsAccordion() {

  const [error, setError] = useState(null);
  const [apiDocs, setApiDocs] = useState([]);
  const [apiDoc, setApiDoc] = useState([]);
  const [isLoaded, setisLoaded] = useState(false)

  async function getAllApiDocs() {
    await fetch(process.env.REACT_APP_API_URL + '/apidocs')
      .then(res => res.json())
      .then(res => {
          setApiDocs(res);
      },
      error => {
        setError(error);
      });
  }

  // Fetch the data once
  useEffect(() => {
    getAllApiDocs();
  }, []);

  async function getApi(key) {
    await fetch(process.env.REACT_APP_API_URL + '/apidocs/' + key)
      .then(res => res.json())
      .then(res => {
          setApiDoc(res);
          setisLoaded(true);
      },
      error => {
        setError(error);
        setisLoaded(true);
      });
 }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className='flex'>
        <SideBar apiDocs={apiDocs} getApi={getApi} />
        <div className='flex-grow-11'>
          <div className='accordion-wrapper'>
            Choose an api.
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='flex'>
        <SideBar apiDocs={apiDocs} getApi={getApi} />
        <div className='flex-grow-11'>
          <div className='title'>{ apiDoc.title }</div>
          <div className='accordion-wrapper'>
            {apiDoc.endpoints.map(docs => (
              <ApiAccordion 
                  key={docs._id} 
                  requestType={docs.requestType} 
                  endpoint={docs.endpoint}
                  description={docs.description}
                  output={docs.output}
                />
              )
            )}
          </div>
          <div className='add-button'>
            <Button value='Add Endpoint' color='green' />
          </div>
        </div>
      </div>
    );
  }
}
