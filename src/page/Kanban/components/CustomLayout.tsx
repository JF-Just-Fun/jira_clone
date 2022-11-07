import { CSSProperties, FC, useEffect } from 'react';
import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';

import Card from './Card';

interface DragItem {
  id: string;
  type: string;
  left: number;
  top: number;
}

const styles: CSSProperties = {
  width: 320,
  minHeight: 300,
  margin: '0 10px',
  display: 'inline-block',
  border: '1px solid black',
  position: 'relative',
};

export default function CustomLayout(props: any) {
  const boxes = props.boxes;
  const [{ itemData, canDrop }, dropRef] = useDrop(() => ({
    accept: 'box',
    drop(item: DragItem, monitor) {
      console.log('=> this is index', props.index);
      console.log('=> drop:', item);
      return monitor.getItem();
    },
    canDrop(item, monitor) {
      return item.id !== boxes.id;
    },
    collect(monitor) {
      return {
        itemData: monitor.getDropResult(),
        canDrop: monitor.canDrop(),
      };
    },
  }));

  useEffect(() => {
    console.log('=> canDrop', canDrop);
  }, [canDrop]);

  return (
    <div ref={dropRef} style={styles} data-name="drag layer">
      {boxes.itemList.map((item: any, index: any) => (
        <Card key={index} id={item.title} {...(item as { top: number; left: number; title: string })} />
      ))}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          backgroundColor: 'rgba(0,0,0,0.3)',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          display: canDrop ? 'block' : 'none',
        }}
      >
        drop to update!
      </div>
    </div>
  );
}
