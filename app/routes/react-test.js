import Route from '@ember/routing/route';
import { schedule } from '@ember/runloop';
import React from "react";
import ReactDOM from "react-dom";

import {Greeter} from '../src/hello';

export default class ReactTestRoute extends Route {
  setupController() {
    schedule("afterRender", () => {
      ReactDOM.render(
        <Greeter name="stephen"/>,
        document.getElementById("react-test")
      );
    });
  }
}
