import notistackRef from "./notistackRef";

import { QueryClient } from "react-query";
import { isApiError } from "./apiHelper";

const enqueueMessageOnSnacks = (error: unknown) => {
  if (isApiError(error)) {
    notistackRef.current?.enqueueSnackbar(error.code, { variant: "error" });
  }
  return;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      onError: (error) => {
        enqueueMessageOnSnacks(error);
      },
    },
    mutations: {
      retry: 0,
      onError: (error) => {
        enqueueMessageOnSnacks(error);
      },
    },
  },
});
