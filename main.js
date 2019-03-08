window.jQuery = function () {
    let nodes = {}
    nodes.addClass = function () { }
    nodes.html = function () { }
    return nodes
}

window.jQuery.ajax = function (options) {
    let url = options.url
    let method = options.method
    let successFn = options.successFn
    let failFn = options.failFn
    let body = options.body
    let headers = options.headers


    let request = new XMLHttpRequest()
    request.open(method, url)
    for(let key in headers){
        let value = headers[key]
        request.setRequestHeader(key,value)
    }
    request.send(body)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                successFn.call(undefined, request.responseText)
            } else if (request.status >= 400) {
                failFn.call(undefined, request)
            }
        }
    }
}
function f1(responseText){}
function f2(responseText){}

myButton.addEventListener('click', (e) => {
    window.jQuery.ajax({
        url: '/gg',
        method: 'get',
        headers:{
            'content-type':'application/x-www-form-urlencoded',
            'jack':20
        },
        successFn: (x) => {
            console.log(x)
            f1.call(undefined,x)
            f2.call(undefined,x)
        },
        failFn: (x) => {
            console.log(x)
            console.log(x.status)
        }
    })
})