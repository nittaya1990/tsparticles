import type { IConnect } from "../../../Interfaces/Interactivity/Modes/IConnect";
import { ConnectLinks } from "./ConnectLinks";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";

/**
 * @category Options
 */
export class Connect implements IConnect, IOptionLoader<IConnect> {
    distance;
    links;
    radius;

    constructor() {
        this.distance = 80;
        this.links = new ConnectLinks();
        this.radius = 60;
    }

    load(data?: RecursivePartial<IConnect>): void {
        if (data === undefined) {
            return;
        }

        if (data.distance !== undefined) {
            this.distance = data.distance;
        }

        this.links.load(data.links);

        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}
