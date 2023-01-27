interface HandleRequestStateProps {
  state: boolean;
  placeholder?: React.ReactNode;
  children: React.ReactNode;
}

export const HandleRequestState: React.FC<HandleRequestStateProps> = ({
  state,
  placeholder,
  children,
}) => {
  if (state) {
    return <>{placeholder}</>;
  }

  return <>{children}</>;
};
