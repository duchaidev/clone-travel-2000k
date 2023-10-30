interface Props {
  icon?: React.ReactNode;
  label: String;
}

function DropDownItem({ icon, label }: Props) {
  return (
    <div className="flex items-center gap-5 min-w-[180px] py-2 text-base border-b-[1px] border-gray-200 hover:text-primary">
      {icon && <span className="text-xl m-0 flex">{icon}</span>}
      <span className="font-medium">{label}</span>
    </div>
  );
}

export default DropDownItem;
