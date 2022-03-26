import {cwd} from 'process'
import path from 'path'

const POSIX = path.posix

const resolve = (resource: string): string => {
  return POSIX.resolve(cwd(), resource)
}

export {resolve}
