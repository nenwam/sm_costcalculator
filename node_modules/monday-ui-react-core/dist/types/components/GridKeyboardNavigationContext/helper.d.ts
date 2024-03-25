export function getDirectionMaps(positions: any): {
    right: Map<any, any>;
    left: Map<any, any>;
    up: Map<any, any>;
    down: Map<any, any>;
};
export function getOppositeDirection(direction: any): NavDirections;
export function getOutmostElementInDirection(directionMaps: any, direction: any): any;
export function getNextElementToFocusInDirection(directionMap: any, elementRef: any): any;
import { NavDirections } from "../../hooks/useFullKeyboardListeners";
