import json from "rollup-plugin-json";
import { terser } from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs'
import dev from 'rollup-plugin-dev'
import postcss from 'rollup-plugin-postcss';
import CSSNext from 'postcss-cssnext';
import CSSNano from 'cssnano';
import liveReload from 'rollup-plugin-livereload';
import atImport from 'postcss-import';

module.exports = {
    input: [
        'src/main.js',
        'src/offers/offers.js',
        'src/checkout/checkout.js',
    ],
    output: [
        {
            dir: 'public/bundle',
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
        liveReload(),
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
