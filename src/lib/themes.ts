import * as THREE from 'three';

export interface ThemeColors {
  name: string;
  id: string;
  uBaseColor1: THREE.Color;
  uBaseColor2: THREE.Color;
  uCoolCore: THREE.Color;
  uCoolEdge: THREE.Color;
  uWarmCore: THREE.Color;
  uWarmEdge: THREE.Color;
  uRippleColor: THREE.Color;
  uPeakColor: THREE.Color;
  uGlowIntensity: number;
}

export const themeIds = [
  'nocturnal','ocean-deep','arctic-aurora','cyber-forest','golden-hour','ember-fire','crimson-sunset','coral-mirage','neon-tokyo','minimal-monochrome','teal-depth','lavender-dream','cherry-blossom','copper-forge','mint-fresh',
] as const;

export type ThemeId = typeof themeIds[number];

export function lerpThemes(theme1: ThemeColors, theme2: ThemeColors, t: number): ThemeColors {
  const clampedT = Math.max(0, Math.min(1, t));
  return {
    name: clampedT < 0.5 ? theme1.name : theme2.name,
    id: clampedT < 0.5 ? theme1.id : theme2.id,
    uBaseColor1: new THREE.Color().lerpColors(theme1.uBaseColor1, theme2.uBaseColor1, clampedT),
    uBaseColor2: new THREE.Color().lerpColors(theme1.uBaseColor2, theme2.uBaseColor2, clampedT),
    uCoolCore: new THREE.Color().lerpColors(theme1.uCoolCore, theme2.uCoolCore, clampedT),
    uCoolEdge: new THREE.Color().lerpColors(theme1.uCoolEdge, theme2.uCoolEdge, clampedT),
    uWarmCore: new THREE.Color().lerpColors(theme1.uWarmCore, theme2.uWarmCore, clampedT),
    uWarmEdge: new THREE.Color().lerpColors(theme1.uWarmEdge, theme2.uWarmEdge, clampedT),
    uRippleColor: new THREE.Color().lerpColors(theme1.uRippleColor, theme2.uRippleColor, clampedT),
    uPeakColor: new THREE.Color().lerpColors(theme1.uPeakColor, theme2.uPeakColor, clampedT),
    uGlowIntensity: THREE.MathUtils.lerp(theme1.uGlowIntensity, theme2.uGlowIntensity, clampedT),
  };
}

export const themes: Record<string, ThemeColors> = {
  'nocturnal': { name:'霁紫', id:'nocturnal', uBaseColor1:new THREE.Color(0.005,0.008,0.025), uBaseColor2:new THREE.Color(0.015,0.025,0.07), uCoolCore:new THREE.Color(0.35,0.1,0.9), uCoolEdge:new THREE.Color(0.15,0.0,0.45), uWarmCore:new THREE.Color(0.65,0.25,1.0), uWarmEdge:new THREE.Color(0.5,0.1,0.8), uRippleColor:new THREE.Color(0.5,0.2,1.0), uPeakColor:new THREE.Color(1.0,0.55,0.05), uGlowIntensity:1.0 },
  'ocean-deep': { name:'沧蓝', id:'ocean-deep', uBaseColor1:new THREE.Color(0.002,0.008,0.028), uBaseColor2:new THREE.Color(0.005,0.018,0.06), uCoolCore:new THREE.Color(0.0,0.25,1.0), uCoolEdge:new THREE.Color(0.0,0.08,0.35), uWarmCore:new THREE.Color(0.15,0.55,1.0), uWarmEdge:new THREE.Color(0.05,0.35,0.85), uRippleColor:new THREE.Color(0.1,0.5,1.0), uPeakColor:new THREE.Color(1.0,0.75,0.1), uGlowIntensity:1.1 },
  'arctic-aurora': { name:'冰蓝', id:'arctic-aurora', uBaseColor1:new THREE.Color(0.003,0.015,0.022), uBaseColor2:new THREE.Color(0.01,0.03,0.055), uCoolCore:new THREE.Color(0.0,0.75,0.85), uCoolEdge:new THREE.Color(0.0,0.3,0.5), uWarmCore:new THREE.Color(0.2,1.0,0.85), uWarmEdge:new THREE.Color(0.05,0.6,0.6), uRippleColor:new THREE.Color(0.1,0.9,0.9), uPeakColor:new THREE.Color(1.0,0.25,0.35), uGlowIntensity:1.25 },
  'cyber-forest': { name:'碧翠', id:'cyber-forest', uBaseColor1:new THREE.Color(0.003,0.018,0.005), uBaseColor2:new THREE.Color(0.01,0.045,0.018), uCoolCore:new THREE.Color(0.0,0.85,0.35), uCoolEdge:new THREE.Color(0.0,0.35,0.15), uWarmCore:new THREE.Color(0.4,1.0,0.3), uWarmEdge:new THREE.Color(0.15,0.65,0.2), uRippleColor:new THREE.Color(0.3,1.0,0.4), uPeakColor:new THREE.Color(1.0,0.2,0.5), uGlowIntensity:1.3 },
  'golden-hour': { name:'流金', id:'golden-hour', uBaseColor1:new THREE.Color(0.018,0.015,0.005), uBaseColor2:new THREE.Color(0.045,0.035,0.012), uCoolCore:new THREE.Color(0.85,0.6,0.05), uCoolEdge:new THREE.Color(0.5,0.3,0.02), uWarmCore:new THREE.Color(1.0,0.92,0.35), uWarmEdge:new THREE.Color(0.85,0.7,0.15), uRippleColor:new THREE.Color(1.0,0.85,0.25), uPeakColor:new THREE.Color(0.2,0.5,1.0), uGlowIntensity:1.2 },
  'ember-fire': { name:'余烬', id:'ember-fire', uBaseColor1:new THREE.Color(0.022,0.008,0.002), uBaseColor2:new THREE.Color(0.05,0.018,0.005), uCoolCore:new THREE.Color(1.0,0.45,0.0), uCoolEdge:new THREE.Color(0.6,0.15,0.0), uWarmCore:new THREE.Color(1.0,0.78,0.15), uWarmEdge:new THREE.Color(0.9,0.55,0.05), uRippleColor:new THREE.Color(1.0,0.65,0.1), uPeakColor:new THREE.Color(0.1,0.4,1.0), uGlowIntensity:1.5 },
  'crimson-sunset': { name:'赤焰', id:'crimson-sunset', uBaseColor1:new THREE.Color(0.025,0.003,0.005), uBaseColor2:new THREE.Color(0.055,0.01,0.015), uCoolCore:new THREE.Color(1.0,0.05,0.08), uCoolEdge:new THREE.Color(0.65,0.0,0.06), uWarmCore:new THREE.Color(1.0,0.35,0.2), uWarmEdge:new THREE.Color(0.85,0.12,0.1), uRippleColor:new THREE.Color(1.0,0.15,0.1), uPeakColor:new THREE.Color(0.1,0.9,0.7), uGlowIntensity:1.4 },
  'coral-mirage': { name:'霞粉', id:'coral-mirage', uBaseColor1:new THREE.Color(0.02,0.006,0.01), uBaseColor2:new THREE.Color(0.045,0.015,0.022), uCoolCore:new THREE.Color(1.0,0.25,0.3), uCoolEdge:new THREE.Color(0.7,0.08,0.18), uWarmCore:new THREE.Color(1.0,0.55,0.55), uWarmEdge:new THREE.Color(0.9,0.3,0.35), uRippleColor:new THREE.Color(1.0,0.4,0.4), uPeakColor:new THREE.Color(0.1,0.7,1.0), uGlowIntensity:1.3 },
  'neon-tokyo': { name:'幻紫', id:'neon-tokyo', uBaseColor1:new THREE.Color(0.01,0.002,0.025), uBaseColor2:new THREE.Color(0.03,0.008,0.065), uCoolCore:new THREE.Color(1.0,0.05,0.6), uCoolEdge:new THREE.Color(0.55,0.02,0.85), uWarmCore:new THREE.Color(1.0,0.25,0.85), uWarmEdge:new THREE.Color(0.8,0.1,0.7), uRippleColor:new THREE.Color(1.0,0.2,0.75), uPeakColor:new THREE.Color(0.95,1.0,0.15), uGlowIntensity:1.6 },
  'minimal-monochrome': { name:'水墨', id:'minimal-monochrome', uBaseColor1:new THREE.Color(0.012,0.012,0.012), uBaseColor2:new THREE.Color(0.045,0.045,0.045), uCoolCore:new THREE.Color(0.8,0.8,0.8), uCoolEdge:new THREE.Color(0.3,0.3,0.3), uWarmCore:new THREE.Color(1,1,1), uWarmEdge:new THREE.Color(0.6,0.6,0.6), uRippleColor:new THREE.Color(1,1,1), uPeakColor:new THREE.Color(1,1,1), uGlowIntensity:0.7 },
  'teal-depth': { name:'幽青', id:'teal-depth', uBaseColor1:new THREE.Color(0.002,0.018,0.02), uBaseColor2:new THREE.Color(0.008,0.04,0.045), uCoolCore:new THREE.Color(0,0.55,0.55), uCoolEdge:new THREE.Color(0,0.25,0.28), uWarmCore:new THREE.Color(0.2,0.85,0.75), uWarmEdge:new THREE.Color(0.08,0.55,0.5), uRippleColor:new THREE.Color(0.15,0.8,0.7), uPeakColor:new THREE.Color(1,0.45,0.15), uGlowIntensity:1.2 },
  'lavender-dream': { name:'薰衣草', id:'lavender-dream', uBaseColor1:new THREE.Color(0.012,0.008,0.022), uBaseColor2:new THREE.Color(0.03,0.02,0.055), uCoolCore:new THREE.Color(0.55,0.35,0.85), uCoolEdge:new THREE.Color(0.3,0.15,0.55), uWarmCore:new THREE.Color(0.75,0.55,1), uWarmEdge:new THREE.Color(0.5,0.3,0.75), uRippleColor:new THREE.Color(0.65,0.45,1), uPeakColor:new THREE.Color(1,0.8,0.25), uGlowIntensity:1.1 },
  'cherry-blossom': { name:'樱', id:'cherry-blossom', uBaseColor1:new THREE.Color(0.018,0.005,0.012), uBaseColor2:new THREE.Color(0.04,0.012,0.025), uCoolCore:new THREE.Color(1,0.55,0.65), uCoolEdge:new THREE.Color(0.7,0.2,0.35), uWarmCore:new THREE.Color(1,0.72,0.78), uWarmEdge:new THREE.Color(0.85,0.45,0.55), uRippleColor:new THREE.Color(1,0.6,0.7), uPeakColor:new THREE.Color(0.25,0.9,0.55), uGlowIntensity:1.15 },
  'copper-forge': { name:'锻铜', id:'copper-forge', uBaseColor1:new THREE.Color(0.02,0.01,0.005), uBaseColor2:new THREE.Color(0.045,0.025,0.012), uCoolCore:new THREE.Color(0.85,0.45,0.2), uCoolEdge:new THREE.Color(0.5,0.22,0.08), uWarmCore:new THREE.Color(1,0.65,0.3), uWarmEdge:new THREE.Color(0.75,0.38,0.15), uRippleColor:new THREE.Color(0.9,0.55,0.25), uPeakColor:new THREE.Color(0.3,0.65,0.35), uGlowIntensity:1.3 },
  'mint-fresh': { name:'薄荷', id:'mint-fresh', uBaseColor1:new THREE.Color(0.003,0.02,0.015), uBaseColor2:new THREE.Color(0.01,0.045,0.035), uCoolCore:new THREE.Color(0.3,0.9,0.65), uCoolEdge:new THREE.Color(0.1,0.45,0.3), uWarmCore:new THREE.Color(0.5,1,0.8), uWarmEdge:new THREE.Color(0.25,0.7,0.5), uRippleColor:new THREE.Color(0.4,1,0.7), uPeakColor:new THREE.Color(1,0.3,0.55), uGlowIntensity:1.2 },
};
