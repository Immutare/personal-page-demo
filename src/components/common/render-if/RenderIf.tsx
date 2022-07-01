interface RenderIfProps {
  children: JSX.Element;
  isTrue: boolean;
}

export const RenderIf = ({children, isTrue}: RenderIfProps) => {
  return isTrue ? children : null
}
