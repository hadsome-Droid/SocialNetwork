import React from 'react';

type Props = {
    title: string
    callBack: () =>  void
    disabled?: boolean
    className?: string
}

export const Button = ({title, callBack, disabled = false, className}:Props) => {
    return (
        <button className={className}  disabled={disabled} onClick={callBack}>{title}</button>
    );
};
