export function Footer() {
  return (
    <footer className="section pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-semibold text-white">Orange POS AI</span>{" "}
          • Modern POS for retail and hospitality
        </div>
        <div className="flex gap-4 text-xs">
          <a href="mailto:info@orangepos.ch" className="hover:text-white">
            info@orangepos.ch
          </a>
          <span className="text-slate-600">|</span>
          <span>Developed by SMART PVT LTD</span>
        </div>
      </div>
    </footer>
  );
}

