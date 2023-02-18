import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { TplanOption } from 'types';
import advancedIcon from '../assets/images/icon-advanced.svg';
import arcadeIcon from '../assets/images/icon-arcade.svg';
import proIcon from '../assets/images/icon-pro.svg';
import { formState } from './Stepper';

const planData: TplanOption[] = [
  {
    name: 'arcade',
    icon: arcadeIcon,
    price: 9,
  },
  {
    name: 'advanced',
    price: 12,
    icon: advancedIcon,
  },
  {
    name: 'pro',
    price: 15,
    icon: proIcon,
  },
];

const Step2 = () => {
  return (
    <div>
      <Plans />
      <div className="hstack gap-4 text-capitalize  fw-bold p-3 justify-content-center bg-light mt-4 rounded-2">
        <span>monthly</span>
        <Form.Switch className="m-0 checked" />
        <span>yearly</span>
      </div>
    </div>
  );
};

export default Step2;

const Plans = () => {
  return (
    <div className="hstack gap-4 p-2 w-100 ">
      {planData.map((plan) => (
        <Plan plan={plan} key={plan.name} />
      ))}
    </div>
  );
};

interface PlanProps {
  plan: TplanOption;
}
const Plan = ({ plan }: PlanProps) => {
  const { setValue, watch, register } = useFormContext<formState>();
  const planClass =
    watch('plan') === plan.name ? 'border border-primary bg-light' : 'border';

  return (
    <div
      className={`vstack ${planClass} rounded-3 p-3 col-4 cursor-pointer`}
      onClick={() => setValue('plan', plan.name)}
      {...register('plan')}
    >
      <img
        src={plan.icon}
        alt={`${plan.name} logo`}
        width="50px"
        height="50px"
        className="mb-5"
      />
      <p className="fw-bold mb-1 text-capitalize text-primary">{plan.name}</p>
      <p className="text-secondary">{`$${plan.price}/mo`}</p>
    </div>
  );
};
