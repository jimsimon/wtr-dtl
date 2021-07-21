import vite from 'vite-web-test-runner-plugin'

export default {
    files: 'src/*.test.ts',
    nodeResolve: true,
    plugins: [
        vite()
    ],
    watch: true,
    manual: false,
    open: false
}