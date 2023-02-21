import { step } from 'types';

interface StepperProps {
  step: step;
}

const Stepper = ({ step }: StepperProps) => {
  return (
    <div className="">
      <StepHeader step={step} />
      <step.component />
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
