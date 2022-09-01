import React, { useContext, useEffect } from 'react';
import { FadeInOut, Staggers } from 'HELPERS/framer-animations';
import { AppContext } from '../../context/appContext';
import Icon from '../Icons';
import { Container, BtnsContainer, ButtonContainer } from './stepIntroStyles';
// import IntroAudio from '../../../assets/audios/01-first-open.mp3';

const StepIntro = () => {
  const { goToStep } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      goToStep(1);
    }, 3000);
  });

  return (
    <Staggers
      key='StepIntro'
      component={Container}
      isNested={true}
      visibleStaggers={0.2}
    >
      <FadeInOut
        component={BtnsContainer}
        element={'div'}
        isNested={true}
        key='btnsContainers'
      >
        <ButtonContainer onClick={() => goToStep(1)}>
          <Icon name='genoshaLogo' width={'550px'} height={'fit-content'} />
        </ButtonContainer>
      </FadeInOut>
    </Staggers>
  );
};

export default StepIntro;
