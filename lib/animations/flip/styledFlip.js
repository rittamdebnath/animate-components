'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flipY = exports.flipX = exports.flip = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tfrom {\n\t\ttransform: perspective(450px) rotate3d(0, 1, 0, -360deg);\n\t\tanimation-timing-function: ease-out;\n\t}\n\n\t40% {\n\t\ttransform: perspective(450px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n\t\tanimation-timing-function: ease-out;\n\t}\n\t\n\t50% {\n\t\ttransform: perspective(450px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170px);\n\t\tanimation-timing-function: ease-in;\n\t}\n\t\n\t80% {\n\t\ttransform: perspective(450px) scale3d(.90, .90, .90);\n\t\tanimation-timing-function: ease-in;\n\t}\n\t\n\tto {\n\t\ttransform: perspective(450px);\n\t\tanimation-timing-function: ease-in;\n\t}\n'], ['\n\tfrom {\n\t\ttransform: perspective(450px) rotate3d(0, 1, 0, -360deg);\n\t\tanimation-timing-function: ease-out;\n\t}\n\n\t40% {\n\t\ttransform: perspective(450px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n\t\tanimation-timing-function: ease-out;\n\t}\n\t\n\t50% {\n\t\ttransform: perspective(450px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170px);\n\t\tanimation-timing-function: ease-in;\n\t}\n\t\n\t80% {\n\t\ttransform: perspective(450px) scale3d(.90, .90, .90);\n\t\tanimation-timing-function: ease-in;\n\t}\n\t\n\tto {\n\t\ttransform: perspective(450px);\n\t\tanimation-timing-function: ease-in;\n\t}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n'], ['\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n'], ['\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var flip = (0, _styledComponents.keyframes)(_templateObject);

var flipX = (0, _styledComponents.keyframes)(_templateObject2);

var flipY = (0, _styledComponents.keyframes)(_templateObject3);

exports.flip = flip;
exports.flipX = flipX;
exports.flipY = flipY;