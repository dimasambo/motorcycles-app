import {ItemType} from "../../../../types/types";
import {FC} from "react";
import {StyledCard} from "./StyledCard";

type UserPropsType = {
    item: ItemType
}

export const Card: FC<UserPropsType> = ({item}) => {

    return <StyledCard>
        <div className={'cardWrapper'}>
            <div className={'cardImgBox'}>
                <img src={item.urls.small}/>
            </div>
            <div className={'cardNameBox'}>
                <span>{item.description || 'no description'}</span>
            </div>
        </div>
    </StyledCard>
}