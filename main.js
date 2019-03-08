window.jQuery = function () {
    let nodes = {}
    nodes.addClass = function () { }
    nodes.html = function () { }
    return nodes
}

window.jQuery.ajax = function (options) {
    return new Promise(function(resolve, reject){
        let url = options.url
        let method = options.method
       
        let body = options.body
        let headers = options.headers
    
    
        let request = new XMLHttpRequest()
        request.open(method, url)
        for(let key in headers){
            let value = headers[key]
            request.setRequestHeader(key,value)
        }
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    })
    
}
function f1(responseText){}
function f2(responseText){}

myButton.addEventListener('click', (e) => {
    window.jQuery.ajax({
        url: '/xxx',
        method: 'get',
        headers:{
            'content-type':'application/x-www-form-urlencoded',
            'jack':20
        }
    }).then(
        (text)=>{console.log(text)},
        (request)=>{console.log(request)}
    )
})