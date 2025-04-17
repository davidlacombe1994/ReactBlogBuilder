import React, { FC } from 'react';
import Form, { FormProps } from '../Form';

const Example: FC<FormProps> = ({ style = { color: 'black' } }) => {
  return <Form style={style} />;
};

export default Example;
