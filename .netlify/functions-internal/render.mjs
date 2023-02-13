import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["default.jpg","favicon.png","sedih.png","verify.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-8b2a2031.js","imports":["_app/immutable/start-8b2a2031.js","_app/immutable/chunks/index-59f6301b.js","_app/immutable/chunks/singletons-7c8afc1f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/tools/instagram-tag",
				pattern: /^\/tools\/instagram-tag\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/tools/instagram-tag/about",
				pattern: /^\/tools\/instagram-tag\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
