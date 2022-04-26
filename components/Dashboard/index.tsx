import ReceiptBoard from "./ReceiptBoard"

const Dashboard: React.FC = () => {
    return (
        <section className="px-4">
            <div className='my-5'>
                <h2 className='text-2xl font-semibold'>Terve [henkilö]!</h2>
            </div>
            <div className="flex gap-10">
                <ReceiptBoard>
                    <ReceiptBoard.Header></ReceiptBoard.Header>
                    <ReceiptBoard.Row>Testi</ReceiptBoard.Row>
                    <ReceiptBoard.Row>Testi</ReceiptBoard.Row>
                </ReceiptBoard>
                <ReceiptBoard />
            </div>
        </section>
    )
}

export default Dashboard