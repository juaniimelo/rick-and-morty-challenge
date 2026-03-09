import { useMainContext } from "../context/MainContext";

export const useHomeLayout = () => {
  const { selectedCharacter1, selectedCharacter2 } = useMainContext();
  const canCompare = Boolean(selectedCharacter1 && selectedCharacter2);

  return { canCompare };
};
