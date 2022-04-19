const Wrapper: React.FC = ({ children }) => {
    return (
        <div className="min-h-screen bg-black text-white">
            {children}
        </div>
    )
}

export default Wrapper;