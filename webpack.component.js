const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const glob = require('glob');
const list = {};
 
// ${dirPath}?   file.split(/[/.]/)[2]?
async function makeList(dirPath, _list){
    const files = glob.sync(`${dirPath}/**/index.js`);
    console.log('files:', files);
    for(let file of files){
        const component = file.split(/[/.]/)[2];
        console.log('component:', component);
        list[component] = `./${file}`;
    }
    console.log(list);
    
}

makeList('components/lib', list);

// 什么是umd模式
module.exports = {
    entry:list,
    mode: 'development',
    output: {
        filename: '[name].umd.js', // card.umd.js
        // path: 'dist',
        path: path.resolve(__dirname, 'dist'), //2个_
        library:'mui',
        libraryTarget:'umd'
    },
    plugins: [
        new VueLoaderPlugin()   
    ],
    module: {
        rules: [
            {
                test:/\.vue$/, //.vue结尾的文件
                use: [
                    {
                        loader: 'vue-loader',
                    }
                ]          
            }
        ]
    } 
}