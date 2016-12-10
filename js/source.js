console.log('linked up?')
function keyHandler(event){
  // console.log(event.keyCode)
  var codeDisplay = document.querySelector('#keyCodeDisplay')
  console.log(codeDisplay)
  codeDisplay.innerHTML = event.keyCode
  console.log(event)
}

function displayToggler(event){
  if(event.key==='Shift'){
    document.querySelector('#shiftPress').classList.toggle('hidden')
  }
  if(event.key==='Alt'){
    document.querySelector('#altPress').classList.toggle('hidden')
  }

}

window.addEventListener('keydown', keyHandler)
window.addEventListener('keydown',displayToggler)
window.addEventListener('keyup',displayToggler)
