export const RANDOMIZE_FIRST_COLOR = 'RANDOMIZE_FIRST_COLOR';
export const RANDOMIZE_LAST_COLOR = 'RANDOMIZE_LAST_COLOR';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

export const randomizeFirstColor = (firstColor) => ({
  type: RANDOMIZE_FIRST_COLOR,
  firstColor,
});

export const randomizeLastColor = (lastColor) => ({
  type: RANDOMIZE_LAST_COLOR,
  lastColor,
});

export const changeDirection = (direction) => {
  return {
    type: CHANGE_DIRECTION,
    direction,
  };
};
