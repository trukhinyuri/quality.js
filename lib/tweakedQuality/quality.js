/**
 * @fileOverview
 * @copyright (C) Yuri V. Trukhin.
 * @author Yuri V.Trukhin
 * @version 0.1-snapshot
 * @license Usage requires a licence. For getting price and purchase license subscription write to <a href="mailto:yuri@trukhin.com">yuri@trukhin.com</a>
 */
"use strict";
(function (TQuality) {
    (function (Tests) {
        function test(className) {
            return className;
        }
        Tests.test = test;
    })(TQuality.Tests || (TQuality.Tests = {}));
    var Tests = TQuality.Tests;
})(exports.TQuality || (exports.TQuality = {}));
var TQuality = exports.TQuality;