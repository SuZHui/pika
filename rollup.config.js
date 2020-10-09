import * as path from 'path'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'
// import babel from '@rollup/plugin-babel'

const builds = {
  'cjs-dev': {
    outFile: 'xylitol.common.js',
    format: 'cjs',
    mode: 'development',
  },
  'cjs-prod': {
    outFile: 'xylitol.common.prod.js',
    format: 'cjs',
    mode: 'production',
  },
  'umd-dev': {
    outFile: 'xylitol.js',
    format: 'umd',
    mode: 'development',
  },
  'umd-prod': {
    outFile: 'xylitol.prod.js',
    format: 'umd',
    mode: 'production',
  },
  esm: {
    outFile: 'xylitol.esm.js',
    format: 'es',
    mode: 'production',
  }
}

const getAllBuilds = () => Object.keys(builds).map(key => getConfig(builds[key]))

const getConfig = ({ outFile, format, mode }) => {
  const isProd = mode === 'production'
  return {
    input: './src/main.ts',
    output: {
      file: path.join('dist', outFile),
      format,
      exports: 'auto',
      name: ['umd'].includes(format) ? 'Xylitol' : undefined,
      globals: {
        'rxjs': 'Rx',
        'rxjs/operators': 'Rx'
      },
      sourcemap: !isProd
    },
    external: ['rxjs', 'rxjs/operators'],
    plugins: [
      typescript({
        tsconfigOverride: {
          declaration: false,
          declarationDir: null,
          emitDeclarationOnly: false,
        },
        useTsconfigDeclarationDir: true,
        clean: true
      }),
      resolve({
        mainFields: ["jsnext", "preferBuiltins"],
        extensions: ['.ts', '.js'],
        resolveOnly: ['rxjs', 'rxjs/operators', 'rxjs/Observable'],
        modulesOnly: true
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      // babel({
      //   include: ['src/**'],
      //   babelHelpers: 'bundled',
      //   extensions: ['.ts']
      // }),
      isProd && terser()
    ].filter(Boolean)
  }
}

export default [...getAllBuilds(), {
  input: 'typings/main.d.ts',
  output: {
    file: 'dist/index.d.ts',
    format: 'es',
  },
  // onwarn,
  plugins: [dts()]
}]
