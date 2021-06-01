import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Sidebar from '../layout/Sidebar';
import Bar from '../layout/Bar';
import Main from '../layout/Main';
import Listado from '../master/Listado';
import Detalle from '../master/Detalle';

const MyAppRoutes = () => {
  return (
    <Switch>
      <div className="contenedor-app">
        <Sidebar />
        <div className="seccion-principal">
          <Bar />
          <div className="cotenedor-tareas">
            <Route exact path="/main" component={Main} />
            <Route exact path="/listado" component={Listado} />
            <Route exact path="/detalle" component={Detalle} />
          </div>
        </div>
      </div>
    </Switch>
  )
};

export default MyAppRoutes;
