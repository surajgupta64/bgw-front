import { AccordionDetails, AccordionSummary } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const AccordionCom = () => {
  return (
    <div className='w-full bg-white lg:pr-72 lg:pl-72 md:pr-28 md:pl-28 pb-8 px-4'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          HOW YOU CAN SELL YOUR SCRAP ?
        </AccordionSummary>
        <AccordionDetails>
        Click on sell now button Then select the scrap type Weight and fill your personal details 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Which weight machine you are using?
        </AccordionSummary>
        <AccordionDetails>
        Electronic weight machine
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         how you are giving money 
        </AccordionSummary>
        <AccordionDetails>
        Online and cash both 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         how do  you calculate the value of scrap
        </AccordionSummary>
        <AccordionDetails>
        according to scrap market 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         does this website has safe server 
        </AccordionSummary>
        <AccordionDetails>
        yes
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionCom
