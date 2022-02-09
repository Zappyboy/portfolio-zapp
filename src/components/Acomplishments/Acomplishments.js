import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'Freelance Programmeur', sub: 'kleine opdrachten' },
  { text: 'ZZPer', sub: 'voor mijzelf beginnen' },
  { text: 'Fullstack Developer', sub: 'Kennis front & back' },
  { text: 'Plezier', sub: 'programmeren met een lach' }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Ambities</SectionTitle>
    <Boxes>
      {data.map((card, index)=>(
        <Box key={index}>
          <BoxNum>{card.text}</BoxNum>
          <BoxText>{card.sub}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
