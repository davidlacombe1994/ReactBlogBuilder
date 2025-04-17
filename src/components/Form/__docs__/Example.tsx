import React, { FC } from 'react';
import Form, { FormProps } from '../Form';

const Example: FC<FormProps> = ({ className }) => {
  return (
    <div>
      <Form style={{ color: 'black' }} />
    </div>
  );
};

export default Example;
