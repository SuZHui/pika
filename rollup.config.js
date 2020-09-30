import * as path from 'path'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'

const builds = {
  'cjs-dev': {
    outFile: 'pika.common.js',
    format: 'cjs',
    mode: 'development',
  },
  'cjs-prod': {
    outFile: 'pika.common.prod.js',
    format: 'cjs',
    mode: 'production',
  },
  'umd-dev': {
    outFile: 'pika.js',
    format: 'umd',
    mode: 'development',
  },
  'umd-prod': {
    outFile: 'pika.prod.js',
    format: 'umd',
    mode: 'production',
  },
  esm: {
    outFile: 'pika.esm.js',
    format: 'es',
    mode: 'development',
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
      name: ['umd'].includes(format) ? 'Pika' : undefined,
      sourcemap: true
    },
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
      resolve({ mainFields: ["jsnext", "preferBuiltins", "browser"] }),
      commonjs(),
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
