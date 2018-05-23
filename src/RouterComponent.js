import React from "react";
import { Scene, Router } from "react-native-router-flux";
import navigation1 from './navigation1';
import navigation2 from './navigation2';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="firstParent" initial>
          <Scene
            key="firstpage"
            component={navigation1}
            intital
            title="Hello"
          />
        </Scene>

        <Scene key="secondParent">
          <Scene key="secondpage" component={navigation2} title="secondpage" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;