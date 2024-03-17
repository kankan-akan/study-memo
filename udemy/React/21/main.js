// POINT 非同期処理（await/async）
let a = 0;

{
new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 1;
        resolve(a) // resolve()が呼ばれてから、then()が実行される
    }, 2000);
}).then((b) => {
    console.log(a);
    return a;
}).then((a) => {
    console.log(a);
}).catch((c) => {
    console.log('catchが実行', c)
})
}


{
init();
async function init() {
    try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                a = 1;
                reject(a) // catchに処理が移る
            }, 2000);
        })
            console.log(result);
    } catch(e) {
        console.log('catchが実行', e)
    }

    // }).catch((c) => {
    //     console.log('catchが実行', c)
    // })

}
}
