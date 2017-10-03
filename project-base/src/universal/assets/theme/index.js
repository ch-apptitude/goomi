import Metrics from './metrics';
import Colors from './colors';
import { sizes } from './media';

const sizeNew = {};
Object.keys(sizes).forEach(size => {
  sizeNew[size] = `${sizes[size]}em`;
});

export default {
  Metrics,
  Colors,
  Sizes: sizeNew,
};
