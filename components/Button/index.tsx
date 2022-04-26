import type { Props } from "@typings/Button"

import OnClickButton from "./OnClickButton"
import RoundButton from "./RoundButton"

const Button: React.FC<Props> = ({ type, onClick, children }) => {
    if (type === "round") {
        return <RoundButton>{children}</RoundButton>
    }
    return (
        <OnClickButton onClick={onClick}>{children}</OnClickButton>
    )
}

export default Button 