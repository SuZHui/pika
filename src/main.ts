import { PikaConfig, Pika } from './core/Pika'

const create = (config?: PikaConfig) => {
  return new Pika(config)
}

export {
  create
}
