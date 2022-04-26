type Props = React.FC & {
  Header: React.FC,
  Row: React.FC,
}

const ReceiptTable: Props = ({ children }) => {
    return (
      <div className='flex-grow bg-neutral-800 px-4 py-5 rounded'>
        <p className='text-lg mb-3'>Uusimmat kuitit</p>
        <div className=''>
          {children}
        </div>
      </div>
    )
  }

const Title: React.FC = ({children}) => {
  return (
    <div>{children}</div>
  )
}

const Header: React.FC = () => {
  return (
    <div>

    </div>
  )
}

const Row: React.FC = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

ReceiptTable.Header = Header;
ReceiptTable.Row = Row;

export default ReceiptTable