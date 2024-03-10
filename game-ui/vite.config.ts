import path from 'path'
import types from 'vite-plugin-dts'
import { defineConfig, Plugin } from 'vite'

const baseDir = path.resolve(__dirname)
const codeDir = path.resolve(baseDir, 'src')
const entryFile = path.join(codeDir, 'index.ts')

export default defineConfig({
    plugins: <Plugin[]>[
        types({ rollupTypes: true }),
    ],
    resolve: {
        alias: {
            '@': codeDir,
        },
    },
    build: {
        sourcemap: true,
        emptyOutDir: true,
        lib: {
            entry: entryFile,
            formats: ['es'],
        },
        rollupOptions: {
            external: ['pixi.js'],
            output: {
                entryFileNames: '[name].js',
                assetFileNames: '[name][extname]',
            },
        },
    }
})
