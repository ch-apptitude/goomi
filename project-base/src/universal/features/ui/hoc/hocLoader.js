/*
 *
 * hocLoader
 *
 */
import { renderComponent, branch } from 'recompose';

import Loader from 'features/ui/components/Loader';

const hocLoader = (hasLoaded) => branch((props) => !hasLoaded(props), renderComponent(Loader), (baseComponent) => baseComponent);

export default hocLoader;
