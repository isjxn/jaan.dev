export default function IconLink({href, children}: {href: string, children: React.ReactNode | React.ReactNode[]}) {
  return (
    <a href={href} className= "item-center middle none center flex justify-center rounded-lg bg-primary p-3 font-sans text-xs font-bold uppercase text-white">
      {children}
    </a>
  );
}