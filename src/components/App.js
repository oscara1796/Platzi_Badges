import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew.js';
import BadgeEdit  from '../pages/BadgeEdit.js';
import Badges from '../pages/Badges.js';
import NotFound from '../pages/NotFound.js';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer.js';
import BadgeHome from '../pages/BadgeHome.js';


//Cuando no declraras un componente y usas una funcion
// la función es el metodo render de la clase component
function App(){
  return(
    <BrowserRouter>
      {/*Aqui vamos a poner rutas */}
      {/*El elemento BrowserRouter solo puede tener un elemento */}
      {/*Por eso encerramos las rutas en un div */}
      {/*Pero en lugar del div debemos usar un switch*/}
      <Layout>
        <Switch>
          {/*Tenemos que ponerle exact para que React router*/}
          {/*No se confunda con las rutas ya que el pirncipio de las dos*/}
          {/*Es igual*/}
          <Route exact path="/" component={BadgeHome} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}


export default App;
