import { default as Header } from "next/head";

interface Props {
  children?: React.ReactNode;
}
const Head = ({ children }: Props) => {
  return (
    <Header>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {children}
      <title>Up Vote</title>
    </Header>
  );
};

export default Head;
