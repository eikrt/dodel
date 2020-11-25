import React, { useRef, useEffect } from 'react'

    let xCoords = [0];
    let yCoords = [0];
const Canvas = props => {
    
    
  const canvasRef = useRef(null)
    const draw = ctx => {
    ctx.fillStyle = '#000000'
	ctx.beginPath()
	let x;
	let y;
	for (x = 0; x < xCoords.length; ++x) {
	for (y = 0; y < yCoords.length; ++y) {
		ctx.arc(x, y, 20, 0, 2*Math.PI)

    console.log(x);
    console.log(y);
    ctx.fill()
	    }
	}
	
  }
  useEffect(() => {
    let canvas = canvasRef.current
      const context = canvas.getContext('2d')
      canvas.addEventListener("mousemove", getClickPosition, false); 
    draw(context)
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}
function getClickPosition(e) {
    let x = e.clientX;
    let y = e.clientY;
    xCoords.push(x);
    yCoords.push(y);
    
}
export default Canvas
