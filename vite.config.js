import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: path.resolve(__dirname),  // Cambiar 'src' a la raíz del proyecto
    publicDir: path.resolve(__dirname, 'public'),
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
