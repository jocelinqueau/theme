import '@src/index.css'
import {css} from '@src/styled-system/css'

interface ButtonProps {
  label?: string;
}

export const Button = ({label = 'Click me'}:ButtonProps) => {
  return (
    <button className={css({
      cursor: 'pointer',
      _hover:{
        backgroundColor: 'accent-foreground'
      }
    })}>{label}</button>
  )
}