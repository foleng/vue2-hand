/*
 * :file description: 
 * :name: \vue2-hand\rollup.config.js
 * :author: 黄艺
 * :copyright: (c) 2021, Tungee
 * :date created: 2021-07-16 17:28:46
 * :last editor: 黄艺
 * :date last edited: 2021-07-16 17:40:52
 */
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';

export default{
	input: './src/index.js',
	output:{
		format:'umd',
		file:'dist/umd/vue.js',
		name:'Vue',
		sourcemap: true,
	},
	plugins:[
		babel({
			exclude:'node_modules/**'
		}),
		process.env.ENV === 'development' ? serve({
			open:true,
			openPage:'/public/index.html',
			port:3000,
			contentBase:'',
		}): null
	]

}

