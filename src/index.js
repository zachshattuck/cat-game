import { gameLoop, setup } from './game'

document.getElementById("close").addEventListener("click", e => {
  window.close()
})

setup()
gameLoop()