import { Injectable } from '@angular/core';

/**
 * Since the caller is expecting to run a function,
 * if there is no permission to log anything, then
 * the caller executes a void function.
 */
const emptyFunction = () => {};

/**
 * This class aims to be a window.console wrapper.
 * Getters are used in order to access to our functions like properties.
 *
 * The getters return a bind of console.[method].bind(window)
 * to set the 'this' keyword to the provided object: window.
 *
 * In practice, when the programmer calls our getters, they return a
 * function. If the property is called with any arguments, these are
 * used when calling the returned function - it is called from where
 * the property was requested thus including the correct filename and
 * line of code.
 */
@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  /**
   * When this service is instantiated, it evaluates
   * Config.loggerlevel. If it's invalid, then set the
   * globalLoggerlevel to LoggerLevel.All (= 0).
   */
  constructor() {}

  /**
   * Wrapper for {@link https://developer.mozilla.org/en-US/docs/Web/API/Console/debug console.debug()}.
   * @returns The console.debug function.
   */
  get debug() {
    return console.debug.bind(window);
  }

  /**
   * Wrapper for {@link https://developer.mozilla.org/en-US/docs/Web/API/Console/info console.info()}.
   * @returns The console.info function.
   */
  get info() {
    return console.info.bind(window);
  }

  /**
   * Wrapper for {@link https://developer.mozilla.org/en-US/docs/Web/API/Console/log console.log()}.
   * @returns The console.log function.
   */
  get log() {
    return console.log.bind(window);
  }

  /**
   * Wrapper for {@link https://developer.mozilla.org/en-US/docs/Web/API/Console/warn console.warn()}.
   * @returns The console.warn function. This function will also print its stack trace if the browser is Chrome.
   */
  get warn() {
    return console.warn.bind(window);
  }

  /**
   * Wrapper for {@link https://developer.mozilla.org/en-US/docs/Web/API/Console/error console.error()}.
   * @returns The console.error function. This function will also print its stack trace on all browsers.
   */
  get error() {
    return console.error.bind(window);
  }

  /**
   * Wrapper for {@link https://developer.mozilla.org/en-US/docs/Web/API/Console/table console.table()}.
   * @returns The console.table function.
   */
  get table() {
    return console.table.bind(window);
  }
}
