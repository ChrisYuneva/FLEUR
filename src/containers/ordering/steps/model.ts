export enum OrderStep {
    INPUT_STEP = 'INPUT_STEP',
    LUCK = 'LUCK',
}

export type StageProps = {
    nextStep: () => void;
};
