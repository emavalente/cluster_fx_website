type PromotionProps = {
  flagText: string;
  flagColor?: string;
  text: string;
};

export function Promotion({
  flagText,
  flagColor = "bg-gray-400",
  text,
}: PromotionProps) {
  return (
    <div className="w-screen p-2 flex justify-center items-center bg-black text-white text-[11px] border-b border-b-gray-900">
      <span className={`mx-2 p-1 ${flagColor} font-bold`}>{flagText}</span>
      {text}
    </div>
  );
}
