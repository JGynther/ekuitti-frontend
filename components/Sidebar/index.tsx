const Sidebar: React.FC = ({ children }) => {
  return (
    <div>
      <div className="sticky top-0 z-10 w-64">
        <div className="flex flex-col h-screen bg-neutral-800 p-4">
          <div className="mb-5">eKuittilomapakko</div>
          <div className="divide-y divide-neutral-700">
            <div className="hover:bg-neutral-700 transition px-1 py-1 my-1 rounded">
              Valikko 1
            </div>
            <div className="hover:bg-neutral-700 transition px-1 py-1 my-1 rounded">
              Valikko 2
            </div>
            <div className="hover:bg-neutral-700 transition px-1 py-1 my-1 rounded">
              Valikko 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
