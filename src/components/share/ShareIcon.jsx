import Icons from "../icons/Icons";
export default function shareIcon({ icon }) {
  return (
    <div className="flex gap-2">
      <Icons iconName={icon.icon} />
      {icon.value}
    </div>
  );
}
