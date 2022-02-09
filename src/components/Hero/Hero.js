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
        Zapp Flick
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;