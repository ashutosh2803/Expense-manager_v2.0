import React from 'react'
import HistoryItem from './HistoryItem';

const History = (props) => {
    return (
        <div>
            {props.data.length === 0 ? (<div className='display-6'>History</div>) : (<div className='d-flex justify-content-between'>
                <div className='display-6'>History</div>
                <button className='btn btn-light fw-bold display-2' style={{letterSpacing: '0.2ch'}} onClick={props.handleDeleteAll}>Delete All</button>
            </div>)}
            <hr />
            {props.data?.map((item) => <HistoryItem key={item.id} {...item} handleDelete={props.handleDelete} />)}
            <br/>
        </div>
    )
}

export default History;
