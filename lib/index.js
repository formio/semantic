import templates from "./templates";
const goforms = {
    framework: "goforms",
    templates,
};
export default goforms;
export { goforms };
// For CJS consumers (optional, but robust)
if (typeof module !== "undefined") {
    module.exports = goforms;
}
