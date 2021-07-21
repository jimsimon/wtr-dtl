import { esbuildPlugin } from "@web/dev-server-esbuild";
import commonjs from "@rollup/plugin-commonjs";
import { fromRollup } from '@web/dev-server-rollup';

const cjs = fromRollup(commonjs)

process.env.NODE_ENV = 'test';

export default {
    files: './*.test.ts',
    nodeResolve: true,
    plugins: [
        esbuildPlugin({ts: true}),
        cjs({
            // include: [ // I've tried various combinations of these dependencies with limited success
            //     '**/pretty-format/**/*',
            //     '**/chai/**/*',
            //     '**/chai-dom/**/*',
            //     '**/sinon-chai/**/*',
            //     '**/ansi-styles/**/*',
            //     '**/@babel/runtime/**/*',
            //     '**/lz-string/**/*'
            // ]
        })
    ],
    watch: true,
    manual: false,
    open: false
}