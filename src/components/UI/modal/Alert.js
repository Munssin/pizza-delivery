import React, {useEffect} from "react";
import {ButtonComponent} from "..";
import {useActions} from "../../../helpers/hooks/useActions";
import {clearAlerts} from "../../../redux/actions/alertsAction";


export const Alert = (props) => {
    const {id, variant, message} = props;

    const removeAlert = useActions(clearAlerts);

    const setTimeAlert = () => {
        removeAlert(id)
    };

    return (
        <div variant={variant} className="alert-item">
            <div onClick={setTimeAlert} className="remove-alert">

            </div>
            <div className="alert-item__name">{message}</div>
        </div>
    );
};