interface Props {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: Props) {
  return (
    <div className="main-page-layout mx-auto mx-w-[90rem]">{children}</div>
  );
}
