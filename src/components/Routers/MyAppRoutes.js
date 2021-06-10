import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Sidebar from '../layout/Sidebar';
import Bar from '../layout/Bar';
import Main from '../layout/Main';
import MasterList from '../master/MasterList';
import MasterNew from '../master/MasterNew';
import MasterEdit from '../master/MasterEdit';

import Detalle from '../master/Detalle';

import MasterStatusList from '../masterStatus/MasterStatusList';
import MasterStatusNew from '../masterStatus/MasterStatusNew';
import MasterStatusEdit from '../masterStatus/MasterStatusEdit';

const MyAppRoutes = () => {
  return (
    <Switch>
      <div className="contenedor-app">
        <Sidebar />
        <div className="seccion-principal">
          <Bar />
          <div className="cotenedor-tareas">
            <Route exact path="/main" component={Main} />


            <Route exact path="/master" component={MasterList} />
            <Route exact path='/master/new' component={MasterNew}/>
            <Route exact path='/master/edit/:id' component={MasterEdit}/>


            <Route exact path="/detalle" component={Detalle} />

            <Route exact path="/status" component={MasterStatusList} />
            <Route exact path='/status/new' component={MasterStatusNew}/>
            <Route exact path='/status/edit/:id' component={MasterStatusEdit}/>
          </div>
        </div>
      </div>
    </Switch>
  )
};

export default MyAppRoutes;
