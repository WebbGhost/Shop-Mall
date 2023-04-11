import React from 'react';

type Props = {
    children: React.ReactNode;
};

function Container({ children }: Props) {
    return <div className="flex items-center  w-full">{children}</div>;
}

export default Container;
