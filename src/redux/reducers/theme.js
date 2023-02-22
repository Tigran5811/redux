export const LIGHT = "LIGHT"
export const DARK = "DARK"

export const Theme = {
    Light: 'light',
    Dark: 'dark',
}

const reducer = (state = Theme.Light, { type }) => {
    switch (type) {
        case LIGHT:
            return Theme.Light;
        case DARK:
            return Theme.Dark;
        default:
            return Theme.Light
    }
}

export default reducer