import React from 'react';
import { NodeTypes } from 'reactflow';
import NodeListItem from './NodeListItem';

interface PropsSideBar {
  nodeTypes: NodeTypes;
}

export default function SideBar({ nodeTypes }: PropsSideBar) {
  return (
    <aside style={{ borderRight: '1px solid #eee', padding: '15px 10px', fontSize: '12px', background: '#fcfcfc' }}>
      {Object.keys(nodeTypes).map((item) => (
        <NodeListItem title={item} description={item} nodeType={item} />
      ))}
    </aside>
  );
}
