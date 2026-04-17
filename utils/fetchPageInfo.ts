import { pageInfoData } from "../data/pageInfo";
import { PageInfo } from "../typings";

export const fetchPageInfo = async (): Promise<PageInfo> => {
  return pageInfoData as PageInfo;
};
