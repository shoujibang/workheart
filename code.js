/**
 * 对象深拷贝--递归实现
 */
var deepCopy = (obj) => {
    var ret = {}
    for (var key in obj) {
        var value = obj[key]
        ret[key] = typeof value === 'object' ? deepCopy(value) : value
    }
    return ret
}
/**
 * 对象浅拷贝--es6语法
 */
var a = { count: 1, deep: { count: 2 } }
var b = Object.assign({}, a)
// 或者
var b = {...a}
