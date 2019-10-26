(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,n){},27:function(e,t,n){e.exports=n(45)},32:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),s=n.n(o),i=(n(32),n(11)),c=n(12),u=n(15),l=n(13),m=n(6),p=n(16),f="https://pokeapi.co/api/v2/pokemon?limit=964",h=function(e){return e.results.map((function(e){return{name:e.name,url:e.url}}))};var d=function(){return fetch(f).then((function(e){return e.json()})).then((function(e){return h(e)})).catch((function(e){return console.log("Fetch error: "+e)}))},k=function(e){return Promise.all(e.map((function(e){return fetch(e.url).then((function(e){return e.json()}))})))},_=n(8),v=(n(21),function(e){var t=e.pokemon;return r.a.createElement(_.b,{to:"/info/".concat(t.id),key:"info"+t.id},r.a.createElement("li",{className:"poke__list_item"},r.a.createElement("small",{className:"poke__list_number"},t.id),r.a.createElement("img",{src:t.frontImage,alt:t.name,className:"poke__list_defaultimg"}),r.a.createElement("h5",{className:"poke__list_name"},t.name),r.a.createElement("ul",{className:"poke__list_types_typeslist"},t.types.map((function(e){return r.a.createElement("li",{className:"poke__list_types_itemtypes ".concat(e),key:e},e)})))))}),g=function(e){var t=e.pokemons;return r.a.createElement("ul",{className:"poke__list"},t.map((function(e){return r.a.createElement(v,{pokemon:e,key:e.id})})))},y=(n(38),n(39),function(e){var t=e.namesSuggestions,n=e.userQuery,a=e.handleSuggestedName;if(""!==n)return r.a.createElement("ul",{className:"filter__suggestions_list"},t.filter((function(e){return e.includes(n.toLowerCase())})).map((function(e){return r.a.createElement("li",{className:"filter__suggestions_list_item",key:e,onClick:a,"data-id":e},e)})))}),E=function(e){var t=e.handleSearch,n=e.allPokemonsNames,a=e.handleAutoSearch,o=e.userQuery,s=e.handleSuggestedName;return r.a.createElement("form",{className:"poke__form",onSubmit:t},r.a.createElement("button",{type:"submit"}," Buscar "),r.a.createElement("div",{className:"filter__suggestions_inputName_wrapper"},r.a.createElement("input",{type:"text",className:"filter__suggestions_inputName",onChange:a,placeholder:"Pikachu"}),""===o?r.a.createElement("label",{className:"filter__suggestions_inputName_label"},"Ej: Pikachu"):"",""!==o?r.a.createElement(y,{namesSuggestions:n,userQuery:o,handleSuggestedName:s}):""))},b=n(5),N=n(9),S=n.n(N),j=n(14);function P(){return(P=Object(j.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://pokeapi.co/api/v2/evolution-chain/".concat(t.id)).then((function(e){return e.json()})).then((function(e){return e.chain.evolves_to[0].evolves_to})).then((function(e){return 0!==e.length?e.map((function(e){return e.species.name})):["No evoluciona"]})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(e){return P.apply(this,arguments)};function D(){return(D=Object(j.a)(S.a.mark((function e(t){var n,a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.types.map((function(e){return e.type.name})),a=O(t),e.next=4,a;case 4:return r=e.sent,e.abrupt("return",{id:t.id,name:t.name,frontImage:t.sprites.front_default,backImage:t.sprites.back_default,shinyImage:t.sprites.front_shiny,types:n,evolutions:r});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(e){var t="https://pokeapi.co/api/v2/pokemon/".concat(e);return fetch(t).then((function(e){return e.json()})).then((function(e){return function(e){return D.apply(this,arguments)}(e)}))},x=(n(41),function(e){var t=e.pokemonObj;return r.a.createElement("section",{className:"detail__wrapper"},r.a.createElement("img",{src:t.frontImage,alt:t.name}),r.a.createElement("h5",null,t.name),r.a.createElement("ul",{className:"detail__types_list"},t.types.map((function(e){return r.a.createElement("li",{className:"detail__types_list_item",key:t.name+e},e)}))),r.a.createElement("p",null,"Evolution"),t.evolutions.map((function(e){return r.a.createElement("small",{key:t.name+e},e)})))}),I=n(26),A=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={pokemon:[]},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;w(this.props.pokeID).then((function(t){return e.setState({pokemon:t},(function(){return console.log(e.state)}))}))}},{key:"render",value:function(){var e=this.state.pokemon;return console.log(this.state),Object(I.isArray)(e)?"Cargando info...":r.a.createElement(x,{pokemonObj:e})}}]),t}(r.a.Component),C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={allPokemons:[],userPokemon:"",detailPokemons:[],limit:24},e.handleSuggestedName=e.handleSuggestedName.bind(Object(m.a)(e)),e.handleAutoSearch=e.handleAutoSearch.bind(Object(m.a)(e)),e.renderExploreList=e.renderExploreList.bind(Object(m.a)(e)),e.renderDetail=e.renderDetail.bind(Object(m.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleSuggestedName",value:function(e){this.setState({userPokemon:e.target.dataset.id})}},{key:"formatPokemonData",value:function(e){return e.map((function(e){var t=e.types.map((function(e){return e.type.name}));return{id:e.id,name:e.name,frontImage:e.sprites.front_default||"https://via.placeholder.com/100.jpg?".concat(e.name),shinyImage:e.sprites.front_shiny||"https://via.placeholder.com/100.jpg?".concat(e.name),types:t}}))}},{key:"handleSearch",value:function(e){e.preventDefault(),console.log("Enviar formulario")}},{key:"handleAutoSearch",value:function(e){var t=this,n=this.state,a=n.allPokemons,r=n.limit;this.setState({userPokemon:e.target.value.toLowerCase()});var o=a.filter((function(t){return t.name.includes(e.target.value.toLowerCase())}));k(o.slice(0,r)).then((function(e){return t.formatPokemonData(e)})).then((function(e){return t.setState({detailPokemons:e},(function(){return console.log(t.state)}))}))}},{key:"componentDidUpdate",value:function(){var e=this.state.detailPokemons;return this.state.detailPokemons!==e}},{key:"componentDidMount",value:function(){var e=this;d().then((function(e){return Promise.all(e)})).then((function(t){return e.setState({allPokemons:t}),t})).then((function(t){var n=t.slice(0,e.state.limit);k(n).then((function(t){return e.formatPokemonData(t)})).then((function(t){return e.setState({detailPokemons:t})}))}))}},{key:"renderExploreList",value:function(){var e=this.state.detailPokemons;return r.a.createElement(g,{pokemons:e})}},{key:"renderDetail",value:function(e){var t=e.match.params.id;return r.a.createElement(A,{pokeID:t})}},{key:"render",value:function(){var e=this.state,t=e.allPokemons,n=e.userPokemon;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(_.b,{to:"/"},r.a.createElement("h1",{className:"poke__title"},"Pok\xe9dex"))),r.a.createElement("div",{className:"poke__main_wrapper"},r.a.createElement(E,{handleSearch:this.handleSearch,handleSuggestedName:this.handleSuggestedName,handleAutoSearch:this.handleAutoSearch,allPokemonsNames:t.map((function(e){return e.name})),userQuery:n}),r.a.createElement("section",{className:"poke__main"},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:this.renderExploreList}),r.a.createElement(b.a,{path:"/info/:id",render:this.renderDetail})))))}}]),t}(r.a.Component);s.a.render(r.a.createElement(_.a,null," ",r.a.createElement(C,null)," "),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.b4c46db5.chunk.js.map