import { omniOwl } from '~/variants/omni-owl'
import { build } from './scripts/build'
import { pressEnterToExit } from './util/press-enter-to-exit'
import { omniOwlMinimalItalics } from './variants/omni-owl-minimal_italics'

async function run() {
  await build(omniOwl)
  await build(omniOwlMinimalItalics)

  pressEnterToExit()
}

run()
