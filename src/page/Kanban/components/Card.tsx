import type { CSSProperties, FC } from 'react';
import { memo, useEffect } from 'react';
import type { DragSourceMonitor } from 'react-dnd';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import { Box } from './Box';

function getStyles(left: number, top: number, isDragging: boolean): CSSProperties {
  return {
    position: 'relative',
    margin: 10,
    opacity: isDragging ? 0.3 : 1,
  };
}

export interface CardProps {
  id: string;
  title: string;
  left: number;
  top: number;
}

export default function Card(props: CardProps) {
  const { id, title, left, top } = props;
  const [{ isDragging }, dragRef, preview] = useDrag(
    () => ({
      type: 'box',
      item: { id, left, top, title },
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, title],
  );

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: false });
  }, [preview]);

  return (
    <div ref={dragRef} style={getStyles(left, top, isDragging)}>
      <Box title={title} />
    </div>
  );
}
