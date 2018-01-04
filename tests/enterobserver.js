/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* globals document */

import ViewDocument from '@ckeditor/ckeditor5-engine/src/view/document';
import EnterObserver from '../src/enterobserver';
import DomEventData from '@ckeditor/ckeditor5-engine/src/view/observer/domeventdata';
import { getCode } from '@ckeditor/ckeditor5-utils/src/keyboard';
import priorities from '../../ckeditor5-utils/src/priorities';

describe( 'EnterObserver', () => {
	let viewDocument;

	beforeEach( () => {
		viewDocument = new ViewDocument();
		viewDocument.addObserver( EnterObserver );
	} );

	// See #10.
	it( 'can be initialized', () => {
		expect( () => {
			viewDocument.createRoot( document.createElement( 'div' ) );
		} ).to.not.throw();
	} );

	describe( 'enter event', () => {
		it( 'is fired on keydown', () => {
			const spy = sinon.spy();

			viewDocument.on( 'enter', spy );

			viewDocument.fire( 'keydown', new DomEventData( viewDocument, getDomEvent(), {
				keyCode: getCode( 'enter' )
			} ) );

			expect( spy.calledOnce ).to.be.true;
		} );

		it( 'is not fired on keydown when keyCode does not match enter', () => {
			const spy = sinon.spy();

			viewDocument.on( 'enter', spy );

			viewDocument.fire( 'keydown', new DomEventData( viewDocument, getDomEvent(), {
				keyCode: 1
			} ) );

			expect( spy.calledOnce ).to.be.false;
		} );

		it( 'should listen to keydown generic event on highest priority and block it when handled', () => {
			const lowerPrioritySpy = sinon.spy();
			const higherPrioritySpy = sinon.spy();
			const priority = priorities.get( 'highest' );

			viewDocument.on( 'keydown', genericEventCallback( lowerPrioritySpy ), { priority: priority - 1 } );
			viewDocument.on( 'keydown', genericEventCallback( higherPrioritySpy ), { priority: priority + 1 } );

			viewDocument.fire( 'keydown', new DomEventData( viewDocument, getDomEvent(), {
				keyCode: getCode( 'enter' )
			} ) );

			sinon.assert.calledOnce( higherPrioritySpy );
			sinon.assert.notCalled( lowerPrioritySpy );

			function genericEventCallback( spy ) {
				return evt => {
					if ( evt.name == 'keydown' ) {
						spy();
					}
				};
			}
		} );

		it( 'should fire keydown:enter event when enter is handled', () => {
			const spy = sinon.spy();
			viewDocument.on( 'keydown:enter', spy );

			viewDocument.fire( 'keydown', new DomEventData( viewDocument, getDomEvent(), {
				keyCode: getCode( 'enter' )
			} ) );

			sinon.assert.calledOnce( spy );
		} );

		it( 'should not fire keydown:enter event when enter is not handled', () => {
			const spy = sinon.spy();
			viewDocument.on( 'keydown:enter', spy );

			viewDocument.fire( 'keydown', new DomEventData( viewDocument, getDomEvent(), {
				keyCode: getCode( 'a' )
			} ) );

			sinon.assert.notCalled( spy );
		} );
	} );

	function getDomEvent() {
		return {
			preventDefault: sinon.spy()
		};
	}
} );
