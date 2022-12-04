import {FC} from "react";
import {StyledHeader} from "./StyledHeader";
import Logo from './../../assets/media/logo.png'

export const Header: FC = () => {
    return <StyledHeader>
        <div className={'logoWrapper'}>
            <div className={'logo'}>
                <img src={Logo}/>
            </div>
            <div className={'logoName'}>Classify</div>
        </div>
    </StyledHeader>
}