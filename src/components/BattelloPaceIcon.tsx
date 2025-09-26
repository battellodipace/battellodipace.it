import peaceRainbowImage from 'figma:asset/d479adf3497efa0a423e1ff717a5773f2e3f4746.png';

interface PeaceIconProps {
  className?: string;
}

export function PeaceIcon({ className = "w-8 h-8" }: PeaceIconProps) {
  return (
    <img 
      src={peaceRainbowImage}
      alt="Simbolo della pace arcobaleno"
      className={`${className} rounded-full object-cover`}
    />
  );
}