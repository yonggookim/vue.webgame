//main.js에는 vue instance를 만들자.

import Vue from 'vue'; //설치한 뷰를 가져온다. CDN을 가져왔던 것처럼 기능 쓸수 o
import NumberBaseball from './numberbaseball.vue';
new Vue(NumberBaseball).$mount('#root');