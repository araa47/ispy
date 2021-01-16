export const drawRect = (detections, ctx) => {
    detections.forEach(prediction => {
        const [x,y,width,height] = prediction['bbox'];
        const item = prediction['class'];
        const score = prediction['score'];

        const text = `${item}:${Math.round((score*100),2)}% `
        const color = 'green'
        ctx.strokeStyle = color 
        ctx.font = '18px Arial'
        ctx.fillStyle = color 

        ctx.beginPath()
        ctx.fillText(text,x,y)
        ctx.rect(x,y, width, height)
        ctx.stroke()

    })
}