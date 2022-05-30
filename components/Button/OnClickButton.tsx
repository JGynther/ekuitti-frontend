import { OnClickProps } from "@typings/Button";

const OnClickButton: React.FC<OnClickProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue hover:bg-opacity-80 text-white transition px-8 py-1 rounded"
    >
      {children}
    </button>
  );
};

export default OnClickButton;
