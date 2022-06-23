import { PostRequest } from "@typings/hooks/usePost";
import { usePost } from "@utils/hooks";
import { useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";

const AddReceipt: React.FC = () => {
  const [file, setFile] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>();
  const [status, setStatus] = useState<string>("");
  const post = usePost({
    callback: (res: any) => {
      setStatus("Kuitti lisätty!");
      setFile(null);
      setFileName("");
    },
  });

  const handleChange = (target: HTMLInputElement) => {
    setStatus("");
    if (!target.files) {
      return;
    }
    setFileName(target.files[0].name);
    const fileReader = new FileReader();
    fileReader.readAsText(target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      if (!e.target) {
        return;
      }
      console.log("e.target.result", e.target.result);
      setFile(e.target.result as string);
    };
  };

  const onSubmit = () => {
    if (!file) {
      return;
    }
    console.log(file);
    const req: PostRequest = {
      url: "http://localhost:8080/api/receipts",
      body: JSON.parse(file),
    };
    post.setRequest(req);
  };

  return (
    <div>
      <div className="px-8 pt-6 pb-4 text-subtitle font-bold">
        Valitse tiedosto
      </div>
      <div className="flex w-full justify-between px-12">
        <div className="flex">
          <label
            htmlFor="file"
            className="bg-grey rounded text-black font-bold py-2 px-4 hover:cursor-pointer"
          >
            Valitse
          </label>
          <input
            id="file"
            type="file"
            accept=".json"
            className="hidden"
            onChange={(e) => handleChange(e.target)}
          />
          <div className="mx-4 self-center">Valittu tiedosto: {fileName}</div>
          {file != null && (
            <CancelIcon
              onClick={() => setFile(null)}
              className="text-orange hover:cursor-pointer self-center"
            />
          )}
        </div>
        <button
          onClick={() => onSubmit()}
          className="bg-blue text-white font-bold px-4 py-2 rounded"
        >
          Lisää kuitti
        </button>
      </div>
      <div className="text-orange font-bold m-auto mt-[15px] ml-12">
        {status}
      </div>
    </div>
  );
};

export default AddReceipt;
