declare module "vanta/dist/vanta.net.min" {
  type VantaOptions = {
    el: HTMLElement;
    THREE: typeof import("three");
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
  };

  type VantaEffect = {
    destroy: () => void;
  };

  const createNet: (options: VantaOptions) => VantaEffect;
  export default createNet;
}
