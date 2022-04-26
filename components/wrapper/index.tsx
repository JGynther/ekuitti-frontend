const Wrapper: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-neutral-900 text-white">
            {children}
        </div>
    )
}

export default Wrapper