export default function LightingPanel() {
  return(
    <div
      aria-hidden="true"
      className="
        absolute top-0 left-1/2 -translate-x-1/2 -z-10
        w-screen h-[50svh] overflow-hidden pointer-events-none
        bg-yellow-800
      "
    >
      {/* Light spill washing over the wall */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(253,186,116,0.55)_0%,rgba(217,119,6,0.2)_45%,transparent_75%)]" />
      {/* Wall vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(28,15,5,0.45)_100%)]" />

      {/* Outer bloom */}
      <div className="absolute inset-x-[3%] inset-y-[4%] rounded-[2.5rem] bg-orange-300/50 blur-[60px]" />
      {/* Near bloom hugging the panel edge */}
      <div className="absolute inset-x-[6%] inset-y-[9%] rounded-[2rem] bg-amber-100/70 blur-[20px]" />

      {/* Panel (diffuser) */}
      <div
        className="
          absolute inset-x-[7%] inset-y-[11%] rounded-[1.25rem] overflow-hidden
          bg-gradient-to-b from-[#FFF8E7] via-[#FFEFD2] to-[#FFE2B0]
          ring-1 ring-white/70
          shadow-[0_0_30px_rgba(255,220,160,0.85),0_0_110px_rgba(251,146,60,0.45),inset_0_0_40px_rgba(245,158,11,0.25)]
        "
      >
        {/* Bright hotspot in the middle of the diffuser */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0)_70%)]" />
        {/* Subtle top sheen, like a frosted acrylic face */}
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/50 to-transparent" />
        {/* Thin inner frame line */}
        <div className="absolute inset-[6px] rounded-[1rem] border border-white/40" />
      </div>
    </div>
  )
}