export const breakpoints = {
  sm: '420',
  md: '750',
  lg: '1200',
  xl: '1440',
};

const mediaMin = size => `@media screen and (min-width: ${size}px)`;
export const mediaMax = size => `@media screen and (max-width: ${size}px)`;

export const container = {
  width: '100%',
  maxWidth: `${breakpoints.lg}px`,
  margin: '0 auto',
  padding: '0 1rem',
};

export default mediaMin;
