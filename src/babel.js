async function start() {
    return await Promise.resolve('async is wirking')
}

start().then(console.log)

class Util {
    static id = Date.now()
}

console.log('Utid.id: ', Util.id)