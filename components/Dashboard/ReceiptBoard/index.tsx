import Link from 'next/link';

type Props = React.FC & {
  Header: React.FC;
  Row: React.FC;
};

const ReceiptBoard: Props = ({ children }) => {
  return (
    <div className="flex-grow bg-neutral-800 px-4 py-5 rounded">
      <div className="">{children}</div>
    </div>
  );
};

const Title: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

const Header: React.FC = ({ children }) => {
  return <div className="text-lg mb-3">{children}</div>;
};

const Row: React.FC = ({ children }) => {
  return (
    <div>
      <Link href={`/receipts`}>
        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          {children}
        </a>
      </Link>
    </div>
  )
};

ReceiptBoard.Header = Header;
ReceiptBoard.Row = Row;

export default ReceiptBoard;
