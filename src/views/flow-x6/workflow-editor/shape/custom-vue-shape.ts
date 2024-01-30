import {Graph} from '@antv/x6';
import '@antv/x6-vue-shape';
import X6VueShape from './x6-vue-shape.vue';

export function register() {
    Graph.registerVueComponent(
        'custom-vue-shape',
        {
            template: '<x6-vue-shape />',
            components: {
                X6VueShape,
            },
        },
        true,
    );
    console.log("注册Graph", Graph)
}