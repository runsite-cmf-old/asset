/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.skin = 'office2013';
	config.extraPlugins = 'mediaembed';
	config.allowedContent = true;

	config.toolbar = [
		{name: 'tools', items: ['Source', 'Maximize']},
		{name: 'clipboard', items: ['Cut','Copy','Paste','PasteText','PasteFromWord','-', 'Image', 'Mediaembed', 'Table','HorizontalRule', 'Styles','Format','Font','FontSize']},
		'/',
		{name: 'basicstyles', items: ['Bold','Italic','Underline','Strike','-','RemoveFormat', 'TextColor','BGColor']},
		{name: 'paragraph', items: ['NumberedList','BulletedList','-', '-','Blockquote', '-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ]},
		{name: 'links', items: ['Link','Unlink']},
	];
};
