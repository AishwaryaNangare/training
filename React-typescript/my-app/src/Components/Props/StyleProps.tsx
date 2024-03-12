
type StylesProps={
    style:React.CSSProperties
}

function StyleProps(props:StylesProps) {
  return (
    <div style={props.style}>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore magnam fugit et nam hic vel voluptatum perferendis, quis aspernatur expedita sunt ex enim quasi laboriosam laudantium eum, vero architecto pariatur, asperiores iure. Repudiandae, aliquam!</p>  
    </div>
  )
}

export default StyleProps
