/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface ZuckerLogo {
    'animation': boolean;
  }
  interface ZuckerLogoAttributes extends StencilHTMLAttributes {
    'animation'?: boolean;
  }
}

declare global {
  interface StencilElementInterfaces {
    'ZuckerLogo': Components.ZuckerLogo;
  }

  interface StencilIntrinsicElements {
    'zucker-logo': Components.ZuckerLogoAttributes;
  }


  interface HTMLZuckerLogoElement extends Components.ZuckerLogo, HTMLStencilElement {}
  var HTMLZuckerLogoElement: {
    prototype: HTMLZuckerLogoElement;
    new (): HTMLZuckerLogoElement;
  };

  interface HTMLElementTagNameMap {
    'zucker-logo': HTMLZuckerLogoElement
  }

  interface ElementTagNameMap {
    'zucker-logo': HTMLZuckerLogoElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
