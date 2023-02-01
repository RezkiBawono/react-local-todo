function Button({color, text}) {
    const onClick = () => {
        console.log('click');
    }
  
    return (
    <div>
      <button 
        onClick={onClick} 
        style={{ backgroundColor : color}} 
        className="btn" >
        {text}
        </button>
    </div>
  )
}

export default Button
