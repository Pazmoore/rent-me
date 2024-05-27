'use client'
import React from 'react'
import Image from 'next/image'
import { faqs } from './faqsData'
import Accordion from '@mui/material/Accordion'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import './faqs.scss'

const Faqs = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false)
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false)
  const contact = () => {}

  return (
    <div className="faqs">
      <div className="content">FAQS</div>
      <div className='accordion'>
        {
          faqs.map((faq, i, array) => (
            <Accordion key={i} expanded={expanded === faq.id} disableGutters={true} onChange={handleChange(faq.id)} className={`accordion-item ${array.length - 1 == i && 'last-child'}`}>
              <AccordionSummary expandIcon={<ExpandMoreIcon className='img'/>}>
                <div className='question'>{faq.question}</div>
              </AccordionSummary>
              <AccordionDetails>
                <div className='answer'>
                  {faq.answer}
                  <div onClick={() => contact()} className="contact">
                    <span>Get in touch</span>
                    <Image src='/images/general/arrow/arrow.png' alt="img" width={15} height={15} className='img-color'/>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          ))
        }
      </div>
    </div>
  )
}

export default Faqs