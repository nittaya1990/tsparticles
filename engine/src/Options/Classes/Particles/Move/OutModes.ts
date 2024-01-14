import { OutMode, type OutModeAlt } from "../../../../Enums/Modes/OutMode.js";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader.js";
import type { IOutModes } from "../../../Interfaces/Particles/Move/IOutModes.js";
import type { RecursivePartial } from "../../../../Types/RecursivePartial.js";

export class OutModes implements IOutModes, IOptionLoader<IOutModes> {
    bottom?: OutMode | keyof typeof OutMode | OutModeAlt;
    default: OutMode | keyof typeof OutMode | OutModeAlt;
    left?: OutMode | keyof typeof OutMode | OutModeAlt;
    right?: OutMode | keyof typeof OutMode | OutModeAlt;
    top?: OutMode | keyof typeof OutMode | OutModeAlt;

    constructor() {
        this.default = OutMode.out;
    }

    load(data?: RecursivePartial<IOutModes>): void {
        if (!data) {
            return;
        }

        if (data.default !== undefined) {
            this.default = data.default;
        }

        this.bottom = data.bottom ?? data.default;
        this.left = data.left ?? data.default;
        this.right = data.right ?? data.default;
        this.top = data.top ?? data.default;
    }
}
