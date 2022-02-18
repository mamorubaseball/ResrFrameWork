# DjangoのRestFrameWorkAPIとVueを使ってwebアプリの作成

# Vueの利用
```commandline
sudo npm i -g @vue/cli
vue create frontend
    Manualyを選択  
    Rooterを選択
    V2
    y
    prettier
    lint on save
    in package.json
    n
      
 cd frontend 
 npm install webpack-bundle-tracker@0.4.3
 npm run serve
```
ここまで成功！！
 ```
  pip install django-webpack-loader
  
  setings.pyのwebのinstallappに追加、
  vue.cocnfig.jsファイルの作成から中身の記述がよくわからん。
 ```

 ### バックエンドとフロントエンドを完全に分ける

 ターミナル1
 ```
npm run server
 ```
ターミナル2
```
python manage.py runserer
```

### Vuetifyの使用
vuetifyをインストールするとvue.config.jsの中身が書き換えられてしますので、コピーして保存しておく。
```
const BundleTracker=require('webpack-bundle-tracker');

module.exports = {
  // MacPublicPath 'https://0.0.0.:8000'
  publicPath:"http://0.0.0.0:8080/", 
  outputDir:"./dist/",
  
  chainWebpack: config=>{
    config.plugin("BundleTracker").use(BundleTracker,[{filename:'./webpack-stats.json'}]);
    config.output.filename('bundle.js');
    config.optimization.splitChunks(false);
    config.resolve.alias.set('__STATIC__','static');
    config.devServer
        .hotOnly(true)
        .watchOptions({poll:1000})
        .https(false)
        .disableHostCheck(true)
        .headers({'Access-Control-Allow-Origin':['*']});
  },
};

```

[routerがないので、routerを追加する。](https://mizukazu.com/add-vue-router/)
```
npm install vue-router
⇛npm WARN vue-router@4.0.12 requires a peer of vue@^3.0.0 but none is installed. You must install peer dependencies yourself.

⇛vue add vue-next
```




エラー
この２つ入れたらAPIを作成できた[restframework参照](https://www.django-rest-framework.org/)
```
pip install markdown     
pip install django-filter
```
