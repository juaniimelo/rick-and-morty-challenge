import { Dot } from "lucide-react";

interface CharacterBadgeProps {
  status: string;
  species: string;
}

export const CharacterBadge = ({ status, species }: CharacterBadgeProps) => {
  return (
    <div className="w-full flex items-center">
      <span className="text-app-text-gray-light text-sm font-medium">
        {status}
      </span>
      <Dot className="w-6 h-6 text-app-text-gray-light" />
      <span className="text-app-text-gray-light text-sm font-medium">
        {species}
      </span>
    </div>
  );
};
