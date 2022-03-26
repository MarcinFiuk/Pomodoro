import React from 'react';

const TimerInput = (props) => {
    const { label, ...rest } = props;

    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input
                type='number'
                id={label}
                min='0'
                max='60'
                {...rest}
                pattern='[1-9]|[1-5][0-9]|60'
            />
        </div>
    );
};

export default TimerInput;
