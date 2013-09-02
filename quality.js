/**
 * @fileOverview
 * @copyright (C) Yuri V. Trukhin.
 * @author Yuri V.Trukhin
 * @version 0.1-snapshot
 * @license Usage requires a licence. For getting price and purchase license subscription write to <a href="mailto:yuri@trukhin.com">yuri@trukhin.com</a>
 */
"use strict";
(function (Quality) {
    (function (Tests) {
        function test(className) {
            return className;
        }
        Tests.test = test;
    })(Quality.Tests || (Quality.Tests = {}));
    var Tests = Quality.Tests;
})(exports.TQuality || (exports.TQuality = {}));
var Quality = exports.TQuality;