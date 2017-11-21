const { FuseBox } = require('fuse-box');
const fuse = FuseBox.init({
    homeDir: "src",
    sourcemaps: true,
    output: "dist/$name.js",
    cache: true,
    tsConfig: "tsconfig.json"
});
fuse.bundle("bundle").instructions('>main.ts **/*index.html').hmr({reload: true}).watch();
fuse.dev({
    open: true
});
fuse.run();
