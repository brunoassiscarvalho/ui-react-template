import Card from '../molecules/Card';
import React from 'react';

interface PropsNodeListItem {
  nodeType: string;
  title: string;
  description: string;
  icon?: any;
}

export default function NodeListItem(params: PropsNodeListItem) {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  return (
    <div onDragStart={(event: React.DragEvent<HTMLDivElement>) => onDragStart(event, params.nodeType)} draggable>
      <Card {...params} />
    </div>
  );
}
