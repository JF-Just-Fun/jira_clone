import type { CSSProperties, FC } from 'react';
import type { XYCoord } from 'react-dnd';
import { useDragLayer } from 'react-dnd';
import { createPortal } from 'react-dom';
import { memo, useEffect, useState } from 'react';

import { Box } from './Box';

const styles: CSSProperties = {
  display: 'block',
  cursor: 'grab',
  transform: 'rotate(3deg)',
  transformOrigin: '0 0',
};

export interface BoxDragPreviewProps {
  title: string;
}

export interface BoxDragPreviewState {
  tickTock: any;
}

export const PreviewBox: FC<BoxDragPreviewProps> = memo(function BoxDragPreview({ title }) {
  const [tickTock, setTickTock] = useState(false);

  useEffect(
    function subscribeToIntervalTick() {
      const interval = setInterval(() => setTickTock(!tickTock), 500);
      return () => clearInterval(interval);
    },
    [tickTock],
  );

  return (
    <div style={styles}>
      <Box title={title} yellow={tickTock} preview />
    </div>
  );
});

const layerStyles: CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  cursor: 'grab',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

function getItemStyles(initialOffset: XYCoord | null, currentOffset: XYCoord | null) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    };
  }

  let { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

export default function PreviewLayout() {
  const { itemType, isDragging, item, initialOffset, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging) {
    return null;
  }

  function renderItem() {
    switch (itemType) {
      case 'box':
        return <PreviewBox title={item.title} />;
      default:
        return null;
    }
  }

  return createPortal(
    <div style={layerStyles} data-name="custom drag layer">
      <div style={getItemStyles(initialOffset, currentOffset)}>{renderItem()}</div>
    </div>,
    document.querySelector('#root') as Element,
  );
}
