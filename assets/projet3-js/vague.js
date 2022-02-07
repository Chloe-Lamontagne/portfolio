const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

let wave = []
let t = 0

for (let i = 0; i < 400; i++) {
    wave.push(30)
}

function tick() {
    window.requestAnimationFrame(tick)

    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = "rgba(0, 153, 255, 0.3)"
    ctx.beginPath()
    ctx.moveTo(0, wave[0])  
    for (let i = 0; i < wave.length; i++) {
        wave[i] += Math.sin(i/40 + t/20) / 2
        ctx.lineTo(i * (canvas.width / wave.length), wave[i])
    }
    ctx.lineTo(1000, 1000)
    ctx.lineTo(0, 1000)
    ctx.fill()
    t++
}

window.requestAnimationFrame(tick)