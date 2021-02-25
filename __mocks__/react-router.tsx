import React from 'react';

module.exports = {
    Link: ({ children, to, ...rest }) => (
        <a {...rest} href={to || rest.href}>
            {children}
        </a>
    ),
    Redirect: () => null,
};
