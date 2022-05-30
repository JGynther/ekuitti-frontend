import ReceiptsTable from "@components/ReceiptsTable";
import Link from "next/link";

const Dashboard: React.FC = () => {
  return (
    <section className="px-4">
      <div className="my-5">
        <h2 className="text-2xl font-semibold">Kaikki kuitit</h2>
      </div>
      <div className="flex gap-10">
        <div className="flex-grow bg-neutral-800 px-4 py-5 rounded">
          <ReceiptsTable />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
