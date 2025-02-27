export default function ScalingText({ text, className }: { text: string, className?: string }) {
  return (
    <p className={`font-black text-3xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-7xl p-6 ${className}`}>{text}</p>
  );
}