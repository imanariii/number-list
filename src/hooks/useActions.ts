import {bindActionCreators} from "redux";
import {useDispatch} from "react-redux";
import * as HumanActionCreators from '../store/action-creators/human'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
        ...HumanActionCreators
    }, dispatch)
}