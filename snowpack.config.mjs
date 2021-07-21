export default {
    plugins: ['@snowpack/plugin-typescript'],
    packageOptions: {
        external: ['fsevents'],
        polyfillNode: true,
        source: 'remote'
    },
}