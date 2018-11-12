import React from 'react'
import {logout} from '../../utils/logout'
import { Redirect } from 'react-router-dom'

const Logout = (props) => {
    logout();
    return (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )
}

export default Logout