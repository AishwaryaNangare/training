type ButtonProps={
    varient: 'primary'|'secondory'
} & React.ComponentProps<'button'>

function CustomButton({varient, children,...rest}:ButtonProps) {
  return (
    <div>
      <button className={`class-with-${varient}`} {...rest}>{children}</button>
    </div>
  )
}

export default CustomButton;
