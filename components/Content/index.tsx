import { Props } from "@typings/Content";

const Content: React.FC<Props> = ({
  children,
  sidebar,
  navigation,
  footer,
}) => {
  return (
    <div className="flex">
      {sidebar}
      <div className="w-full">
        {navigation}
        <main>{children}</main>
        {footer}
      </div>
    </div>
  );
};

export default Content;
