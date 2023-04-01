import type { FC } from 'react'

import { Box } from './Box'
import { Dustbin } from './Dustbin'

export const Container: FC = () => (
  <div>
    <div style={{ overflow: 'hidden', clear: 'both' }}>
      <Dustbin allowedDropEffect="any" />
      <Dustbin allowedDropEffect="copy" />
      <Dustbin allowedDropEffect="move" />
      <Dustbin allowedDropEffect="any2" />
      <Dustbin allowedDropEffect="copy2" />
      <Dustbin allowedDropEffect="move2" />
    </div>
    <div style={{ overflow: 'hidden', clear: 'both' }}>
      <Box name="Glass" />
      <Box name="Banana" />
      <Box name="PapeSSr" />
    </div>
  </div>
)
