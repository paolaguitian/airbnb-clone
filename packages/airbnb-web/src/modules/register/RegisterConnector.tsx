// controller ->         connector ->          view
// graphql calls  | decides which to render | native or web
import * as React from 'react';
import { RegisterView }  from './view/RegisterView';

export const RegisterConnector = () => <RegisterView/>;