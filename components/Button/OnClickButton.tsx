import { OnClickProps } from "@typings/Button";

const OnClickButton: React.FC<OnClickProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-neutral-700 hover:bg-neutral-600 transition px-8 py-1 rounded"
    >
      {children}
    </button>
  );
};

export default OnClickButton;
