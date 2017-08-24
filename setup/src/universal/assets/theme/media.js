import { css } from 'styled-components'

const sizes = {
  lg: 75, // 1200px
  md: 64, // 1024px
  sm: 48, // 768px
}

// iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  accumulator[label] = (...args) => label === "xs" ?
    css`
        ${css(...args)}
    `
   : 
    css`
        @media (min-width: ${sizes[label]}em) {
        ${css(...args)}
        }
    `
  return accumulator
}, {})