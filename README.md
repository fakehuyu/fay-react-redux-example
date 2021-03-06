# fay-react-redux-example
利用react/redux开发大型项目的一个简单架构示例

<p align="center">
  <a href="https://github.com/love-fay/fay-sso">
    <img width="150" src="https://github.com/love-fay/fay-sso/blob/master/fay-admin/src/assets/images/logo/150%3D150.png">
  </a>
</p>

_因大部分库版本较新，部分库没有跟上，启动后会报一些错误，可以忽略，只要启动完毕的那一刻显示的是webpack: Compiled successfully.便是执行成功！_

> 本地需要安装npm，建议更新到最新版本

> <code>npm start</code>运行整个项目

> <code>npm run start-layout</code>运行布局（layout）模块

> <code>npm run start-uums</code>运行统一用户（uums）模块

> <code>npm run start-uc</code>运行统一配置（uc）模块

> 这只是一个demo，所以里面的异步请求数据是写死的

> 这个demo中写了两个极其简洁的模块：统一用户（uums）和统一配置（uc）

> platform目录是将所有模块集中的，利用路由导向各模块

> 该项目是用react/redux相关技术栈开发，并利用react的this.context动态改动store和webpack的bundle-loader进行了code splitting

> code-splitting后项目会按照所需加载所需的js文件，而在此我针对Chrome对项目的js文件加载这块做了预加载（preload），
> 当然不可能手写在index.html文件中，这里利用了Google Chrome团队开发的webpack插件【preload-webpack-plugin】，
> 然后在webpack配置文件中配置如下：

> <pre>
>    new HtmlWebpackPlugin({
>        template: __dirname + '/platform/app/index.html',
>    }),
>    new PreloadWebpackPlugin({
>        rel: 'preload',
>        include: 'asyncChunks'
>    }),
> </pre>

> 重要的是要放在HtmlWebpackPlugin后面配置，这里利用的是preload而不是prefetch，
> preload是预加载并且是并行加载（非阻塞）但不执行，对于这个demo这方面的知识就不详细说了

> 还有一种利用require.ensure进行预加载，其实按需加载也是用require.ensure，不过这里用法是将它预先下载下来，
> 在该demo中preload针对了uc模块，require.ensure针对了uums模块，
> npm start运行后根据谷歌浏览器调试工具便可清晰地看到，以及区别

> 各模块都可以单独运行，都拥有独立webpack配置文件，因项目原因以及业务应用开发，不会发至npm上，
> 所以不会以依赖的形式在node_modules中，但总的package.json在根目录下，有且只有一个，各模块都会利用这一个，
> 同时也做到了依赖第三方技术的版本统一

> 看到这里有人会觉得少了测试，当然，这次暂且不加，不过我比较推荐使用jest，同样来自Facebook

> 当然实际项目中可能会出现两个或两个以上项目，而这两个项目只需要一个登录，也就是所谓的单点登录（SSO）
> 我也写了关于单点登录demo，很简单，没多大技术含量<link>https://github.com/love-fay/fay-sso</link>

> 针对code splitting的demo：<link>https://github.com/love-fay/fay-webpack-redux-code-splitting</link>

