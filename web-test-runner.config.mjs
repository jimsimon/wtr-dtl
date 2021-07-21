import snowpack from '@snowpack/web-test-runner-plugin'

process.env.NODE_ENV = 'test';

export default {
    files: './*.test.ts',
    nodeResolve: true,
    plugins: [
        snowpack()
    ],
    watch: true,
    manual: false,
    open: false
}