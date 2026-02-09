import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import { ExploreSheet } from "./ExploreSheet";

 export interface ExploreSheetPayload {
  count: number;
  increment: () => void;
  decrement: () => void;
}

registerSheet("explore-sheet", ExploreSheet);

export const Sheets = () => null;

declare module "react-native-actions-sheet" {
  interface Sheets {
    "explore-sheet": SheetDefinition<{
      payload: ExploreSheetPayload;
    }>;
  }
}
