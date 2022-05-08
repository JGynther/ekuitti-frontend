import ReceiptBoard from "./ReceiptBoard";
import ReceiptsTable from "@components/ReceiptsTable";

const Dashboard: React.FC = () => {
  return (
    <section className="px-4">
      <div className="my-5">
        <h2 className="text-2xl font-semibold">Terve [henkilö]!</h2>
      </div>
      <div className="flex gap-10">
        <ReceiptBoard>
          <ReceiptBoard.Header>Vastaanotetut kuitit</ReceiptBoard.Header>
          <ReceiptsTable />
          <ReceiptBoard.Row>Näytä kaikki</ReceiptBoard.Row>
        </ReceiptBoard>
        <ReceiptBoard>
          <ReceiptBoard.Header>Lähetetyt kuitit</ReceiptBoard.Header>
          
          <ReceiptBoard.Row>Näytä kaikki</ReceiptBoard.Row>
        </ReceiptBoard>
      </div>
    </section>
  );
};

export default Dashboard;
