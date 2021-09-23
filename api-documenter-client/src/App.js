import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import './App.css';

export default function CustomizedAccordions() {

  


  return (
    <div className="accordion-wrapper">
      <Accordion>
        <AccordionSummary className="blue-background" aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            <span className="request blue">
              /GET
            </span>
            /users/&#123;:id&#125;
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="blue-background-detail">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            <span className="code-snippet">
              <code>{"body { color: blue; }"}</code>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary className="green-background" aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            <span className="request green">
              /POST
            </span>
            Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails className="green-background-detail">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary className="red-background" aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            <span className="request red">
              /DELETE
            </span>
            Collapsible Group Item #3
            </Typography>
        </AccordionSummary>
        <AccordionDetails className="red-background-detail">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
