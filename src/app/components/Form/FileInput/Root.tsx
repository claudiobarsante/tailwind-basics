import React, { ComponentProps } from 'react';

type RootProps = ComponentProps<'div'>;

function Root(props: RootProps) {
  return <div {...props} />;
}

export default Root;
