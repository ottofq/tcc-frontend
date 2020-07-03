import { generateMedia } from 'styled-media-query';

const media = generateMedia({
  xxs: '0px',
  xs: '360px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
});

export default media;
