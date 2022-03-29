interface MaybeProps {
  test: boolean;
  children: React.ReactNode;
}

const Maybe = ({ test, children }: MaybeProps) => {
  return test ? <>{children}</> : <></>;
};

export default Maybe;
