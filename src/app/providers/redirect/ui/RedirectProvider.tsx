import React, {useEffect} from 'react';
import {useNavigate} from "react-router";

interface IRedirectProps {
    children: React.ReactNode,
    to: string,
}

export const RedirectProvider: React.FC<IRedirectProps> = ({children, to}) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(window.location.href === "http://localhost:3000/")
            navigate(to);
    }, []);

    return children
};