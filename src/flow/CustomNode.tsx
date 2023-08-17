import { Paper } from '@mui/material';
import React, { ReactNode, memo } from 'react';
import { Handle, Position } from 'reactflow';

interface PopsCustomnode {
  isConnectable?: boolean;
  children: ReactNode;
  model?: 'OutputOnly' | 'InputOnly' | 'Full';
}

export default memo(({ isConnectable, children, model = 'Full' }: PopsCustomnode) => {
  return (
    <Paper sx={{ padding: 1, minWidth:100 }}>
      {model === 'InputOnly' || model === 'Full' ? <HandleInput isConnectable={isConnectable} /> : <></>}
      {children}
      {model === 'OutputOnly' || model === 'Full' ? <HandleOutput isConnectable={isConnectable} /> : <></>}
    </Paper>
  );
});

function HandleInput({ isConnectable }: any) {
  return (
    <Handle
      type="target"
      position={Position.Left}
      style={{
        background: '#555',
      }}
      onConnect={(params) => console.log('handle onConnect', params)}
      isConnectable={isConnectable}
    />
  );
}

function HandleOutput({ isConnectable }: any) {
  return (
    <Handle
      type="source"
      position={Position.Right}
      style={{
        background: '#555',
      }}
      onConnect={(params) => console.log('handle onConnect', params)}
      isConnectable={isConnectable}
    />
  );
}
