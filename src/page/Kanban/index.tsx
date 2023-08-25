import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import CustomLayout from './components/CustomLayout';
import Preview from './components/Preview';

const boxes = [
  {
    id: 'index1',
    itemList: [
      { top: 20, left: 80, title: 'box1-1', id: 'box1-1' },
      { top: 20, left: 80, title: 'box1-2', id: 'box1-2' },
      { top: 20, left: 80, title: 'box1-3', id: 'box1-3' },
      { top: 180, left: 20, title: 'box1-4', id: 'box1-4' },
      { top: 180, left: 20, title: 'box1-5', id: 'box1-5' },
      { top: 180, left: 20, title: 'box1-6', id: 'box1-6' },
    ],
  },
  {
    id: 'index2',
    itemList: [
      { top: 20, left: 80, title: 'box2-1', id: 'box2-1' },
      { top: 20, left: 80, title: 'box2-2', id: 'box2-2' },
      { top: 20, left: 80, title: 'box2-3', id: 'box2-3' },
      { top: 180, left: 20, title: 'box2-4', id: 'box2-4' },
      { top: 180, left: 20, title: 'box2-5', id: 'box2-5' },
      { top: 180, left: 20, title: 'box2-6', id: 'box2-6' },
    ],
  },
  {
    id: 'index3',
    itemList: [
      { top: 20, left: 80, title: 'box3-1', id: 'box3-1' },
      { top: 20, left: 80, title: 'box3-2', id: 'box3-2' },
      { top: 20, left: 80, title: 'box3-3', id: 'box3-3' },
      { top: 180, left: 20, title: 'box3-4', id: 'box3-4' },
      { top: 180, left: 20, title: 'box3-5', id: 'box3-5' },
      { top: 180, left: 20, title: 'box3-6', id: 'box3-6' },
    ],
  },
  {
    id: 'index4',
    itemList: [
      { top: 20, left: 80, title: 'box4-1', id: 'box4-1' },
      { top: 20, left: 80, title: 'box4-2', id: 'box4-2' },
      { top: 20, left: 80, title: 'box4-3', id: 'box4-3' },
      { top: 180, left: 20, title: 'box4-4', id: 'box4-4' },
      { top: 180, left: 20, title: 'box4-5', id: 'box4-5' },
      { top: 180, left: 20, title: 'box4-6', id: 'box4-6' },
    ],
  },
];

// style component
const Container = styled('div')`
  margin: 20px 0;
`;

export default function Kanban() {
  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        {boxes.map((item, index) => {
          return <CustomLayout key={index} boxes={item} index={index} />;
        })}
        <Preview />
      </DndProvider>
      <Outlet />
    </Container>
  );
}
