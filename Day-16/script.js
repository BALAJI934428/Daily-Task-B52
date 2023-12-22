

setTimeout(() => {
    document.getElementById('number').innerText = '10'
    setTimeout(() => {
        document.getElementById('number').innerText = '9'
        setTimeout(() => {
            document.getElementById('number').innerText = '8'
            setTimeout(() => {
                document.getElementById('number').innerText = '7'
                setTimeout(() => {
                    document.getElementById('number').innerText = '6'
                    setTimeout(() => {
                        document.getElementById('number').innerText = '5'
                        setTimeout(() => {
                            document.getElementById('number').innerText = '4'
                            setTimeout(() => {
                                document.getElementById('number').innerText = '3'
                                setTimeout(() => {
                                    document.getElementById('number').innerText = '2'
                                    setTimeout(() => {
                                        document.getElementById('number').innerText = '1'
                                        setTimeout(() => {
                                            document.getElementById('number').innerText = 'Happy Independence Day'
                                            let img = document.createElement('img')
                                            document.body.appendChild(img)
                                            img.setAttribute('src','./img.jpg')
                                            img.setAttribute('class','image')
                                            let style = document.createElement('style')
                                            document.body.appendChild(style)
                                            style.innerText= '@media(max-width: 512px){.image{width:400px}}@media(min-width: 512px){.image{width:1000px}}'
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        
        }, 1000)
    
    }, 1000);
    
}, 1000);























