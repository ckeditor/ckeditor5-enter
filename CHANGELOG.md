Changelog
=========

## [10.1.1](https://github.com/ckeditor/ckeditor5-enter/compare/v10.1.0...v10.1.1) (2018-07-18)

Internal changes only (updated dependencies, documentation, etc.).


## [10.1.0](https://github.com/ckeditor/ckeditor5-enter/compare/v10.0.0...v10.1.0) (2018-06-21)

### Features

* Introduced the `ShiftEnter` plugin (support for inserting soft breaks by pressing <kbd>Shift</kbd>+<kbd>Enter</kbd>). This plugin will also be added to the `Essentials` plugin which is available in all official builds, so soft break support will automatically be present in all builds now. Closes [#2](https://github.com/ckeditor/ckeditor5-enter/issues/2). ([0181bbf](https://github.com/ckeditor/ckeditor5-enter/commit/0181bbf))

  Huge thanks to [Alex Eckermann](https://github.com/alexeckermann) for this contribution!


## [10.0.0](https://github.com/ckeditor/ckeditor5-enter/compare/v1.0.0-beta.4...v10.0.0) (2018-04-25)

### Other changes

* Changed the license to GPL2+ only. See [ckeditor/ckeditor5#991](https://github.com/ckeditor/ckeditor5/issues/991). ([9f003b6](https://github.com/ckeditor/ckeditor5-enter/commit/9f003b6))

### BREAKING CHANGES

* The license under which CKEditor 5 is released has been changed from a triple GPL, LGPL and MPL license to a GPL2+ only. See [ckeditor/ckeditor5#991](https://github.com/ckeditor/ckeditor5/issues/991) for more information.


## [1.0.0-beta.4](https://github.com/ckeditor/ckeditor5-enter/compare/v1.0.0-beta.2...v1.0.0-beta.4) (2018-04-19)

Internal changes only (updated dependencies, documentation, etc.).


## [1.0.0-beta.2](https://github.com/ckeditor/ckeditor5-enter/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2018-04-10)

Internal changes only (updated dependencies, documentation, etc.).


## [1.0.0-beta.1](https://github.com/ckeditor/ckeditor5-enter/compare/v1.0.0-alpha.2...v1.0.0-beta.1) (2018-03-15)

### Bug fixes

* `EnterObserver` will stop the `keydown` event when the `enter` event is stopped. Closes: https://github.com/ckeditor/ckeditor5/issues/753. ([b9a7a1e](https://github.com/ckeditor/ckeditor5-enter/commit/b9a7a1e))

### Other changes

* Aligned code to the changes in the engine. ([39e4b4c](https://github.com/ckeditor/ckeditor5-enter/commit/39e4b4c))


## [1.0.0-alpha.2](https://github.com/ckeditor/ckeditor5-enter/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2017-11-14)

Internal changes only (updated dependencies, documentation, etc.).

## [1.0.0-alpha.1](https://github.com/ckeditor/ckeditor5-enter/compare/v0.10.0...v1.0.0-alpha.1) (2017-10-03)

Internal changes only (updated dependencies, documentation, etc.).


## [0.10.0](https://github.com/ckeditor/ckeditor5-enter/compare/v0.9.1...v0.10.0) (2017-09-03)

### Features

* The viewport will be scrolled to the selection when <kbd>Enter</kbd> is pressed. See ckeditor/ckeditor5-engine#660. ([17f815e](https://github.com/ckeditor/ckeditor5-enter/commit/17f815e))

### Other changes

* Aligned the implementation to the new Command API (see https://github.com/ckeditor/ckeditor5-core/issues/88). ([d75b448](https://github.com/ckeditor/ckeditor5-enter/commit/d75b448))

### BREAKING CHANGES

* The command API has been changed.


## [0.9.1](https://github.com/ckeditor/ckeditor5-enter/compare/v0.9.0...v0.9.1) (2017-05-07)

Internal changes only (updated dependencies, documentation, etc.).

## [0.9.0](https://github.com/ckeditor/ckeditor5-enter/compare/v0.8.0...v0.9.0) (2017-04-05)

### Features

* Named existing plugin(s). ([7d1582b](https://github.com/ckeditor/ckeditor5-enter/commit/7d1582b))


## [0.8.0](https://github.com/ckeditor/ckeditor5-enter/compare/v0.7.0...v0.8.0) (2017-03-06)

### Features

* Integrated the command with `Schema#limits`. Closes [#38](https://github.com/ckeditor/ckeditor5/issues/38). ([36dac9b](https://github.com/ckeditor/ckeditor5-enter/commit/36dac9b))
