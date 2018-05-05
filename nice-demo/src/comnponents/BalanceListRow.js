import moment from 'moment'
import React from 'react';

// Styling taken from bootstrap

const BalanceListRow = (props) => {
    const {from, date, description, amount} = props.rowData;
    const currency = props.currency;
    const formattedDate = moment(new Date(date)).format('LLLL');

    return (
        <a className="list-group-item list-group-item-action flex-column align-items-start">
            <h2 className="mb-1 list-group-item-heading">
                from: {from || 'Unknown'}
            </h2>

            <h4 className="mb-1 list-group-item-text">
                {description}
            </h4>

            <small className="mb-1 list-group-item-text">
                {formattedDate}
            </small>

            <div className="mb-1 list-group-item-text">
                <span className="badge badge-success">
                    {amount} {currency}
                </span>
            </div>

        </a>
    )
}

export default BalanceListRow;