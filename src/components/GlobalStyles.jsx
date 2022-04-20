import { createGlobalStyle } from 'styled-components'
import { customCss } from '../customStyles'

export default createGlobalStyle`
--transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  body {
    ${customCss.minHeight};
    background-color: ${({ theme }) => theme.colors.bgColor};
    color: ${({ theme }) => theme.colors.textColor};
    transition: background-color  var(--transition), color  var(--transition);
  }
  `
