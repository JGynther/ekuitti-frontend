const RoundButton: React.FC = ({ children }) => {
  return (
    <div className="h-10 w-10 rounded-full bg-neutral-700 hover:bg-neutral-600 transition">
      {children}
    </div>
  );
};

export default RoundButton;
