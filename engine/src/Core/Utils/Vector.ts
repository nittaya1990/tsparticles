import type { ICoordinates, ICoordinates3d } from "../Interfaces/ICoordinates.js";
import { Vector3d } from "./Vector3d.js";

const origin: ICoordinates3d = {
    x: 0,
    y: 0,
    z: 0,
};

/**
 */
export class Vector extends Vector3d {
    /**
     * Vector constructor, creating an instance with the given coordinates
     * @param xOrCoords - X coordinate or the whole {@link ICoordinates} object
     * @param y - Y coordinate
     * @internal
     */
    protected constructor(xOrCoords: number | ICoordinates, y?: number) {
        super(xOrCoords, y, origin.z);
    }

    /**
     * A new vector, with coordinates in the origin point
     * @returns a new vector, with coordinates in the origin point
     */
    static get origin(): Vector {
        return Vector.create(origin.x, origin.y);
    }

    /**
     * Clones the given vector
     * @param source - the vector to clone
     * @returns a new vector instance, created from the given one
     */
    static clone(source: Vector): Vector {
        return Vector.create(source.x, source.y);
    }

    /**
     * Creates a new vector instance
     * @param x - X coordinate
     * @param y - Y coordinate
     * @returns the new vector created
     */
    static create(x: number | ICoordinates, y?: number): Vector {
        return new Vector(x, y);
    }
}
