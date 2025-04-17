import React, { HTMLAttributes } from 'react';

export type FormProps = HTMLAttributes<HTMLDivElement>;

const Form: React.FC<FormProps> = ({ className }) => {
  return <div className={className}>Hi</div>;
};

export default Form;
