console.log('New js file onload')
const div = document.createElement('div')
div.innerHTML = '新的JS已加载，请查看控制台，只可以加载一次，因为 const 了一个 div'
showSM.appendChild(div)