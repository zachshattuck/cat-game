import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
  width: 800, 
  height: 600,
  backgroundColor: 0x11111A
})


export const setup = () => {
  document.body.appendChild(app.view)
}

export const gameLoop = () => {
  let elapsed = 0.0;
  app.ticker.add(delta => {
    
  })
}
