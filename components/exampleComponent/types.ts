// An example type file for each component. Should always be named "types.ts"
// Should not containg a default export as a component will likely have more than one typing

// Prefer type syntax over interface as it is often more concise
type Props = {
    example: string,
}

// Export components at the bottom, ie. not before function definition
export type { Props, };