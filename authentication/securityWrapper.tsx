import Router from "next/router";
import React from "react";
import routes from "~components/Routes/routes";
import { useAuthentication } from "~authentication/hooks";

interface SecurityWrapperProps {
  secure?: boolean;
}

export const SecurityWrapper: React.FC<SecurityWrapperProps> = ({
  children,
  secure,
}) => {
  const { isAuthenticated } = useAuthentication();
  const redirectTo = (page: string) => {
    if (process.browser) {
      Router.push(page);
    }
  };

  if (secure && !isAuthenticated) {
    redirectTo(routes.SIGN_IN);
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};
