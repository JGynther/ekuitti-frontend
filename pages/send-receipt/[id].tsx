import type { NextPage } from "next";
import Head from "next/head";
import Header from "@components/Header";
import Navigation from "@components/Navigation";
import { useReceipts } from "@utils/hooks";
import { useRouter } from "next/router";
import numberToDecimalString from "@utils/numberFormat";
import { useState } from "react";
import { usePost } from "@utils/hooks";

const SendPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>eKuitti</title>
      </Head>
      <Header />
      <Navigation />
      <ReceiptView id={id} />
      <Send id={id} />
    </>
  );
};

const Send: React.FC<any> = ({ id }) => {
  const [address, setAddress] = useState("did:");
  const { response, isError, setRequest } = usePost();
  return (
    <div className="mt-10 bg-grey p-8 rounded  border">
      {isError && (
        <div className="text-center text-orange font-bold pb-5">
          Virhe! Tarkista eOsoite.
        </div>
      )}
      {!isError && response && (
        <div className="text-center text-blue font-bold pb-5">
          Kuitti lähetetty onnistuneesti!
        </div>
      )}
      <div className="flex justify-between">
        <div className="flex items-center w-3/4">
          <label className="font-bold">Vastaanottajan eOsoite</label>
          <input
            className="flex-grow mx-10 py-1 px-4 rounded border border-dashed transition"
            value={address}
            onChange={(e) => setAddress(e.target.value.toLocaleLowerCase())}
          />
        </div>
        <button
          className="bg-blue rounded flex-grow py-2 text-white hover:bg-opacity-90 transition"
          onClick={() => {
            setRequest({
              url: "http://localhost:8080/api/receipts/forwarded",
              body: { eAddressId: address, receiptId: id },
            });
          }}
        >
          Lähetä kuitti
        </button>
      </div>
    </div>
  );
};

const ReceiptView: React.FC<any> = ({ id }) => {
  const { data } = useReceipts(id as string);
  if (!data) return <>Loading...</>;
  return (
    <div className="mt-10 space-y-5">
      <div>
        {new Date(data.receiptTimeStamp).toLocaleDateString("fi-FI")}
        <div className="font-bold text-subtitle">{data.merchant.name}</div>
      </div>
      <div className="divide-y divide-dashed border-y border-dashed">
        {data.products.map((product) => (
          <Product
            key={product.productId}
            product={product}
            currency={data.currencyISOCode}
          />
        ))}
      </div>
      <div className="flex font-bold ml-auto w-3/5">
        <div className="text-right w-1/3">Yhteensä</div>
        <div className="text-right w-1/3">
          {numberToDecimalString(data.totalVATAmount)}
        </div>
        <div className="text-right w-1/3">
          {numberToDecimalString(data.totalPriceIncVAT)} {data.currencyISOCode}
        </div>
      </div>
    </div>
  );
};

const Product: React.FC<any> = ({ product, currency }) => {
  return (
    <div key={product.productId} className="flex items-center font-mono py-3">
      <div className="w-1/5">{product.name}</div>
      <div className="w-1/5 text-right">
        {product.quantity} {product.quantityCode}
      </div>
      <div className="w-1/5 text-right">VAT {product.vats[0].VATRate} % </div>
      <div className="w-1/5 text-right">
        {numberToDecimalString(
          product.totalAmountIncVAT - product.totalAmountExcVAT
        )}
      </div>
      <div className="w-1/5 text-right">
        {numberToDecimalString(product.totalAmountIncVAT)} {currency}
      </div>
    </div>
  );
};

// Export at the end of the file.
export default SendPage;
