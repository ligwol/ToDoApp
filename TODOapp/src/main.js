import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'TODO App',
		version: '1.0'
	}
});

export default app;