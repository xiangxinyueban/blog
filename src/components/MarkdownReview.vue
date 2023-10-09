<template>
    <div class="content">
        
    <el-card class="left">
        <div v-html="renderedMarkdown" ></div>
    </el-card>

    <el-card class="catalog">
        <div id="catalog" ref="catalog"></div>
    </el-card>
</div>

</template>

<script setup>
// import MarkdownIt from 'markdown-it';
// import Markdown from 'vue3-markdown-it';
// import 'highlight.js/styles/monokai.css';
import hljs from 'highlight.js';
import { watch, ref, defineProps, onMounted } from 'vue';
import 'highlight.js/styles/github.css';

const props = defineProps({
    content: {
        type: String,
        default: ''
    }
})
console.log(props.content)
const renderedMarkdown = ref('');
const catalog=ref(null)
const cata = ref('')
watch(() => props.content, () => {
    const MarkdownIt = require('markdown-it')
    // https://highlightjs.org/
    var md = new MarkdownIt({
        html: false,
        linkify: false,
        typographer: true,
        xhtmlOut: true,
        highlight: function (str, lang) {
            // 当前时间加随机数生成唯一的id标识
            const codeIndex = parseInt(Date.now()) + Math.floor(Math.random() * 10000000)
            // 复制功能主要使用的是 clipboard.js
            let html = `<button class="copy-btn" type="button" data-clipboard-action="copy" data-clipboard-target="#copy${codeIndex}">复制</button>`
            const linesLength = str.split(/\n/).length - 1
            // 生成行号
            let linesNum = '<span aria-hidden="true" class="line-numbers-rows">'
            for (let index = 0; index < linesLength; index++) {
                linesNum = linesNum + '<span></span>'
            }
            linesNum += '</span>'
            if (lang && hljs.getLanguage(lang)) {
                try {
                    // highlight.js 高亮代码
                    const preCode = hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
                    console.log(preCode)
                    html = html + preCode
                    if (linesLength) {
                        html += '<b class="name">' + lang + '</b>'
                    }
                    // 将代码包裹在 textarea 中
                    return `<pre class="hljs" class="target-fix"><code>${html}</code>${linesNum}</pre><textarea style="position: absolute;top: -9999px;left: -9999px;z-index: -9999;" id="copy${codeIndex}">${str.replace(/<\/textarea>/g, '&lt;/textarea>')}</textarea>`
                } catch (error) {
                    console.log(error)
                }
            }

            const preCode = md.utils.escapeHtml(str)
            html = html + preCode
            // 将代码包裹在 textarea 中
            return `<pre class="hljs"><code>${html}</code>${linesNum}</pre><textarea style="position: absolute;top: -9999px;left: -9999px;z-index: -9999;" id="copy${codeIndex}">${str.replace(/<\/textarea>/g, '&lt;/textarea>')}</textarea>`
        }
    })
    var string = require("string");
    function legacySlugify(s) {
        return string(s).slugify().toString();
    }
    md.use(require("markdown-it-anchor").default, { permalink: true, permalinkSymbol: '🔗', slugify: legacySlugify })

    md.use(require("markdown-it-toc-done-right").default,
        {
            slugify: legacySlugify,
            containerClass: 'toc',//生成的容器的类名，这样最后返回来的字符串是 <nav class="toc"><nav/>
            containerId: 'toc',//生成的容器的ID，这样最后返回来的字符串是 <nav id="toc"><nav/>
            listType: 'ul',//导航列表使用ul还是ol
            listClass: 'cataloglistClass',//li标签的样式名
            linkClass: 'cataloglinkClass',//a标签的样式名
            callback: async function (html, ast) {
                //'html'就是目录树的html文本
                // xxx.innerHtml.catalogContent = html;
                cata.value = html.replace(/<a class="cataloglinkClass" href="#(.+?)">(.+?)<\/a>/g, (_match, id, text) => {
          // 生成Vue Router的<router-link>标签
          return `<a class="cataloglinkClass" href="#${id}" @click.stop>${text}<a>`;
        });
                
                // catalog.value.innerHtml.catalogContent = html
                console.log("html", html)
                console.log(ast)
            }
        //     callback: (_tocMarkdown, _tocArray, tocHtml) => {
        // // 替换默认的锚点链接生成逻辑
        // return tocHtml.replace(/<a href="#(.+?)">(.+?)<\/a>/g, (_match, id, text) => {
        //   // 生成Vue Router的<router-link>标签
        //   return `<router-link :to="{ path: '${id}' }">${text}</router-link>`;
        // });
    //   },
        }
    );

    renderedMarkdown.value = md.render(props.content);
}, { immediate: true })
onMounted(()=>{
    console.log(catalog.value)
    catalog.value.innerHTML=cata.value
    console.log( catalog.value.querySelectorAll('a').forEach((a)=> a.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        const el = document.getElementById(id);
        var headerOffset = 50;
        var elementPosition = el.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "auto"
    });
    })))
})
</script>

<style scoped>
pre.hljs {
    padding: 12px 2px 12px 40px !important;
    border-radius: 5px !important;
    position: relative;
    font-size: 14px !important;
    line-height: 22px !important;
    overflow: hidden !important;
}

pre.hljs code {
    display: block !important;
    margin: 0 10px !important;
    overflow-x: auto !important;
}

pre.hljs .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 12px;
    bottom: 12px;
    left: 0;
    font-size: 100%;
    width: 40px;
    text-align: center;
    letter-spacing: -1px;
    border-right: 1px solid rgba(0, 0, 0, .66);
    user-select: none;
    counter-reset: linenumber;
}

pre.hljs .line-numbers-rows span {
    pointer-events: none;
    display: block;
    counter-increment: linenumber;
}

pre.hljs .line-numbers-rows span:before {
    content: counter(linenumber);
    color: #999;
    display: block;
    text-align: center;
}

pre.hljs b.name {
    position: absolute;
    top: 2px;
    right: 50px;
    z-index: 10;
    color: #999;
    pointer-events: none;
}

pre.hljs .copy-btn {
    position: absolute;
    top: 2px;
    right: 4px;
    z-index: 10;
    color: #333;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
    transition: 0.7s background-color;
    border: 0;
    border-radius: 2px;
}

pre.hljs .copy-btn:hover {
    background-color: white;
}
.content {
    display: flex;
    position: relative;
    padding-top: 50px;
}

.left {
    border:1px solid #ccc;
    margin:0;
    width: 79%;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center;
    flex-direction: column; */
}
.catalog{
    width: 20%;
    right:0%;
    position:fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.target-fix a {
    position: relative;
    top: -50px; 
    display: block;
    visibility: hidden;
}
</style>