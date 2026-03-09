import type { DrawerSlot } from "../../hooks/useEpisodesLayout";

import { Drawer, DrawerContent, DrawerHeader, DrawerBody } from "@heroui/react";

interface EpisodesDrawerProps {
  children: React.ReactNode;
  drawerTitle: string | null;
  openDrawer: DrawerSlot | null;
  setOpenDrawer: (openDrawer: DrawerSlot | null) => void;
}

export const EpisodesDrawer = ({
  children,
  drawerTitle,
  openDrawer,
  setOpenDrawer,
}: EpisodesDrawerProps) => {
  return (
    <Drawer
      classNames={{
        base: "max-h-[85vh] rounded-t-2xl",
        body: "overflow-y-auto pb-6",
      }}
      isOpen={openDrawer !== null}
      placement="bottom"
      size="full"
      onOpenChange={(open) => !open && setOpenDrawer(null)}
    >
      <DrawerContent>
        <DrawerHeader className="border-b border-app-character-card-border-color">
          {drawerTitle}
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
