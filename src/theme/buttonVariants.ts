import { spacing } from "./spacing"

export const buttonVariants ={
    defaults:{
        width: spacing.screen * 0.8,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
    },
    medium:{
        width: spacing.screen * 0.5,
    },
    small:{
        width: spacing.screen * 0.25,
        height: 56,
    },
    smallWithIcon:{
        width: spacing.screen * 0.28,
        height: 95,
        flexDirection: "column"
    }
}