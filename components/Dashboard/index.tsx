import ReceiptsTable from "@components/ReceiptsTable";
import Link from 'next/link';

const Dashboard: React.FC = () => {
  return (
    <section className="px-4">
      <div className="my-5">
        <h2 className="text-2xl font-semibold">Terve [henkilö]!</h2>
      </div>
      <div className="flex gap-10">

        <div className="flex-grow bg-neutral-800 px-4 py-5 rounded">
          <div className="text-lg mb-3">Vastaanotetut kuitit</div>
          <ReceiptsTable />
          <Link href={`/receipts`}>
            <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Näytä kaikki
            </a>
          </Link>
        </div>

        <div className="flex-grow bg-neutral-800 px-4 py-5 rounded">
          <div className="text-lg mb-3">Lähetetyt kuitit</div>
          
          <Link href={`/#`}>
            <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Näytä kaikki
            </a>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Dashboard;
