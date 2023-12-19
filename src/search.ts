import { apiResponse } from "./types/types";

const search = (data: apiResponse, query: string, property: keyof apiResponse[0]) => {
    return data.filter((item) =>
        String(item[property]).toLowerCase().includes(query.toLowerCase())
    );
};

export default search;