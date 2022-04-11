// An example component to demonstrate file structure of the project
//
// All components are located in components/[component name]/index.tsx
// In some cases components could be located in components/[purpose or page name]/[component name]/index.tsx
//
// This also makes imports very clean:
// import ExampleComponent from "@components/exampleComponent"
// or
// import ExampleComponent from "@components/page/exampleComponent"

import { Props } from "@typings/exampleComponent" // @typings/exampleComponent equals components/exampleComponent/types

// Props should be destructured to avoid "props.property" syntax (ie. props.children)
// NOTE: Children are by default defined in React functional component typing and is not required to explicitly define
const ExampleComponent: React.FC<Props> = ({ example, children }) => {
    return (
        <div id={example}>
            {children}
        </div>
    )
}

// Export components at the bottom, ie. not before function definition
export default ExampleComponent