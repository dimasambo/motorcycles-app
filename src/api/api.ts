import {ItemType, SearchedData} from "../types/types";
import axios from "axios";

const accessKey = '18kE-8Xtsdrc1ryjClsPR7TGBLs4bYHkSBXrS2PZJDw'

export const api = {
    getData(page = 1, size = 20) {
        return axios.get<Array<ItemType>>(`https://api.unsplash.com/photos?page=${page}&per_page=${size}&client_id=${accessKey}`)
            .then(response => response.data)
    },
    getSearchedData(page = 1, size = 20, text: string) {
        return axios.get<SearchedData>(`https://api.unsplash.com/search/photos?page=${page}&per_page=${size}&query=${text}&client_id=${accessKey}`)
            .then(response => response.data)
    }
}