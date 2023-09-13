import { ReactNode, useState } from "react";

interface Props {
  maxChars?: number;
  children: ReactNode;
}

const ExpandableText = ({ maxChars = 50, children }: Props) => {
  const [isExpanded, setExpandText] = useState<boolean>(false);
  return (
    <>
      <p>
        {!isExpanded
          ? `${children?.toString().substring(0, maxChars)}...`
          : children}
      </p>
      <button onClick={() => setExpandText(true)}>More</button>
    </>
  );
};

export default ExpandableText;
