import { DevTool } from '@hookform/devtools';
import { SetStateAction } from 'react';
import { Button } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import { step, Tduration, Tplan } from 'types';

interface StepperProps {
  steps: step[];
  currentStep: number;
  setCurrentStep: React.Dispatch<SetStateAction<number>>;
}

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

const Stepper = ({ steps, setCurrentStep, currentStep }: StepperProps) => {
  const step = steps[currentStep];

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

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
  });

  return (
    <div className="p-5 d-flex flex-column h-100">
      <FormProvider {...methods}>
        <StepHeader step={step} />
        <StepContent>{step.component}</StepContent>
        <StepperFooter>
          {currentStep > 0 && (
            <Button
              onClick={previousStep}
              className="text-capitalize border-0 "
              variant="outline-primary"
            >
              go back
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button onClick={nextStep} className="ms-auto text-capitalize">
              next step
            </Button>
          )}
        </StepperFooter>
      </FormProvider>
      <DevTool control={methods.control} />
    </div>
  );
};

export default Stepper;

interface StepHeaderProps {
  step: step;
}
const StepHeader = ({ step }: StepHeaderProps) => {
  return (
    <div className="p-2">
      {step.type !== 'END' && (
        <>
          <h2 className="fw-bold text-primary">{step.title}</h2>
          <p className="text-muted">{step.resume}</p>
        </>
      )}
    </div>
  );
};

interface StepperFooterProps {
  children: React.ReactNode;
}
const StepperFooter = ({ children }: StepperFooterProps) => {
  return <div className="hstack justify-content-between">{children}</div>;
};

interface StepContentProps {
  children: React.ReactNode;
}
const StepContent = ({ children }: StepContentProps) => {
  return <div className="flex-grow-1">{children}</div>;
};
