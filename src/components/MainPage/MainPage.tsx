import React, {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestData, requestSearchedData} from "../../Redux/unravel/unravel-reducer";
import {Items} from "./Items/Items";
import {AppStateType} from "../../Redux/redux-store";
import {StyledMainPage} from "./StyledMainPage";
import {Search} from "./Search/Search";

export const MainPage: FC = () => {
    const items = useSelector((state: AppStateType) => state.unravel.items)
    const searchedItems = useSelector((state: AppStateType) => state.unravel.searchedItems)
    const [searchedValue, setSearchedValue] = useState('')

    const [fetching, setFetching] = useState(true)

    const dispatch = useDispatch()

    useEffect(() => {
        if (fetching) {
            if(searchedItems.length === 0) {
                // @ts-ignore
                dispatch(requestData((items.length / 20) + 1))
            }else {
                // @ts-ignore
                dispatch(requestSearchedData((searchedItems.length / 20) + 1, searchedValue, "add"))
            }
            setFetching(false)
        }
    }, [fetching])

    useEffect(() => {

        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [items])

    useEffect(() => {

        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [searchedItems])

    const scrollHandler = () => {
        if ((document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 1)) {
            document.removeEventListener('scroll', scrollHandler)
            setFetching(true)
        }
    }


    return <StyledMainPage>
        <Search searchedValue={searchedValue} setSearchedValue={setSearchedValue} />
        {items && <Items items={searchedItems.length === 0 ? items : searchedItems}/>}
    </StyledMainPage>
}