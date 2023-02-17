import { step } from 'types';
import './App.css';
import Step1 from './components/Step1';
import Stepper from './components/Stepper';

const stepData: step[] = [
  {
    type: 'START',
    title: 'Personal info',
    resume: 'Please provide your name, email address, and phone number.',
    component: <Step1 />,
    buttonTag: 'your info',
  },
  {
    type: 'STEP',
    title: 'Select your plan',
    resume: 'You have the option of monthly or yearly billing.',
    component: <div>step2</div>,
    buttonTag: 'select plan',
  },
  {
    type: 'STEP',
    title: 'Pick add-ons',
    resume: 'Add-ons help enhance your gaming experience..',
    component: <div>step3</div>,
    buttonTag: 'add-ons',
  },
  {
    type: 'STEP',
    title: 'Finishing up',
    resume: 'Double-check everything looks OK before confirming.',
    component: <div>step4</div>,
    buttonTag: 'summary',
  },
  {
    type: 'END',
    component: <div>step5</div>,
  },
];

function App() {
  return (
    <div className="App">
      <aside>
        <ul>
          {stepData.map((step, index) => {
            const idx = index + 1;
            if (step.type !== 'END')
              return (
                <li>
                  <div>{idx}</div>
                  <p>step {idx}</p>
                  <p>text</p>
                </li>
              );
          })}
        </ul>
      </aside>
      <main>
        <Stepper steps={stepData} />
      </main>
    </div>
  );
}

export default App;
