
const Logo = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 800 800"
      className="text-[#1a46e5]"
    >
      {/* Left Wing */}
      <path
        fill="#1a46e5"
        d="M225 300L100 425v-50L225 250v50zM225 380L100 505v-50L225 330v50zM225 460L100 585v-50L225 410v50zM225 540L100 665v-50L225 490v50z"
      />
      {/* Right Wing */}
      <path
        fill="#1a46e5"
        d="M575 300L700 425v-50L575 250v50zM575 380L700 505v-50L575 330v50zM575 460L700 585v-50L575 410v50zM575 540L700 665v-50L575 490v50z"
      />
      {/* Top Red Accent */}
      <path
        fill="#ea384c"
        d="M225 220L100 345v-50L225 170v50zM575 220L700 345v-50L575 170v50z"
      />
      {/* Center Connection */}
      <path
        fill="#1a46e5"
        d="M400 600L350 550h100z"
      />
    </svg>
  );
};

export default Logo;
