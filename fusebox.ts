import { FuseBox } from "fuse-box";
import { argv } from "yargs";

// Arrange yargs input
interface IBuildConfig {
    watchMode: boolean;
}
const config = {} as IBuildConfig;
config.watchMode = argv.watch || false;

// Configure build steps

const fuse = FuseBox.init({
    homeDir: "src",
    output: "./dist/$name.js",
    tsConfig: "./tsconfig.json",
    cache: true,
    sourceMaps: false,
});

let app = fuse.bundle("app").target("browser").instructions(">./Index.tsx");
if (config.watchMode) {
    app = app.watch();
}
fuse.run();
