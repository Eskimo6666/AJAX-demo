myButton.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest()
    request.open('get','http://jack.com:8002/xxx')
    request.send()
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            console.log('请求响应都完毕了')
            if(request.status >= 200&& request.status < 300){
                console.log('说明请求成功了')
                console.log(request.responseText)
                let string = request.responseText
                let object = window.JSON.parse(string)
                console.log(object)
                console.log(object.note)
                console.log(object.note.from)
            }else if(request.status >= 400){
                console.log('说明请求失败了')
            }
        }
    }
   
})