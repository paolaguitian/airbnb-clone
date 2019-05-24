// controller ->         connector ->          view
// graphql calls  | decides which to render | native or web
import * as React from 'react';
import { RegisterView }  from './view/RegisterView';

export class RegisterConnector extends React.Component {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  }
  render() {
    return (
      <RegisterView submit={this.dummySubmit} />
    );
  }
}
