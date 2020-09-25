import * as path from 'path'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'

const builds = {
  'cjs-dev': {
    outFile: 'pika.common.js',
    format: 'cjs',
    mode: 'development',
  },
  'umd-dev': {
    outFile: 'pika.js',
    format: 'umd',
    mode: 'development',
  },
  esm: {
    outFile: 'pika.esm.js',
    format: 'es',
    mode: 'development',
  },
  // iife: {
  //   outFile: 'pika.iife.js',
  //   format: 'iife',
  //   mode: 'development',
  // }
}

const getAllBuilds = () => Object.keys(builds).map(key => getConfig(builds[key]))

const getConfig = ({ outFile, format, mode }) => {
  return {
    input: './src/main.ts',
    output: {
      file: path.join('dist', outFile),
      format,
      exports: 'named',
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
    ]
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
