import { deleteCookies, getCookie } from "~utils/cookieUtils";
import { IS_AUTHENTICATED_COOKIE_NAME } from "./constants";

const useLogoutHandler = (): (() => void) => {
  return () => {
    deleteCookies();
  };
};

const useAuthentication = (): { isAuthenticated: boolean } => {
  const isAuthenticatedCookie = getCookie(IS_AUTHENTICATED_COOKIE_NAME);
  return {
    isAuthenticated: isAuthenticatedCookie !== undefined,
  };
};

export { useAuthentication, useLogoutHandler };
