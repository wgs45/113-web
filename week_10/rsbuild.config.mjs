import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
    plugins: [pluginReact()],
    output: {
        image: 'public',
        svg: 'public',
        font: 'public',
        media: 'public',
    },
});
