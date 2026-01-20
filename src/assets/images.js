// HERO
import heroImage from "./images/hero/virathero.jpg";

// =======================
// 🇮🇳 IPL TEAM LOGOS (10)
// =======================
import cskLogo from "./images/teams/csk.jpg";
import miLogo from "./images/teams/mi.jpg";
import rcbLogo from "./images/teams/rcb.jpg";
import kkrLogo from "./images/teams/kkr.jpg";
import rrLogo from "./images/teams/rr.jpg";
import dcLogo from "./images/teams/dc.jpg";
import srhLogo from "./images/teams/srh.jpg";
import lsgLogo from "./images/teams/lsg.jpg";
import gtLogo from "./images/teams/gt.jpg";
import pbksLogo from "./images/teams/pbks.jpg";

// =======================
// 🌍 INTERNATIONAL TEAMS (Top 8)
// =======================
import indLogo from "./images/teams/ind.jpg";
import ausLogo from "./images/teams/aus.jpg";
import engLogo from "./images/teams/eng.jpg";
import nzLogo from "./images/teams/nz.jpg";
import saLogo from "./images/teams/sa.jpg";
import pakLogo from "./images/teams/pak.jpg";
import wiLogo from "./images/teams/wi.jpg";
import slLogo from "./images/teams/sl.jpg";

// =======================
// DEFAULT / FALLBACK
// =======================
import defaultTeam from "./images/placeholders/default.png";

// =======================
// EXPORTS
// =======================
export const HERO_IMAGE = heroImage;

export const TEAM_LOGOS = {
  // IPL
  CSK: cskLogo,
  MI: miLogo,
  RCB: rcbLogo,
  KKR: kkrLogo,
  RR: rrLogo,
  DC: dcLogo,
  SRH: srhLogo,
  LSG: lsgLogo,
  GT: gtLogo,
  PBKS: pbksLogo,

  // International
  IND: indLogo,
  AUS: ausLogo,
  ENG: engLogo,
  NZ: nzLogo,
  SA: saLogo,
  PAK: pakLogo,
  WI: wiLogo,
  SL: slLogo,

  // Fallback
  DEFAULT: defaultTeam,
};
