import { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
  MiniMap,
  Connection,
  Edge,
  NodeTypes,
  ReactFlowInstance,
  Node,
  getIncomers,
  getOutgoers,
  getConnectedEdges,
  ReactFlowJsonObject,
} from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from './SideBar';

import './index.css';

let id = 0;
const getId = () => `dndnode_${id++}`;

interface PropsDnDFlow {
  onNodeDoubleClick: any;
  nodeTypes: NodeTypes;
  flowData: any;
  onChange?: (data: ReactFlowJsonObject) => void;
}

const DnDFlow = ({ onNodeDoubleClick, nodeTypes, flowData, onChange }: PropsDnDFlow) => {
  const reactFlowWrapper = useRef<any>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(flowData.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(flowData.edges);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>();

  const onConnect = useCallback((params: Edge | Connection) => {
    setEdges((eds) => addEdge(params, eds));
  }, []);

  useEffect(() => {
    onChangeHandle();
  }, [edges, nodes]);

  const onChangeHandle = useCallback(() => {
    if (reactFlowInstance && !!onChange) {
      const flow: ReactFlowJsonObject = reactFlowInstance.toObject();
      onChange(flow);
    }
  }, [reactFlowInstance]);

  const onDragOver = useCallback((event: { preventDefault: () => void; dataTransfer: { dropEffect: string } }) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onNodesDelete = useCallback(
    (deleted: any[]) => {
      setEdges(
        deleted.reduce((acc, node) => {
          const incomers = getIncomers(node, nodes, edges);
          const outgoers = getOutgoers(node, nodes, edges);
          const connectedEdges = getConnectedEdges([node], edges);

          const remainingEdges = acc.filter((edge: Edge) => !connectedEdges.includes(edge));

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({ id: `${source}->${target}`, source, target }))
          );

          return [...remainingEdges, ...createdEdges];
        }, edges)
      );
    },
    [nodes, edges]
  );

  const onDrop = useCallback(
    (event: {
      preventDefault: () => void;
      dataTransfer: { getData: (arg0: string) => any };
      clientX: number;
      clientY: number;
    }) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

      const type = event.dataTransfer.getData('application/reactflow');

      if (!!reactFlowInstance) {
        if (typeof type === 'undefined' || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const newNode: Node<any, string | undefined> = {
          id: getId(),
          type,
          position,
          data: { label: `${type} node` },
        };
        setNodes((nds) => nds.concat(newNode));
      }
    },
    [reactFlowInstance]
  );

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onNodeDoubleClick={onNodeDoubleClick}
            onEdgesChange={onEdgesChange}
            onNodesDelete={onNodesDelete}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
            <Controls />
            <MiniMap />
            <Background variant={BackgroundVariant.Dots} gap={25} size={1} />
          </ReactFlow>
        </div>
        <Sidebar nodeTypes={nodeTypes} />
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
