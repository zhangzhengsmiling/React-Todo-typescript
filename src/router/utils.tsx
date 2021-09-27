import React from 'react';
import { Redirect } from 'react-router-dom';

export const wrapperPathWithParams = (url: string, params: any): string => {
  const keys = Object.keys(params);
  let _url = url;
  keys.forEach(key => {
    _url = _url.replace(`:${key}`, params[key]);
  });
  return _url;
}

export const redirectTo = (path: string) => {
  return () => <Redirect to={path} />;
}
