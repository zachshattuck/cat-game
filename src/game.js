import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
  width: 800, 
  height: 600,
})
let sprite = PIXI.Sprite.from('./img/sample.png')

export const setup = () => {
  document.body.appendChild(app.view)
  app.stage.addChild(sprite)
}

export const gameLoop = () => {
  let elapsed = 0.0;
  app.ticker.add(delta => {
    elapsed += delta
    sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
  })
}
