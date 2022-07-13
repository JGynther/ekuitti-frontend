const Results: React.FC = ({ children }) => {
  if (!children) return null;
  return (
    <div className="bg-grey mb-2 rounded max-h-[calc(100vh-320px)] overflow-y-auto">
      {children}
    </div>
  );
};

export default Results;
