/*
 *
 * Ui actions
 *
 */

export const TOOGLE_MODAL_OPEN = 'App/ui/TOOGLE_MODAL_OPEN';
export const TOOGLE_STEPPER_OPEN = 'App/ui/TOOGLE_STEPPER_OPEN';
export const STEPPER_SET_STEP = 'App/ui/STEPPER_SET_STEP';

export const toogleModalOpen = (title, content) => ({
  type: TOOGLE_MODAL_OPEN,
  params: {
    title,
    content,
  },
});

export const toogleStepperOpen = (steps, activeStep) => ({
  type: TOOGLE_STEPPER_OPEN,
  params: {
    steps,
    activeStep,
  },
});

export const stepperSetStep = activeStep => ({
  type: STEPPER_SET_STEP,
  params: activeStep,
});
