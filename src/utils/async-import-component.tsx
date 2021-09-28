import React, { lazy, Suspense } from 'react';

type TypeModuleComponent = React.ComponentType<any>;
type TypeModule = {
  default: TypeModuleComponent
};
type TypeModuleImportCallback = () => Promise<TypeModule>;

const asyncImportComponent = (importPromiseCallback: TypeModuleImportCallback) => {
  const LazyPage = lazy(() => importPromiseCallback()); 
  return () => {
    return (
      <Suspense fallback={<span>loading....</span>}>
        <LazyPage />
      </Suspense>
    )
  }
}

export default asyncImportComponent;
