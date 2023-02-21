import { FormGroup } from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import { useFormContext } from 'react-hook-form';
import { Taddon } from 'types';
import { formState } from '../App';

export const addonData: Taddon[] = [
  {
    name: 'Online service',
    definition: 'Access to multiplayer games',
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    name: 'Larger storage',
    definition: 'Extra 1TB of cloud save',
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    name: 'Customizable profile',
    definition: 'Custom theme on your profile',
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];

const Step3 = () => {
  return (
    <div className="vstack gap-3">
      {addonData.map((addon) => (
        <Addon {...addon} key={addon.name} />
      ))}
    </div>
  );
};

export default Step3;

interface AddonProps extends Taddon {}
const Addon = ({ name, definition, price }: AddonProps) => {
  const { register, watch } = useFormContext<formState>();

  const planDuration = watch('planDuration');
  const duration = planDuration === 'monthly' ? 'mo' : 'yr';
  const calculatedPrice = `$${price[planDuration]}/${duration}`;

  const selected = watch(name) ? 'border-info' : '';

  return (
    <FormGroup
      className={`${selected} hstack p-2 border rounded-3 position-relative`}
    >
      <div className="m-3">
        <FormCheckInput className="stretched-link" {...register(`${name}`)} />
      </div>
      <div className="w-100 lh-sm justify-content-center vstack">
        <span className="text-primary fw-bold">{name}</span> <br />
        <span className="text-secondary">{definition}</span>
      </div>
      <span>{calculatedPrice}</span>
    </FormGroup>
  );
};
