
type ButtonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>, id:Number)=>void
}

function EventProps(props:ButtonProps) {
  return (
    <div>
     <button onClick={(event)=>props.handleClick(event,1)}>Click</button> 
    </div>
  )
}
export default EventProps
