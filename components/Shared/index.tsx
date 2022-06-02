import { useShared } from "@utils/hooks";
import SharedInfo from "../Shared/SharedInfo";

const Shared: React.FC = () => {
  const { data, isError } = useShared();
  if (isError) {
    return <div>Error!</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="px-8 pt-6 pb-4 text-subtitle font-bold">Kaikki käyttäjät jotka ovat jakeneet kuitteja</div>
      <div className="px-10 overflow-y-scroll h-[calc(100vh-290px)]">
        {data?.map((shared, index) => (
          <SharedInfo key={index} shared={shared} />
        ))}
      </div>
    </div>
  );
};

export default Shared;