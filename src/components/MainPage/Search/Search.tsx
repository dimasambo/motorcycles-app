import {FC} from "react";
import {Field, Form, Formik} from "formik";
import {StyledSearch} from "./StyledSearch";
import SearchIcon from './../../../assets/media/search.png'
import {useDispatch} from "react-redux";
import {requestData, requestSearchedData} from "../../../Redux/unravel/unravel-reducer";

type PropsType = {
    searchedValue: string
    setSearchedValue: (searchedValue: string) => void
}

type InitialValuesFormType = {
    value: string
}

export const Search: FC<PropsType> = ({searchedValue, setSearchedValue}) => {

    const dispatch = useDispatch()

    const onFormSubmit = (values: InitialValuesFormType) => {
        setSearchedValue(values.value)

        if(values.value === '') {
            // @ts-ignore
            dispatch(requestData(1))
        }else {
            // @ts-ignore
            dispatch(requestSearchedData(1, values.value, "set"))
        }
    }

    return <StyledSearch>
        <Formik
            enableReinitialize
            initialValues={{value: searchedValue}}
            onSubmit={onFormSubmit}
        >
            <Form className={''}>
                <Field type={"text"}
                       placeholder={"Search..."}
                       className={'input'}
                       name={"value"}/>
                <button type="submit" className={'button'}>
                    <img src={SearchIcon}/>
                </button>
            </Form>
        </Formik>
    </StyledSearch>
}