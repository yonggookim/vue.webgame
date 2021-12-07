//node환경에서는 require,  vue 환경에서는 import를 사용한다.

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = { //기본 구조 entry, module, plugins, output 
    mode: 'development', //mode에러 뜰 때 해결하는 방법이라네
    entry:{
        app: path.join(__dirname, 'main.js'),
    },
    module:{
        rules:[{
            test: /\.vue$/,
            loader: 'vue-loader' ,
            //numberbaseball.vue 파일내에 코드가 js가 아님을 해결하기 위해 loader(use) 불러옴
        }]
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    output:{
        filename: '[name].js', //name 자리에 자동으로 app이 들어감 app.js썼어도 ok
        path: path.join(__dirname, 'dist'),
    },
}