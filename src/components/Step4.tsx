import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { formState } from '../App';
import { useApp } from '../store';

import { planData } from './Step2';
import { addonData } from './Step3';

const Step4 = () => {
  const { getValues } = useFormContext<formState>();
  const setStep = useApp((state) => state.setStep);
  const {
    'Online service': onlineservice,
    'Larger storage': largerSorage,
    'Customizable profile': customProfile,
    planDuration,
    plan,
  } = getValues();

  const planValue =
    planData.find((p) => p.name === plan)?.price[planDuration] ?? 0;
  const duration = planDuration === 'monthly' ? 'mo' : 'yr';

  const ol = onlineservice ? addonData[0].price[planDuration] : 0;
  const ls = largerSorage ? addonData[1].price[planDuration] : 0;
  const cp = customProfile ? addonData[2].price[planDuration] : 0;

  const total = planValue + ol + ls + cp;

  return (
    <>
      <ListGroup variant="flush" className="bg-light p-3 rounded-3">
        <ListGroupItem className="hstack bg-light py-4">
          <div className="vstack lh-sm">
            <span className="text-primary fw-bold">
              <span className="text-capitalize">{plan}</span>({planDuration})
            </span>
            <a className="" onClick={() => setStep(1)}>
              Change
            </a>
          </div>
          <span className="fw-bold">{`$${planValue}/${duration}`}</span>
        </ListGroupItem>
        <ListGroupItem className="hstack bg-light py-4">
          <div className="vstack gap-2">
            {onlineservice && (
              <div className="hstack lh-sm justify-content-between">
                <span className="text-secondary">
                  Online service({planDuration})
                </span>
                <span>{`+${addonData[0].price[planDuration]}/${duration}`}</span>
              </div>
            )}

            {largerSorage && (
              <div className="hstack lh-sm justify-content-between">
                <span className="text-secondary">
                  Larger storage({planDuration})
                </span>
                <span>{`+${addonData[1].price[planDuration]}/${duration}`}</span>
              </div>
            )}

            {customProfile && (
              <div className="hstack lh-sm justify-content-between">
                <span className="text-secondary">
                  Customizable profile({planDuration})
                </span>
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
    </>
  );
};

export default Step4;
