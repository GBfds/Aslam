import {createTheme} from '@shopify/restyle';
import { colors } from './colors';
import { spacing } from './spacing';
import { textVariants } from './textVariants';
import { buttonVariants } from './buttonVariants';
import { inputVariants } from './inputVariants';

const theme = createTheme({
    colors,
    spacing,
    textVariants,
    buttonVariants,
    inputVariants
})

export type ThemeProps = typeof theme
export default theme