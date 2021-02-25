import React from 'react';
import Input from './steps/input';
import Luck from './steps/luck';
import { OrderStep, StageProps } from './steps/model';
import { useStages } from '../../hooks';

const steps = {
    [OrderStep.INPUT_STEP]: {
        component: Input,
        next: OrderStep.LUCK,
    },
    [OrderStep.LUCK]: {
        component: Luck,
        next: null,
    },
};

function Order() {
    const [currentStep, nextStep] = useStages(steps, OrderStep.INPUT_STEP);
    const Stage: React.FC<StageProps> = steps[currentStep].component;

    return (
        <div>
            <Stage nextStep={nextStep} />
        </div>
    );
}

export default Order;
