
import { PageInfo } from "../typings";

export const fetchPageInfo = async() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/getPageInfo`);

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    // console.log('fetching', pageInfo);

    return pageInfo;
}