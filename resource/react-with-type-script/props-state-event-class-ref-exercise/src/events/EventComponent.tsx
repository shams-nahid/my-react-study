const EventComponent: React.FC = () => {
  const onChange:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined = event => {
    console.log(event);
  };
  const onDragStart:
    | React.DragEventHandler<HTMLDivElement>
    | undefined = event => {
    console.log(event);
  };
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me
      </div>
    </div>
  );
};

export default EventComponent;
