import React from 'react';

const StatusHeader = ({ description, status }) => {
    return (
        <div style={{marginBottom: '20px'}}>
            <h1><span style={{color: 'grey'}}>{ description }</span> <span style={{color: 'black'}}>{ status }</span></h1>
        </div>
    );
}
 
export default StatusHeader;