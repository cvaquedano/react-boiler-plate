import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Sidebar from '../layout/Sidebar';
import Bar from '../layout/Bar';
import Main from '../layout/Main';
import MasterList from '../master/MasterList';
import MasterNew from '../master/MasterNew';
import MasterEdit from '../master/MasterEdit';


import MasterStatusList from '../masterStatus/MasterStatusList';
import MasterStatusNew from '../masterStatus/MasterStatusNew';
import MasterStatusEdit from '../masterStatus/MasterStatusEdit';
import MasterDetailList from '../master/masterDetail/MasterDetailList';
import masterDetailNew from '../master/masterDetail/MasterDetailNew';
import MasterDetailEdit from '../master/masterDetail/MasterDetailEdit';

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

            <Route exact path="/master/:masterId/detail" component={MasterDetailList} />
            <Route exact path="/master/:masterId/detail/new" component={masterDetailNew} />
            <Route exact path="/master/:masterId/detail/edit/:id" component={MasterDetailEdit} />

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
