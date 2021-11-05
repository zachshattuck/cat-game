import { gameLoop, setup } from './game'

document.getElementById("close").addEventListener("click", () => {
  window.close()
})

setup()
gameLoop()