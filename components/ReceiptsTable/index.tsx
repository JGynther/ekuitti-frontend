import useReceipts from "@utils/useReceipts";
import Link from 'next/link';

const ReceiptsTable: React.FC = () => {
  const { receipts, isError } = useReceipts();
  if (isError) {
    return <div>Error!</div>;
  }

  if (!receipts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Yritys</th>
            <th scope="col" className="px-6 py-3">Summa</th>
            <th scope="col" className="px-6 py-3">Tapahtuma-aika</th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Lisätietoja</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {receipts.slice(0, 10).map((receipt, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">{receipt.company.name}</td>
              <td className="px-6 py-4">{receipt["total-price"]}</td>
              <td className="px-6 py-4">{JSON.parse(receipt.date).now}</td>
              <td className="px-6 py-4 text-right">
                <Link href={`/receipts/${index}`}>
                  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lisätietoja</a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReceiptsTable;