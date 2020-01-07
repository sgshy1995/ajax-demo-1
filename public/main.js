getCSS.onclick = function () {
    const request = new XMLHttpRequest()
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                alert('加载CSS失败')
            }
        }
    }
    request.open('GET', '/css')
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.onreadystatechange = () => {
        if (request.readyState === 4) { 
            if(request.status >= 200 && request.status < 300) {
                let jsonText
                try {
                    jsonText = JSON.parse(request.response)
                    console.log(jsonText)
                } catch (error) {
                    jsonText = {'name':'Eden'}
                }
                const ul = document.createElement('ul')
                for (key in jsonText) {
                    const li = document.createElement('li')
                    li.innerHTML = `${key}：${jsonText[key]}`
                    console.log(key,jsonText[key])
                    ul.appendChild(li)
                }
                showSM.appendChild(ul)
                myName.innerHTML = jsonText.name
                myName.style.color = 'red'
            } else {
                alert('加载JSON失败')
            }
        }
    }
    request.open('GET','/json')
    request.send()
}

getXML.onclick = function () {
    const request = new XMLHttpRequest()
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div')
                const xmlText = request.responseXML.getElementsByTagName('warning')[0].textContent
                div.innerHTML = xmlText
                div.style.color = 'red'
                showSM.appendChild(div)
            } else {
                alert('加载XML失败')
            }
        }
    }
    request.open('GET', '/xml')
    request.send()
}

getJS.onclick = function () {
    const request = new XMLHttpRequest()
    request.open('GET', '/new-js')
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('error')
    }
    request.send()
}

getHTML.onclick = function () {
    const request = new XMLHttpRequest()
    request.open('GET', '/new-html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        showSM.appendChild(div)
    }
    request.onerror = () => {
        console.log('error')
    }
    request.send()
}

let n = 2
showUser.onclick = () => {
    const request = new XMLHttpRequest()
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            let array = JSON.parse(request.response)
            array.forEach(item => {
                let li = document.createElement('li')
                li.innerHTML = item.id
                userList.appendChild(li)
            });
        }    
    }
    request.open('GET', `/json${n}`)
    request.send()
    n+=1
}