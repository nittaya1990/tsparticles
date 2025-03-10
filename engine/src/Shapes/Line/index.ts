import type { Main } from "../../main";
import { LineDrawer } from "./LineDrawer";

export function loadLineShape(tsParticles: Main): void {
    tsParticles.addShape("line", new LineDrawer());
}
