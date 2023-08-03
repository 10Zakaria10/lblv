import { ParsedUrlQuery } from "querystring";

export const getIdFromQuery = (query: ParsedUrlQuery): string | undefined => {
    const { id } = query;
    return typeof id == "string" ? id : undefined;
  };