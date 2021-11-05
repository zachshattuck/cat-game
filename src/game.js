import * as PIXI from 'pixi.js'

const GROUNDHEIGHT = 60

const WIDTH = 800
const HEIGHT = 600
const app = new PIXI.Application({
  width: WIDTH, 
  height: HEIGHT,
  backgroundColor: 0x19283a
})

const farBg = new PIXI.Container()
farBg.interactiveChildren = false
farBg.filters = [new PIXI.filters.BlurFilter(4)]

const mountains = new PIXI.Graphics()
mountains.beginFill(0x166958)
mountains.drawPolygon([
  new PIXI.Point(100, HEIGHT-400),
  new PIXI.Point(-200, HEIGHT),
  new PIXI.Point(400, HEIGHT),
])
mountains.drawPolygon([
  new PIXI.Point(600, HEIGHT-450),
  new PIXI.Point(200, HEIGHT),
  new PIXI.Point(1000, HEIGHT),
])
farBg.addChild(mountains)


const closeBg = new PIXI.Container()
closeBg.interactiveChildren = false
closeBg.filters = [new PIXI.filters.BlurFilter(1)]

const trees = new PIXI.Graphics()
//Trunks
trees.beginFill(0x222200)
trees.drawRect(200, HEIGHT-GROUNDHEIGHT-50, 20, 50)
trees.drawRect(700, HEIGHT-GROUNDHEIGHT-50, 20, 50)
//Leaves
trees.beginFill(0x186545)
trees.drawPolygon([
  new PIXI.Point(210, HEIGHT-GROUNDHEIGHT-140),
  new PIXI.Point(165, HEIGHT-GROUNDHEIGHT-50),
  new PIXI.Point(255, HEIGHT-GROUNDHEIGHT-50),
])
trees.drawPolygon([
  new PIXI.Point(710, HEIGHT-GROUNDHEIGHT-140),
  new PIXI.Point(665, HEIGHT-GROUNDHEIGHT-50),
  new PIXI.Point(755, HEIGHT-GROUNDHEIGHT-50),
])
closeBg.addChild(trees)

const foreground = new PIXI.Container()
closeBg.interactiveChildren = false

const ground = new PIXI.Graphics()
ground.beginFill(0x444400)
ground.drawRect(0, HEIGHT-GROUNDHEIGHT, WIDTH, GROUNDHEIGHT)
foreground.addChild(ground)

const player = new PIXI.Graphics()
player.interactive = true
player.beginFill(0x44EEEE)
player.drawRect(100, HEIGHT-GROUNDHEIGHT-50, 50, 50)
const move = () => {
  player.x = player.x + 25
}
player.on('click', move)


export const setup = () => {
  document.body.appendChild(app.view)
  app.stage.addChild(farBg)
  app.stage.addChild(closeBg)
  app.stage.addChild(foreground)
  app.stage.addChild(player)
}

export const gameLoop = () => {
  let elapsed = 0.0;
  app.ticker.add(delta => {
    
  })
}
