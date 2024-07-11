import { RefObject } from "react";
/**
 * This hook runs an unmounting animation on a specified node.
 *
 * The hook will also run the animation on any additional elements specified in
 * the `animatedElements` parameter. If no additional elements are specified,
 * the animation will only run on the provided node.
 *
 * After any of the animated elements have completed their animation, `node` is removed from its parent.
 *
 * @param node - The node to animate and remove.
 * @param getAnimatingClass - A function that returns the CSS class to add to the animating elements.
 * @param animatedElements - Additional elements to animate.
 * @param skip - Whether to skip the animation and remove the node immediately.
 */
export declare function useUnmountingAnimation(node: RefObject<HTMLElement>, getAnimatingClass: () => string, animatedElements?: RefObject<HTMLElement>[], skip?: boolean): void;
