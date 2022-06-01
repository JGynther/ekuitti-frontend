type InputProps = {
  id: string;
  type: string;
  form: {
    state: Record<string, unknown>;
    setForm: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
  };
};

export type { InputProps };
