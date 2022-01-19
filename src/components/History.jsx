import React from 'react'
import HistoryItem from './HistoryItem';

const History = (props) => {
    return (
        <div>
            <div className='display-6'>History</div>
            <hr />
            {props.data?.map((item) => <HistoryItem key={item.id} {...item} handleDelete={props.handleDelete} />)}
            <br/>
        </div>
    )
}

export default History;
