import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { OnboardingView } from './screens/onboarding/OnboardingView';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={OnboardingView}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
