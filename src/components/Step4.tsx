import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { formState } from './Stepper';

import { planData } from './Step2';
import { addonData } from './Step3';

const Step4 = () => {
  const { register, getValues } = useFormContext<formState>();

  const {
    'Online service': onlineservice,
    'Larger storage': largerSorage,
    'Customizable profile': customProfile,
    planDuration,
    plan,
  } = getValues();

  const planValue = planData.find((p) => p.name === plan)?.price[planDuration];
  const duration = planDuration === 'monthly' ? 'mo' : 'yr';
  const total = 0;

  return (
    <div className="p-2">
      <ListGroup variant="flush" className="bg-light p-3 rounded-3">
        <ListGroupItem className="hstack bg-light py-4">
          <div className="vstack lh-sm">
            <span className="text-primary fw-bold">{`Arcade(${planDuration})`}</span>
            <a href="#">Change</a>
          </div>
          <span className="fw-bold">{`$${planValue}/${duration}`}</span>
        </ListGroupItem>
        <ListGroupItem className="hstack bg-light py-4">
          <div className="vstack gap-2">
            {onlineservice && (
              <div className="hstack lh-sm justify-content-between">
                <span className="text-secondary">Online service(monthly)</span>
                <span>{`+${addonData[0].price[planDuration]}/${duration}`}</span>
              </div>
            )}

            {largerSorage && (
              <div className="hstack lh-sm justify-content-between">
                <span className="text-secondary">Arcade(monthly)</span>
                <span>{`+${addonData[1].price[planDuration]}/${duration}`}</span>
              </div>
            )}

            {customProfile && (
              <div className="hstack lh-sm justify-content-between">
                <span className="text-secondary">Arcade(monthly)</span>
                <span>{`+${addonData[2].price[planDuration]}/${duration}`}</span>
              </div>
            )}
          </div>
        </ListGroupItem>
      </ListGroup>
      <ListGroupItem className="p-4">
        <div className="hstack lh-sm justify-content-between">
          <span className="text-secondary">Total (per month)</span>
          <span>{`${total}/${duration}`}</span>
        </div>
      </ListGroupItem>
    </div>
  );
};

export default Step4;
