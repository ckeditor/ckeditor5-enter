/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module enter/enterobserver
 */

import Observer from '@ckeditor/ckeditor5-engine/src/view/observer/observer';
import DomEventData from '@ckeditor/ckeditor5-engine/src/view/observer/domeventdata';
import { keyCodes } from '@ckeditor/ckeditor5-utils/src/keyboard';

/**
 * Enter observer introduces the {@link module:engine/view/document~Document#event:enter} event.
 *
 * @extends module:engine/view/observer~Observer
 */
export default class EnterObserver extends Observer {
	constructor( document ) {
		super( document );

		document.on( 'keydown', ( evt, data ) => {
			// Do not handle if specific event like `keydown:enter` is fired.
			// https://github.com/ckeditor/ckeditor5/issues/753
			if ( this.isEnabled && data.keyCode == keyCodes.enter && evt.name == 'keydown' ) {
				document.fire( 'enter', new DomEventData( document, data.domEvent ) );

				// Stop generic `keydown` event and fire specific `keydown:enter` event.
				evt.stop();
				document.fire( 'keydown:enter', data );
			}
		}, { priority: 'highest' } );
	}

	/**
	 * @inheritDoc
	 */
	observe() {}
}

/**
 * Event fired when the user presses the <kbd>Enter</kbd> key.
 *
 * Note: This event is fired by the {@link module:enter/enterobserver~EnterObserver observer}
 * (usually registered by the {@link module:enter/enter~Enter Enter feature}).
 *
 * @event module:engine/view/document~Document#event:enter
 * @param {module:engine/view/observer/domeventdata~DomEventData} data
 */

/**
 * Fired when a keydown event was handled by {@link module:enter/enterobserver~EnterObserver}.
 * It can be used to determine if the event was handled by {@link module:enter/enterobserver~EnterObserver} or it is
 * a generic event created by {@link module:engine/view/observer/keyobserver~KeyObserver}.
 *
 * @see module:engine/view/observer/keyobserver~KeyObserver
 * @event module:engine/view/document~Document#event:keydown:enter
 * @param {module:engine/view/observer/keyobserver~KeyEventData} keyEventData
 */
