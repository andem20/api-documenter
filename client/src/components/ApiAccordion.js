import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { requestTypeColors } from '../constants/requestTypeColors';
import './ApiAccordion.css';
import Button from './Button';
import REQUEST from '../utils/fetch';

function ApiAccordion({ endpointData, apiDocLinks, setEndpoints, endpoints }) {

  function deleteEndpoint(e) {
    e.stopPropagation();
    setEndpoints([...endpoints.filter(endpoint => endpoint._id !== endpointData._id)]);
  }

  function saveEndpoint() {
    const data = {
      requestType: document.querySelector('#requestType').value, 
      endpoint: document.querySelector('#endpointName').value, 
      description: document.querySelector('#description').innerHTML, 
      output: document.querySelector('#code').innerHTML
    }

    REQUEST(apiDocLinks.createEndpoint.href, data, 'POST')
      .then(res => console.log(res));
  }

  function renderSaveBtn() {
    return endpointData.editable ? (<div style={{width: '100%', textAlign: 'right', marginTop: '1em'}}>
              <Button value='Save Endpoint' color='green' onClick={saveEndpoint} />
            </div>) : '';
  }

  function renderEndpoint() {
    return endpointData.editable ? (
      <input 
        type='text' 
        placeholder={endpointData.endpoint} 
        id='endpointName' 
        className='endpointName' />
    ) : endpointData.endpoint;
  }

  function renderRequestType() {
    if(!endpointData.editable) {
      return (<span className={requestTypeColors[endpointData.requestType] + " request"}>
                { endpointData.requestType }
              </span>);
    }

    return (<select id='requestType'>
              <option value='POST'>POST</option>
              <option value='GET'>GET</option>
              <option value='PUT'>PUT</option>
              <option value='DELETE'>DELETE</option>
            </select>);
  }

  return (
    <Accordion className='api-docs-accordion' expanded={endpointData.editable}>
      <AccordionSummary className={(endpointData.editable ? 'new' : requestTypeColors[endpointData.requestType]) + "-background"} aria-controls="panel1d-content" id="panel1d-header">
        <div style={{ width: '50%', display: 'flex' }}>
              { renderRequestType() }
              { renderEndpoint() }
        </div>
        <div style={{ textAlign: 'right', width: '50%' }}>
          <Button value='X' color='red' onClick={deleteEndpoint} />
        </div>
      </AccordionSummary>
      <AccordionDetails className={(endpointData.editable ? 'new' : requestTypeColors[endpointData.requestType]) + "-background-detail"}>
        <div style={{width: '100%'}}>
          <div id='description'>
            { endpointData.description }
          </div>
          <br />
          <div className="code-snippet">
            <code id='code'>{ endpointData.output }</code>
          </div>
          { renderSaveBtn() }
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default ApiAccordion
