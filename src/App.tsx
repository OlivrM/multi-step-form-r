import type { step } from 'types';

import { Col, Container, Row } from 'react-bootstrap';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Stepper from './components/Stepper';

// CSS IMAGES
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import bgV from './assets/images/bg-sidebar-desktop.svg';

const stepData: step[] = [
  {
    type: 'START',
    title: 'Personal info',
    resume: 'Please provide your name, email address, and phone number.',
    component: <Step1 />,
    buttonTag: 'your info',
  },
  {
    type: 'STEP',
    title: 'Select your plan',
    resume: 'You have the option of monthly or yearly billing.',
    component: <Step2 />,
    buttonTag: 'select plan',
  },
  {
    type: 'STEP',
    title: 'Pick add-ons',
    resume: 'Add-ons help enhance your gaming experience..',
    component: <Step3 />,
    buttonTag: 'add-ons',
  },
  {
    type: 'STEP',
    title: 'Finishing up',
    resume: 'Double-check everything looks OK before confirming.',
    component: <div>step4</div>,
    buttonTag: 'summary',
  },
  {
    type: 'END',
    component: <div>step5</div>,
  },
];

function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  return (
    <div
      className="w-75 mx-auto"
      style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}
    >
      <Container className="bg-white p-3 rounded-3 h-75">
        <Row className="h-100">
          <Col md="4" style={{ minHeight: '568px' }}>
            <ul
              className="vstack gap-4 p-5 h-100 rounded-3"
              style={{
                backgroundImage: `url(${bgV})`,
                objectFit: 'cover',
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
              }}
            >
              {stepData.map((step, index) => {
                const idx = index + 1;
                const stepStyles =
                  index === currentStep
                    ? 'bg-info text-primary'
                    : 'bg-transparent text-light border border-light';
                if (step.type !== 'END')
                  return (
                    <li className="hstack gap-4 p-2 " key={'step' + index}>
                      <div
                        className={`rounded-full rounded-circle d-flex fw-bold justify-content-center align-items-center ${stepStyles}`}
                        style={{ height: '2.5rem', width: '2.5rem' }}
                      >
                        {idx}
                      </div>
                      <div className="vstack text-uppercase justify-content-evently">
                        <span className="small text-white-50 ">step {idx}</span>
                        <span className="text-light fw-bold">
                          {step.buttonTag}
                        </span>
                      </div>
                    </li>
                  );
              })}
            </ul>
          </Col>
          <Col>
            <Stepper
              steps={stepData}
              setCurrentStep={setCurrentStep}
              currentStep={currentStep}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
