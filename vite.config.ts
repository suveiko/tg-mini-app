import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
	plugins: [react(), basicSsl()],
	build: {
		outDir: './docs'
	},
	server: {
		host: '0.0.0.0',
		port: 3000,
		strictPort: true,
		cors: {
			origin: '*', // Разрешить доступ из любых источников
		},
		hmr: {
			host: 'localhost',
		},
	},
	base: './'
});

