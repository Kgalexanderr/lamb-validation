import { cn } from "@/lib/utils";

export function ButtonNotify({ theme, className }: { theme: "dark" | "light"; className?: string }) {
  return (
    <button
      className={cn(
        "border text-lg px-6 py-2 h-[55px] rounded-full cursor-pointer",
        theme === "dark"
          ? "bg-[#21200B] border-[#FFD900] text-[#FFD900]"
          : "bg-white border-black text-black",
        className
      )}
    >
      Get Notified
    </button>
  );
}
