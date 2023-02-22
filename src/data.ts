import { step } from 'types';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';

export const stepData: step[] = [
  {
    type: 'START',
    title: 'Personal info',
    resume: 'Please provide your name, email address, and phone number.',
    component: Step1,
    buttonTag: 'your info',
    validation: ['name', 'email', 'phone'],
  },
  {
    type: 'STEP',
    title: 'Select your plan',
    resume: 'You have the option of monthly or yearly billing.',
    component: Step2,
    buttonTag: 'select plan',
  },
  {
    type: 'STEP',
    title: 'Pick add-ons',
    resume: 'Add-ons help enhance your gaming experience..',
    component: Step3,
    buttonTag: 'add-ons',
  },
  {
    type: 'LAST',
    title: 'Finishing up',
    resume: 'Double-check everything looks OK before confirming.',
    component: Step4,
    buttonTag: 'summary',
  },
  {
    type: 'END',
    component: Step5,
  },
];
