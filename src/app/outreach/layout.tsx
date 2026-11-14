export default function OutreachLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white antialiased [color-scheme:dark]">
      {children}
    </div>
  );
}
