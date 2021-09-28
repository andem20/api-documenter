import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { requestTypeColors } from '../constants/requestTypeColors';
import '../App.css';

function ApiAccordion({ requestType, endpoint, description, output }) {

  return (
    <Accordion className='api-docs-accordion'>
      <AccordionSummary className={requestTypeColors[requestType] + "-background"} aria-controls="panel1d-content" id="panel1d-header">
        <Typography>
          <span className={requestTypeColors[requestType] + " request"}>
            { requestType }
          </span>
          { endpoint }
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={requestTypeColors[requestType] + "-background-detail"}>
        <Typography>
          { description }
          <br />
          <span className="code-snippet">
            <code>{ output }</code>
          </span>
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default ApiAccordion
