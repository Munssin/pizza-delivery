import React from "react";
import {useActions} from "../../../helpers/hooks/useActions";
import {clearAlerts} from "../../../redux/actions/alertsAction";

export const Alert = (props) => {
    const {id, variant, message} = props;

    const removeAlert = useActions(clearAlerts);

    const setTimeAlert = () => {
        removeAlert(id);
    };

    return (
        <div variant={variant} className={`alert-item ${variant === 'error' ? 'error' : ''}`}>
            <div onClick={setTimeAlert} className="remove-alert">

            </div>
            <div className="alert-item__name">{message}</div>
        </div>
    );
};