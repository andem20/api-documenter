import React from 'react'
import ApiAccordion from '../components/ApiAccordion';
import Button from '../components/Button'
import SideBar from '../components/SideBar';
import { useState, useEffect } from 'react';
import './Start.css';
import ObjectID from 'bson-objectid';
import REQUEST from '../utils/fetch';

function StartView() {
  const [error, setError] = useState(null);
  const [apiDocsData, setApiDocsData] = useState([]);
  const [apiDoc, setApiDoc] = useState([]);
  const [endpoints, setEndpoints] = useState([]);

  async function getAllApiDocs() {
    REQUEST('/apidocs/').then(res => setApiDocsData(res), error => setError(error));
  }

  // Fetch the data once
  useEffect(() => getAllApiDocs(), []);

  async function getApi(url) {
    REQUEST(url)
      .then(res => {
          setApiDoc(res);
          setEndpoints(res.endpoints);
      },
      error => {
        setError(error);
      });
 }

  function addEndpoint() {
    setEndpoints([...endpoints, {
      _id: ObjectID().toHexString(),
      requestType: 'REQUEST TYPE', 
      endpoint: '/endpoint', 
      description: 'Description', 
      output: '{output}',
      editable: true
    }]);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (apiDoc.length === 0) {
    return (
      <div className='flex'>
        <SideBar apiDocs={apiDocsData} getApi={getApi} />
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
        <SideBar apiDocs={apiDocsData} getApi={getApi} />
        <div className='flex-grow-11'>
          <div className='title'>{ apiDoc.title }</div>
          <div className='accordion-wrapper'>
            {endpoints.map(endpoint => (
              // TODO clean up
              <ApiAccordion 
                  key={endpoint._id} 
                  endpointData={endpoint}
                  apiDocLinks={apiDoc.links}
                  setEndpoints={setEndpoints}
                  endpoints={endpoints}
                />
              )
            )}
          </div>
          <div className='add-button'>
            <Button value='Add Endpoint' color='green' onClick={addEndpoint} />
          </div>
        </div>
      </div>
    );
  }
}

export default StartView
