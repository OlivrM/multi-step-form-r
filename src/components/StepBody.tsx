import { step } from 'types';

interface StepBodyProps {
  step: step;
}

const StepBody = ({ step }: StepBodyProps) => {
  return (
    <div>
      <StepHeader step={step} />
      <step.component />
    </div>
  );
};

export default StepBody;

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
