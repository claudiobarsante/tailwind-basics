import React, { ComponentProps } from 'react';

type ControlProps = ComponentProps<'input'>;

function Control(props: ControlProps) {
  return <input type="file" className="sr-only" id="photo" {...props} />;
}

export default Control;
