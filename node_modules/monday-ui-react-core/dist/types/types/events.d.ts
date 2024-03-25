import React from "react";
export declare type OnPressEventType<Element> = React.MouseEvent<Element> | React.FocusEvent<Element>;
export declare type GeneralEventType = Event | React.UIEvent;
export declare type GenericEventCallback = (ev: GeneralEventType) => unknown;
export declare type KeyboardEventCallback = (event: KeyboardEvent) => unknown;
export declare type MouseEventCallBack = (event: React.MouseEvent<HTMLElement | SVGElement>) => void;
