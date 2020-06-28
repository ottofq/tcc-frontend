import { generateMedia } from 'styled-media-query';

const media = generateMedia({
  xs: '0px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
});

export default media;
