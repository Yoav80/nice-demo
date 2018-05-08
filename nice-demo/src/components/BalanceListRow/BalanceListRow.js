import moment from 'moment'
import React from 'react';

// Styling taken from bootstrap

const BalanceListRow = (props) => {
    const {from, date, description, amount} = props.rowData;
    const currency = props.currency;
    // formating done by moment just because it is easy and more advanced
    const formattedDate = moment(new Date(date)).format('LLLL');

    return (
        <a className="list-group-item list-group-item-action --animate">
            <h2 className="mb-1 list-group-item-heading from">
                from: {from || 'Unknown'}
            </h2>   

            <h3 className="mb-1 list-group-item-text description">
                {description}
            </h3>

            <div className="mb-1 list-group-item-text formattedDate">
                {formattedDate}
            </div>

            <div className="mb-1 list-group-item-text amount">
                <span className="badge badge-success">
                    {amount} {currency}
                </span>
            </div>
        </a>
    )
}

export default BalanceListRow;