function cont() {
    var num1 = document.getElementById('num')
    var res = document.getElementById('res')
    var list = document.getElementById('list')

    if (num1.value.length == 0 ) {
        window.alert('[ERRO]')
    } else {
        var n1 = Number(num1.value)
        var d = 1
        list.innerHTML = ''
        for (var c = d;d <= 10;d+=1) {
            var item = document.createElement('option')
            item.text = `${n1} X ${d} = ${n1*d}`
            item.value = `tab${d}`
            list.appendChild(item)
        }
    }
}