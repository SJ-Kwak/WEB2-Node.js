/**
 * Methods for getting and modifying attributes.
 *
 * @module cheerio/attributes
 */
import type { Node, Element } from 'domhandler';
import type { Cheerio } from '../cheerio';
/**
 * Method for getting attributes. Gets the attribute value for only the first
 * element in the matched set.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('ul').attr('id');
 * //=> fruits
 * ```
 *
 * @param name - Name of the attribute.
 * @returns The attribute's value.
 * @see {@link https://api.jquery.com/attr/}
 */
export declare function attr<T extends Node>(this: Cheerio<T>, name: string): string | undefined;
/**
 * Method for getting all attributes and their values of the first element in
 * the matched set.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('ul').attr();
 * //=> { id: 'fruits' }
 * ```
 *
 * @returns The attribute's values.
 * @see {@link https://api.jquery.com/attr/}
 */
export declare function attr<T extends Node>(this: Cheerio<T>): Record<string, string>;
/**
 * Method for setting attributes. Sets the attribute value for only the first
 * element in the matched set. If you set an attribute's value to `null`, you
 * remove that attribute. You may also pass a `map` and `function`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.apple').attr('id', 'favorite').html();
 * //=> <li class="apple" id="favorite">Apple</li>
 * ```
 *
 * @param name - Name of the attribute.
 * @param value - The new value of the attribute.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/attr/}
 */
export declare function attr<T extends Node>(this: Cheerio<T>, name: string, value?: string | null | ((this: Element, i: number, attrib: string) => string | null)): Cheerio<T>;
/**
 * Method for setting multiple attributes at once. Sets the attribute value for
 * only the first element in the matched set. If you set an attribute's value to
 * `null`, you remove that attribute.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.apple').attr({ id: 'favorite' }).html();
 * //=> <li class="apple" id="favorite">Apple</li>
 * ```
 *
 * @param values - Map of attribute names and values.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/attr/}
 */
export declare function attr<T extends Node>(this: Cheerio<T>, values: Record<string, string | null>): Cheerio<T>;
interface StyleProp {
    length: number;
    [key: string]: string | number;
    [index: number]: string;
}
/**
 * Method for getting and setting properties. Gets the property value for only
 * the first element in the matched set.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('input[type="checkbox"]').prop('checked');
 * //=> false
 *
 * $('input[type="checkbox"]').prop('checked', true).val();
 * //=> ok
 * ```
 *
 * @param name - Name of the property.
 * @param value - If specified set the property to this.
 * @returns If `value` is specified the instance itself, otherwise the prop's value.
 * @see {@link https://api.jquery.com/prop/}
 */
export declare function prop<T extends Node>(this: Cheerio<T>, name: 'tagName' | 'nodeName'): T extends Element ? string : undefined;
export declare function prop<T extends Node>(this: Cheerio<T>, name: 'innerHTML' | 'outerHTML'): string | null;
export declare function prop<T extends Node>(this: Cheerio<T>, name: 'style'): StyleProp;
export declare function prop<T extends Node, K extends keyof Element>(this: Cheerio<T>, name: K): Element[K];
export declare function prop<T extends Node, K extends keyof Element>(this: Cheerio<T>, name: K, value: Element[K] | ((this: Element, i: number, prop: K) => Element[keyof Element])): Cheerio<T>;
export declare function prop<T extends Node>(this: Cheerio<T>, name: Record<string, string | Element[keyof Element] | boolean>): Cheerio<T>;
export declare function prop<T extends Node>(this: Cheerio<T>, name: string, value: string | boolean | null | ((this: Element, i: number, prop: string) => string | boolean)): Cheerio<T>;
export declare function prop<T extends Node>(this: Cheerio<T>, name: string): string;
/**
 * Method for getting data attributes, for only the first element in the matched set.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('<div data-apple-color="red"></div>').data('apple-color');
 * //=> 'red'
 * ```
 *
 * @param name - Name of the data attribute.
 * @returns The data attribute's value.
 * @see {@link https://api.jquery.com/data/}
 */
export declare function data<T extends Node>(this: Cheerio<T>, name: string): unknown | undefined;
/**
 * Method for getting all of an element's data attributes, for only the first
 * element in the matched set.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('<div data-apple-color="red"></div>').data();
 * //=> { appleColor: 'red' }
 * ```
 *
 * @returns The data attribute's values.
 * @see {@link https://api.jquery.com/data/}
 */
export declare function data<T extends Node>(this: Cheerio<T>): Record<string, unknown>;
/**
 * Method for setting data attributes, for only the first element in the matched set.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * const apple = $('.apple').data('kind', 'mac');
 *
 * apple.data('kind');
 * //=> 'mac'
 * ```
 *
 * @param name - Name of the data attribute.
 * @param value - The new value.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/data/}
 */
export declare function data<T extends Node>(this: Cheerio<T>, name: string, value: unknown): Cheerio<T>;
/**
 * Method for setting multiple data attributes at once, for only the first
 * element in the matched set.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * const apple = $('.apple').data({ kind: 'mac' });
 *
 * apple.data('kind');
 * //=> 'mac'
 * ```
 *
 * @param values - Map of names to values.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/data/}
 */
export declare function data<T extends Node>(this: Cheerio<T>, values: Record<string, unknown>): Cheerio<T>;
/**
 * Method for getting the value of input, select, and textarea. Note: Support
 * for `map`, and `function` has not been added yet.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('input[type="text"]').val();
 * //=> input_text
 * ```
 *
 * @returns The value.
 * @see {@link https://api.jquery.com/val/}
 */
export declare function val<T extends Node>(this: Cheerio<T>): string | undefined | string[];
/**
 * Method for setting the value of input, select, and textarea. Note: Support
 * for `map`, and `function` has not been added yet.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('input[type="text"]').val('test').html();
 * //=> <input type="text" value="test"/>
 * ```
 *
 * @param value - The new value.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/val/}
 */
export declare function val<T extends Node>(this: Cheerio<T>, value: string | string[]): Cheerio<T>;
/**
 * Method for removing attributes by `name`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').removeAttr('class').html();
 * //=> <li>Pear</li>
 *
 * $('.apple').attr('id', 'favorite');
 * $('.apple').removeAttr('id class').html();
 * //=> <li>Apple</li>
 * ```
 *
 * @param name - Name of the attribute.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/removeAttr/}
 */
export declare function removeAttr<T extends Node>(this: Cheerio<T>, name: string): Cheerio<T>;
/**
 * Check to see if *any* of the matched elements have the given `className`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').hasClass('pear');
 * //=> true
 *
 * $('apple').hasClass('fruit');
 * //=> false
 *
 * $('li').hasClass('pear');
 * //=> true
 * ```
 *
 * @param className - Name of the class.
 * @returns Indicates if an element has the given `className`.
 * @see {@link https://api.jquery.com/hasClass/}
 */
export declare function hasClass<T extends Node>(this: Cheerio<T>, className: string): boolean;
/**
 * Adds class(es) to all of the matched elements. Also accepts a `function`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').addClass('fruit').html();
 * //=> <li class="pear fruit">Pear</li>
 *
 * $('.apple').addClass('fruit red').html();
 * //=> <li class="apple fruit red">Apple</li>
 * ```
 *
 * @param value - Name of new class.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/addClass/}
 */
export declare function addClass<T extends Node, R extends ArrayLike<T>>(this: R, value?: string | ((this: Element, i: number, className: string) => string | undefined)): R;
/**
 * Removes one or more space-separated classes from the selected elements. If no
 * `className` is defined, all classes will be removed. Also accepts a `function`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').removeClass('pear').html();
 * //=> <li class="">Pear</li>
 *
 * $('.apple').addClass('red').removeClass().html();
 * //=> <li class="">Apple</li>
 * ```
 *
 * @param name - Name of the class. If not specified, removes all elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/removeClass/}
 */
export declare function removeClass<T extends Node, R extends ArrayLike<T>>(this: R, name?: string | ((this: Element, i: number, className: string) => string | undefined)): R;
/**
 * Add or remove class(es) from the matched elements, depending on either the
 * class's presence or the value of the switch argument. Also accepts a `function`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.apple.green').toggleClass('fruit green red').html();
 * //=> <li class="apple fruit red">Apple</li>
 *
 * $('.apple.green').toggleClass('fruit green red', true).html();
 * //=> <li class="apple green fruit red">Apple</li>
 * ```
 *
 * @param value - Name of the class. Can also be a function.
 * @param stateVal - If specified the state of the class.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/toggleClass/}
 */
export declare function toggleClass<T extends Node, R extends ArrayLike<T>>(this: R, value?: string | ((this: Element, i: number, className: string, stateVal?: boolean) => string), stateVal?: boolean): R;
/**
 * Checks the current list of elements and returns `true` if *any* of the
 * elements match the selector. If using an element or Cheerio selection,
 * returns `true` if *any* of the elements match. If using a predicate function,
 * the function is executed in the context of the selected element, so `this`
 * refers to the current element.
 *
 * @category Attributes
 * @param selector - Selector for the selection.
 * @returns Whether or not the selector matches an element of the instance.
 * @see {@link https://api.jquery.com/is/}
 */
export declare function is<T extends Node>(this: Cheerio<T>, selector?: string | ((this: Element, i: number, el: Element) => boolean) | Cheerio<T> | T | null): boolean;
export {};
//# sourceMappingURL=attributes.d.ts.map