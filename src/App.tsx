// LIB
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

// CUSTOM LIB

import StepBody from './components/StepBody';
import { useApp } from './store';

// TYPES
import type { Tduration, Tplan } from 'types';

// CSS IMAGES
import 'bootstrap/dist/css/bootstrap.min.css';
import bgV from './assets/images/bg-sidebar-desktop.svg';
import bgMobile from './assets/images/bg-sidebar-mobile.svg';

// DATA
import { stepData } from './data';

export interface formState {
  name: string;
  email: string;
  phone: string;
  plan: Tplan;
  planDuration: Tduration;
  'Online service': boolean;
  'Larger storage': boolean;
  'Customizable profile': boolean;
}

function App() {
  const currentStep = useApp((state) => state.step);
  const setStep = useApp((state) => state.setStep);
  const step = stepData[currentStep];

  const methods = useForm<formState>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      plan: 'arcade',
      planDuration: 'monthly',
      'Online service': false,
      'Larger storage': false,
      'Customizable profile': false,
    },
    mode: 'all',
  });

  const nextStep = () => {
    setStep(currentStep + 1);
  };
  const previousStep = () => {
    setStep(currentStep - 1);
  };
  const onSubmit: SubmitHandler<formState> = (data) => {
    nextStep();
  };
  const onFinal: SubmitHandler<formState> = (data) => {
    // send data then
    nextStep();
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <div
        className="d-flex  flex-column d-md-grid  position-relative"
        style={{ placeItems: 'center', minHeight: '100vh' }}
      >
        <ul
          className="hstack flex-md-column d-md-none gap-2 p-3 pt-md-5 pt-2 w-100 position-absolute justify-content-center justify-content-md-start"
          style={{
            backgroundImage: `url(${bgMobile})`,
            objectFit: 'cover',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            minHeight: '172px',
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
                <li
                  className="hstack gap-4 p-2 align-self-start "
                  key={'step' + index}
                >
                  <div
                    className={`rounded-full rounded-circle d-flex fw-bold justify-content-center align-items-center ${stepStyles}`}
                    style={{ height: '2.5rem', width: '2.5rem' }}
                  >
                    {idx}
                  </div>
                  <div className="vstack d-none d-md-flex text-uppercase justify-content-evently">
                    <span className="small text-white-50 ">step {idx}</span>
                    <span className="text-light fw-bold">{step.buttonTag}</span>
                  </div>
                </li>
              );
          })}
        </ul>
        <Container style={{ maxWidth: '968px' }} className="mainContainer">
          <Row className="bg-white rounded-3 p-0 p-md-3 m-2 m-md-0 h-100 sm-shadow">
            <Col md="4" className="d-none d-md-block">
              <ul
                className="hstack flex-md-column gap-2 p-3 pt-md-5 pt-2 h-100 justify-content-center justify-content-md-start rounded-3"
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
                      <li
                        className="hstack gap-4 p-2 align-self-start "
                        key={'step' + index}
                      >
                        <div
                          className={`rounded-full rounded-circle d-flex fw-bold justify-content-center align-items-center ${stepStyles}`}
                          style={{ height: '2.5rem', width: '2.5rem' }}
                        >
                          {idx}
                        </div>
                        <div className="vstack d-none d-md-flex text-uppercase justify-content-evently">
                          <span className="small text-white-50 ">
                            step {idx}
                          </span>
                          <span className="text-light fw-bold">
                            {step.buttonTag}
                          </span>
                        </div>
                      </li>
                    );
                })}
              </ul>
            </Col>
            <Col
              className="pt-md-5  p-3 d-flex rounded-md-3 rounded-0 flex-column rounded-3 mx-auto"
              style={{ maxWidth: '440px' }}
            >
              <StepBody step={step} />
              <div className="hstack justify-content-between mt-auto d-md-flex d-none">
                {currentStep > 0 && step.type !== 'END' && (
                  <Button
                    onClick={previousStep}
                    className="text-capitalize border-0 "
                    variant="outline-primary"
                  >
                    go back
                  </Button>
                )}
                {['START', 'STEP'].includes(step.type) && (
                  <Button
                    onClick={methods.handleSubmit(onSubmit)}
                    className="ms-auto text-capitalize"
                  >
                    next step
                  </Button>
                )}
                {step.type === 'LAST' && (
                  <Button onClick={methods.handleSubmit(onFinal)}>
                    Confirm
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </Container>
        <div className="hstack justify-content-between p-3  mt-auto d-md-none d-flex">
          {currentStep > 0 && step.type !== 'END' && (
            <Button
              onClick={previousStep}
              className="text-capitalize border-0 "
              variant="outline-primary"
            >
              go back
            </Button>
          )}
          {['START', 'STEP'].includes(step.type) && (
            <Button
              onClick={methods.handleSubmit(onSubmit)}
              className="ms-auto text-capitalize"
            >
              next step
            </Button>
          )}
          {step.type === 'LAST' && (
            <Button onClick={methods.handleSubmit(onFinal)}>Confirm</Button>
          )}
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
