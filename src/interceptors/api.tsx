import fetchInterceptor from "fetch-intercept";
import { useEffect, useLayoutEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export const ApiInterceptor = () => {
  const { data: { signed } } = useAuth();

  useLayoutEffect(() => {
    fetchInterceptor.register({
      request: function(url, config) {
        const urlWithDomain = `${import.meta.env.VITE_API_URL}/${url}`;
  
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
  
        if (signed) headers.set('Authorization', `Bearer DEFAULT_TOKEN`);
  
        return [urlWithDomain, { ...config, headers }];
      }
    });
  }, []);

  return <></>;
};