import React from 'react';
import {ChildComponent1, ChildComponent2, ChildComponent3} from './ChildComponents';

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent1 />
      <ChildComponent2 />
      <ChildComponent3 />
      {/* Add more child components here */}
    </div>
  );
};

export default ParentComponent;