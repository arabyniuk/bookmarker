import React, { Fragment } from 'react'
import { useEffect } from "react"
import {useLocation, useHistory} from 'react-router-dom'
import { error, success, warning } from "../helpers/notifications"

export default function ShowAlert() {
    const location = useLocation()
    const history = useHistory();

    useEffect(() => {
        if (location.state && location.state.error_msg) {
          error(location.state.error_msg)
          history.replace({error_msg: ''})
        }
    }, [location]);

    return (
      <div></div>
    )
}