document.addEventListener('DOMContentLoaded', function(){
   let numbers = document.querySelector('.numbers')
   let display = document.querySelector('input')
   let actions = document.querySelector('.actions')

   numbers.addEventListener('click', e => {
     if (!e.target.matches('.equal')) display.value += e.target.value
   })

   actions.addEventListener('click'), e => {})
 })
