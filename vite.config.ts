import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
	plugins: [react(), basicSsl()],
	build: {
		outDir: './docs'
	},
	base: './'
});

