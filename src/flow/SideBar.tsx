import React from 'react';
import NodeListItem from './NodeListItem';
import { nodeTypes } from './CustomNodesList';

export default function SideBar() {
  return (
    <aside style={{ borderRight: '1px solid #eee', padding: '15px 10px', fontSize: '12px', background: '#fcfcfc' }}>     
      {Object.keys(nodeTypes).map((item) => (
        <NodeListItem title={item} description={item} nodeType={item} />
      ))}   
    </aside>
  );
}
