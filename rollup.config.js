import json from "rollup-plugin-json";
import { terser } from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs'
import dev from 'rollup-plugin-dev'
import postcss from 'rollup-plugin-postcss';
import CSSNext from 'postcss-cssnext';
import CSSNano from 'cssnano';
import atImport from 'postcss-import';
import copy from 'rollup-plugin-copy';

module.exports = {
    input: [
        'src/main.js',
        'src/offers/offers.js',
        'src/checkout/checkout.js',
    ],
    output: [
        {
            dir: 'public/js',
            format: 'es',
            sourcemap: false,
        }
    ],
    plugins: [
        json(),
        commonJS({
            include: 'node_modules/**'
        }),
        resolve(),
        postcss({
            extract: true,
            extensions: ['.css'],
            plugins: [
                CSSNext(),
                CSSNano(),
                atImport(),
            ],

        }),
        terser(),
        babel({
            exclude: 'node_modules/**',
            extensions: ['js'],
        }),
        dev({
            dirs: ['public', 'src'],
            silent: true,
        }),
        copy({
            targets: [
                { src: ['src/*.html'], dest: 'public' },
                { src: ['src/assets'], dest: 'public/assets' },
                { src: ['src/checkout/*.html'], dest: 'public/checkout' },
                { src: ['src/confirm/*.html'], dest: 'public/confirm' },
                { src: ['src/offers/*.html'], dest: 'public/offers' },
            ],
            copyOnce: true,
            verbose: true,
            expandDirectories: true,
        }),
    ],
    manualChunks(id) {
        if (id.includes('node_modules')) {
            return 'vendor';
        }
        if (id.endsWith('.css')) {
            return 'styles';
        }
    },
    onwarn(warning, warn) {
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
        if (warning.code === 'NON_EXISTENT_EXPORT') throw new Error(warning.message);
        warn(warning);
    }
};
