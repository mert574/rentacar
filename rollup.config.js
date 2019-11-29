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
        'src/admin/login.js',
        'src/admin/dashboard.js',
        'src/admin/cars.js',
        'src/admin/reservations.js',
    ],
    output: [
        {
            dir: 'public/js',
            format: 'esm',
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
        babel({
            exclude: 'node_modules/**',
            extensions: ['js'],
        }),
        terser(),
        copy({
            targets: [
                { src: ['src/*.html'], dest: 'public' },
                { src: ['src/assets'], dest: 'public' },
                { src: ['src/checkout/*.html'], dest: 'public/checkout' },
                { src: ['src/confirm/*.html'], dest: 'public/confirm' },
                { src: ['src/offers/*.html'], dest: 'public/offers' },
                { src: ['src/admin/*.html'], dest: 'public/admin' },
            ],
            copyOnce: false,
            verbose: true,
        }),
        dev({
            dirs: ['public', 'src'],
            silent: true,
        }),
    ],
};
