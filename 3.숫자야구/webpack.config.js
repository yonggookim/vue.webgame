//node환경에서는 require,  vue 환경에서는 import를 사용한다.

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = { //기본 구조 entry, module, plugins, output 
    mode: 'development', //목적이 개발이면 development, 배포면 production
    devtool: 'eval', // 개발시 eval, 배포시 hidden-source-map
    resolve:{
        extensions: ['.js', '.vue'], //파일 이름 뒤에 .vue를 안붙여도 찾아준다.
    },
    entry:{
        app: path.join(__dirname, 'main.js'),
    },
    module:{ 
        rules:[{
            test: /\.vue$/,
            loader: 'vue-loader' ,
            //numberbaseball.vue 파일내에 코드가 js가 아님을 해결하기 위해 loader(use) 불러옴
            //이처럼 entry후 작업중 희안한거 만날 때 moduel이 rule이 해결해준다.
        }]
    },
    plugins:[ //module들이 처리하다가 output이 나오기 전에 plugin으로 최종 가공
        new VueLoaderPlugin(),
    ],
    output:{
        filename: '[name].js', //name 자리에 자동으로 app이 들어감 app.js썼어도 ok
        path: path.join(__dirname, 'dist'),
    },
}