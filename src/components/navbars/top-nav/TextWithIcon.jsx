export const TextWithIcon = ({ text, icon }) => {
  return (
    <div className="flex items-center gap-x-2 text-sm cursor-pointer">
      <i className="text-lg text-primary">{icon}</i>
      <p>{text}</p>
    </div>
  );
};
