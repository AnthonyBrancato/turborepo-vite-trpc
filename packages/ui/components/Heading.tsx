import {
  Heading as CHeading,
  HeadingProps as CHeadingProps,
} from '@chakra-ui/react';

export function Heading({
  children,
  ...props
}: CHeadingProps): React.JSX.Element {
  return <CHeading {...props}>{children}</CHeading>;
}
