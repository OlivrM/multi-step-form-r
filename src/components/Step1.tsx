import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { formState } from '../App';

const REQUIIRED_FIELD = 'this field is required';

type field = Pick<formState, 'name' | 'email' | 'phone'>;

interface IFormData {
  name: keyof field;
  label: string;
  type: string;
  placeholder?: string;
}

const personalFormData: IFormData[] = [
  {
    name: 'name',
    label: 'name',
    type: 'text',
    placeholder: 'eg. Stephen King',
  },
  {
    name: 'email',
    label: 'email address',
    type: 'email',
    placeholder: 'e.g. stephenking@lorem.com',
  },
  {
    name: 'phone',
    label: 'phone number',
    type: 'phone',
    placeholder: 'e.g +1 234 567 890',
  },
];

const Step1 = ({}) => {
  const { register, formState } = useFormContext<formState>();
  return (
    <div className="p-2">
      {personalFormData.map((data) => (
        <Form.Group className="pb-3 position-relative">
          <Form.Label htmlFor={data.name} className="text-capitalize">
            {data.name}
          </Form.Label>
          <Form.Control
            type={data.type}
            placeholder={data.placeholder}
            id={data.name}
            {...register(data.name, { required: REQUIIRED_FIELD })}
            isInvalid={Boolean(formState.errors[`${data.name}`]?.message)}
          />
          <Form.Control.Feedback
            type="invalid"
            className="position-absolute top-0 text-end"
          >
            {formState.errors[`${data.name}`]?.message}
          </Form.Control.Feedback>
        </Form.Group>
      ))}
    </div>
  );
};

export default Step1;
