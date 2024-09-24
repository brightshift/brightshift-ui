interface Props extends React.ComponentPropsWithoutRef<"button"> {}

const HamMenu = ({ ...props }: Props) => {
  return (
    <button className="group space-y-1 md:hidden" {...props}>
      <div className="h-0.5 w-6 bg-white"></div>
      <div className="h-0.5 w-6 bg-white"></div>
      <div className="h-0.5 w-6 bg-white"></div>
    </button>
  )
}

export default HamMenu
