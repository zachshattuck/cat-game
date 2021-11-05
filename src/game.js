import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
  width: 800, 
  height: 600,
})

export const setup = () => {
  document.body.appendChild(app.view)
  
  let sprite = PIXI.Sprite.from('./img/sample.png')
  
  app.stage.addChild(sprite)
}
