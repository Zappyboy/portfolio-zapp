import React from 'react';

import { Section, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welkom bij <br />
        Mijn Portfolio
      </SectionTitle>
      <SectionText>
        Portfolio Presentatie
      </SectionText>
      <SectionSubText>
        Zapp Flick ROC Almere Buiten
      </SectionSubText>
    </LeftSection>
  </Section>
);

export default Hero;