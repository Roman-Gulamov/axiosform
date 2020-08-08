import React, { ChangeEvent } from 'react';
import { IContext } from '../interface/Interface';

export const Context = React.createContext<IContext>({
    handleChange: (event: ChangeEvent<HTMLInputElement>) => {}
});