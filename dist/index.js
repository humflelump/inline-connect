"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
function Connected(_a) {
    var children = _a.children, selectors = _a.selectors, actions = _a.actions;
    var state = react_1.useState({})[0];
    state.Blah =
        state.Blah ||
            react_redux_1.connect(function (state) {
                var obj = {};
                for (var i = 0; i < selectors.length; i++) {
                    obj[i] = selectors[i](state);
                }
                return obj;
            })(function (props) {
                var values = selectors.map(function (d, i) { return props[i]; });
                return children.apply(void 0, values).apply(void 0, actions);
            });
    var Blah = state.Blah;
    return react_1.default.createElement(Blah, null);
}
exports.Connected = Connected;
// function range(n) {
//   const nums: any = [];
//   for (let i = 1; i <= n; i++) {
//     nums.push(i);
//   }
//   return nums;
// }
// function generate(s, a) {
//   return `
// export function Connected<${range(s)
//     .map(n => "S" + n)
//     .join(", ")}, ${range(s)
//     .map(n => "R" + n)
//     .join(", ")}, ${range(a)
//     .map(n => "A" + n)
//     .join(", ")}>({
//   children,
//   selectors,
//   actions
// }: {
//   children: (${range(s)
//     .map(n => `val${n}: R${n}`)
//     .join(", ")} ) => (${range(a)
//     .map(n => `action${n}: A${n}`)
//     .join(", ")}) => JSX.Element;
//   selectors: [${range(s)
//     .map(n => `Selector<S${n}, R${n}>`)
//     .join(", ")}];
//   actions: [${range(a)
//     .map(n => `A${n}`)
//     .join(", ")}];
// }): JSX.Element;
// `;
// }
// var hh: any = [];
// for (let a = 1; a < 10; a++) {
//   for (let s = 1; s < 10; s++) {
//     hh.push(generate(s, a));
//   }
// }
// console.log(hh.join(""));
