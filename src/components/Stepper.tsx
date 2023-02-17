import { useState } from 'react';
import { step } from 'types';

interface StepperProps {
  steps: step[];
}

const Stepper = ({ steps }: StepperProps) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const step = steps[currentStep];

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      {step.type !== 'END' && <StepHeader step={step} />}
      {step.component}
      <StepperFooter>
        {currentStep > 0 && <button onClick={previousStep}>back</button>}
        {currentStep < steps.length - 1 && (
          <button onClick={nextStep}>next</button>
        )}
      </StepperFooter>
    </div>
  );
};

export default Stepper;

interface StepHeaderProps {
  step: step;
}

const StepHeader = ({ step }: StepHeaderProps) => {
  return <div>{step.type !== 'END' && <h2>{step.title}</h2>}</div>;
};

interface StepperFooterProps {
  children: React.ReactNode;
}
const StepperFooter = ({ children }: StepperFooterProps) => {
  return <div>{children}</div>;
};
