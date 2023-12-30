import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function CustomAccordion( { para1, para2 }) {
  return (
    <div>

      <Accordion
         sx={{
            backgroundColor: 'transparent',
            width: '98%',
            border: 'none',
            boxShadow: 'none',
          }}
      >
        <AccordionSummary
        expandIcon={<AddCircleIcon sx={{color: "#E3B748"}} />}
        >
          <Typography
            sx={{
                fontWeight: '600', 
                fontSize: '24px', 
              }}
          >{para1}</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            {para2}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  )
}

export default CustomAccordion