import {  useDispatch  } from 'react-redux'
import {  SuggestionItem  } from './styled'
import {  connect  } from 'react-redux'
import {  getWeather  } from '../../store/actions/weather'

const Suggestion = (props) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(getWeather(props.lat, props.long))
    }

    return <SuggestionItem onClick={onClick}>{props.label}</SuggestionItem>
}

export default connect()(Suggestion)