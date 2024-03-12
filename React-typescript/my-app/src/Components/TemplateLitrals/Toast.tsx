
type HorizontalPosition= 'left'| 'center'| 'right'
type VerticlePosition = 'top'| 'center'| 'bottom'

type ToastProps ={
    position:`${HorizontalPosition}-${VerticlePosition}`
}

function Toast({position}:ToastProps) {
  return (
    <div>
      toast notification position {position}
    </div>
  )
}

export default Toast
