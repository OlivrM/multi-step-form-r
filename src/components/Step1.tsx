import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { formState } from './Stepper';

const Step1 = () => {
  const { register } = useFormContext<formState>();
  return (
    <div className="p-2">
      <Form.Group className="pb-3">
        <Form.Label htmlFor="name" className="text-capitalize">
          name
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="eg. Stephen King"
          id="name"
          {...register('name')}
        />
      </Form.Group>
      <Form.Group className="pb-3">
        <Form.Label htmlFor="name" className="text-capitalize">
          email Address
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          id="email"
          {...register('email')}
        />
      </Form.Group>
      <Form.Group className="pb-3">
        <Form.Label htmlFor="name" className="text-capitalize">
          phone number
        </Form.Label>
        <Form.Control
          type="phone"
          id="name"
          placeholder="e.g. +33 0102030405"
          {...register('phone')}
        />
      </Form.Group>
    </div>
  );
};

export default Step1;
