// build time:Fri May 18 2018 10:20:37 GMT+0800 (中国标准时间)
$(function(){$("a.social-icon.search").on("click",function(){$(".search-dialog").velocity("stop").velocity("transition.expandIn",{duration:300});$(".search-mask").velocity("stop").velocity("transition.fadeIn",{duration:300})});$(".search-mask, .search-close-button").on("click",function(){$(".search-dialog").velocity("stop").velocity("transition.expandOut",{duration:300});$(".search-mask").velocity("stop").velocity("transition.fadeOut",{duration:300})});var a=GLOBAL.algolia;var i=a.appId&&a.apiKey&&a.indexName;if(!i){return console.error("Algolia setting is invalid!")}var e=instantsearch({appId:a.appId,apiKey:a.apiKey,indexName:a.indexName,searchParameters:{hitsPerPage:a.hits.per_page||10},searchFunction:function(a){var i=$("#algolia-search-input").find("input");if(i.val()){a.search()}}});e.addWidget(instantsearch.widgets.searchBox({container:"#algolia-search-input",reset:false,magnifier:false,placeholder:a.labels.input_placeholder}));e.addWidget(instantsearch.widgets.hits({container:"#algolia-hits",templates:{item:function(a){var i=a.permalink?a.permalink:GLOBAL.root+a.path;return'<a href="'+i+'" class="algolia-hit-item-link">'+a._highlightResult.title.value+"</a>"},empty:function(i){return'<div id="algolia-hits-empty">'+a.labels.hits_empty.replace(/\$\{query}/,i.query)+"</div>"}},cssClasses:{item:"algolia-hit-item"}}));e.addWidget(instantsearch.widgets.stats({container:"#algolia-stats",templates:{body:function(i){var e=a.labels.hits_stats.replace(/\$\{hits}/,i.nbHits).replace(/\$\{time}/,i.processingTimeMS);return"<hr>"+e+'<span class="algolia-logo pull-right">'+'  <img src="'+GLOBAL.root+'img/algolia.svg" alt="Algolia" />'+"</span>"}}}));e.addWidget(instantsearch.widgets.pagination({container:"#algolia-pagination",scrollTo:false,showFirstLast:false,labels:{first:'<i class="fa fa-angle-double-left"></i>',last:'<i class="fa fa-angle-double-right"></i>',previous:'<i class="fa fa-angle-left"></i>',next:'<i class="fa fa-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",active:"current",disabled:"disabled-item"}}));e.start()});
//rebuild by neat 