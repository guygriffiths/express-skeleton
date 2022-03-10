import { defineConfig } from 'vite'
import { VitePluginNode } from 'vite-plugin-node'

const config = defineConfig({
	server: {
		port: 3003,
	},
	plugins: [
		...VitePluginNode({
			// the node framework yout are using,
			// currently this plugin support 'express', 'nest' and 'custom',
			adapter: 'express',
			appPath: './app.ts',
			exportName: 'viteNodeApp',
		}),
	],
})

export default config
