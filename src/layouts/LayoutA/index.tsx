import React from 'react';
import { renderRoutes } from 'react-router-config';

const LayoutA = (props: any) => {
  return (
    <>
      <p>this is layout A</p>
      <header>this is header</header>
      <main>
        {renderRoutes(props.route.routes)}
      </main>
      <footer>this is footer</footer>
    </>
  )
}

export default LayoutA;
