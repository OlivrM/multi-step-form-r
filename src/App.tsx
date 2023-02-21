// LIB
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

// CUSTOM LIB
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Stepper from './components/Stepper';
import { useApp } from './store';

// TYPES
import type { step, Tduration, Tplan } from 'types';

// CSS IMAGES
import 'bootstrap/dist/css/bootstrap.min.css';
import bgV from './assets/images/bg-sidebar-desktop.svg';
import bgMobile from './assets/images/bg-sidebar-mobile.svg';

const stepData: step[] = [
  {
    type: 'START',
    title: 'Personal info',
    resume: 'Please provide your name, email address, and phone number.',
    component: Step1,
    buttonTag: 'your info',
    validation: ['name', 'email', 'phone'],
  },
  {
    type: 'STEP',
    title: 'Select your plan',
    resume: 'You have the option of monthly or yearly billing.',
    component: Step2,
    buttonTag: 'select plan',
  },
  {
    type: 'STEP',
    title: 'Pick add-ons',
    resume: 'Add-ons help enhance your gaming experience..',
    component: Step3,
    buttonTag: 'add-ons',
  },
  {
    type: 'LAST',
    title: 'Finishing up',
    resume: 'Double-check everything looks OK before confirming.',
    component: Step4,
    buttonTag: 'summary',
  },
  {
    type: 'END',
    component: Step5,
  },
];

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
        className="d-flex  flex-column d-md-grid h-75 position-relative"
        style={{ placeItems: 'center', minHeight: '100vh' }}
      >
        <ul
          className="hstack flex-md-column d-md-none gap-2 p-3 pt-md-5 pt-2 w-100 position-absolute justify-content-center justify-content-md-start rounded-3"
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
        <Container style={{ maxWidth: '968px' }} className="h-75">
          <Row className=" bg-white rounded-3 p3 h-100">
            <Col md="4" className="p-md-3 p-0  d-md-block">
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
            <Col className="pt-md-5 m-3 p-3 d-flex rounded-md-3 rounded-0 flex-column rounded-3  shadow">
              <Stepper step={step} />
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
