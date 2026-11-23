/* @ds-bundle: {"format": 4, "namespace": "Boleia", "components": [{"name": "Button"}, {"name": "IconButton"}, {"name": "Link"}, {"name": "TextField"}, {"name": "LocationField"}, {"name": "FieldButton"}, {"name": "Checkbox"}, {"name": "LanguageOption"}, {"name": "TripSearchCard"}, {"name": "RouteCard"}, {"name": "EmptyState"}, {"name": "SectionHeader"}, {"name": "ResultsBar"}, {"name": "GreetingHeader"}, {"name": "Avatar"}, {"name": "BottomNav"}, {"name": "PageIndicator"}, {"name": "Toast"}, {"name": "OnboardingSlide"}, {"name": "BrandLockup"}, {"name": "Icon"}]} */
(function(){
var React=window.React, h=React.createElement;
var ICONS={"house":[["path",{"d":"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{"d":"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]],"map-pin":[["path",{"d":"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{"cx":"12","cy":"10","r":"3"}]],"user":[["path",{"d":"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{"cx":"12","cy":"7","r":"4"}]],"bell":[["path",{"d":"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{"d":"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]],"navigation-2":[["polygon",{"points":"12 2 19 21 12 17 5 21 12 2"}]],"calendar":[["path",{"d":"M8 2v3"}],["path",{"d":"M16 2v3"}],["rect",{"x":"3","y":"3","width":"18","height":"18","rx":"2"}],["path",{"d":"M3 9h18"}]],"users":[["path",{"d":"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{"d":"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{"d":"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{"cx":"9","cy":"7","r":"4"}]],"search":[["path",{"d":"m21 21-4.34-4.34"}],["circle",{"cx":"11","cy":"11","r":"8"}]],"arrow-left":[["path",{"d":"m12 19-7-7 7-7"}],["path",{"d":"M19 12H5"}]],"eye":[["path",{"d":"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{"cx":"12","cy":"12","r":"3"}]],"eye-off":[["path",{"d":"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{"d":"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{"d":"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{"d":"m2 2 20 20"}]],"funnel":[["path",{"d":"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]],"check":[["path",{"d":"M20 6 9 17l-5-5"}]],"chevron-right":[["path",{"d":"m9 18 6-6-6-6"}]],"message-circle":[["path",{"d":"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]]};
function cx(){return Array.prototype.filter.call(arguments,Boolean).join(' ');}
function Icon(p){var size=p.size||20, d=ICONS[p.name]||[];
 return h('svg',{xmlns:'http://www.w3.org/2000/svg',width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:p.color||'currentColor',strokeWidth:p.strokeWidth||2,strokeLinecap:'round',strokeLinejoin:'round','aria-hidden':p.label?undefined:'true','aria-label':p.label,role:p.label?'img':undefined,className:p.className},
  d.map(function(e,i){var a={key:i};for(var k in e[1]){a[k.replace(/-([a-z])/g,function(m,c){return c.toUpperCase();})]=e[1][k];}return h(e[0],a);}));}
function Button(p){var v=p.variant||'primary', shape=p.shape||'rounded';
 return h('button',{type:p.type||'button',className:cx('bl-btn','bl-btn-'+v,'bl-btn-'+shape,p.fullWidth&&'bl-full',p.className),onClick:p.onClick,disabled:p.disabled},
  p.icon?h(Icon,{name:p.icon,size:18}):null, h('span',null,p.children));}
function IconButton(p){return h('button',{type:'button',className:'bl-iconbtn','aria-label':p.label,onClick:p.onClick},h(Icon,{name:p.icon||'arrow-left',size:20}));}
function Link(p){return h('a',{className:'bl-link label',href:p.href||'#',onClick:p.onClick},p.children);}
function TextField(p){var s=React.useState(false), shown=s[0], set=s[1]; var id=p.id||('f-'+(p.label||'x').replace(/\W/g,''));
 var pw=p.type==='password';
 return h('div',{className:'bl-field'},
  h('label',{className:'label bl-field-label',htmlFor:id},p.label),
  h('div',{className:'bl-input-wrap'},
   h('input',{id:id,className:'body bl-input',type:pw&&!shown?'password':(pw?'text':(p.type||'text')),placeholder:p.placeholder,defaultValue:p.value}),
   pw?h('button',{type:'button',className:'bl-input-toggle','aria-label':shown?'Ocultar palavra-passe':'Mostrar palavra-passe',onClick:function(){set(!shown);}},h(Icon,{name:shown?'eye':'eye-off',size:20})):null));}
function LocationField(p){return h('button',{type:'button',className:'bl-loc',onClick:p.onClick},
  h(Icon,{name:p.icon||'map-pin',size:20,className:'bl-accent'}),
  h('span',{className:'bl-loc-text'},h('span',{className:'overline bl-muted'},p.label),h('span',{className:'body'},p.value||p.placeholder)));}
function FieldButton(p){return h('button',{type:'button',className:cx('bl-fieldbtn',p.compact&&'bl-fieldbtn-compact'),onClick:p.onClick},
  h(Icon,{name:p.icon,size:20,className:'bl-accent'}),h('span',{className:cx('body',p.value?null:'bl-muted')},p.value||p.placeholder));}
function Checkbox(p){return h('span',{className:cx('bl-check',p.checked&&'bl-check-on'),role:'checkbox','aria-checked':!!p.checked},p.checked?h(Icon,{name:'check',size:16}):null);}
function LanguageOption(p){return h('button',{type:'button',role:'radio','aria-checked':!!p.selected,className:cx('bl-option',p.selected&&'bl-option-on'),onClick:p.onClick},
  h('img',{className:'bl-flag',src:p.flag,alt:''}),
  h('span',{className:'bl-option-text'},h('span',{className:'option-title'},p.title),h('span',{className:'body-sm bl-muted'},p.subtitle)),
  h(Checkbox,{checked:p.selected}));}
function TripSearchCard(p){return h('section',{className:'bl-search','aria-label':p.title||'Encontrar boleia'},
  h('h2',{className:'card-title bl-search-title'},p.title||'Encontrar boleia'),
  h(LocationField,{icon:'map-pin',label:'De',value:p.from,placeholder:'Selecionar origem'}),
  h(LocationField,{icon:'navigation-2',label:'Para',value:p.to,placeholder:'Selecionar destino'}),
  h('div',{className:'bl-search-row'},h(FieldButton,{icon:'calendar',placeholder:'Selecionar data',value:p.date}),h(FieldButton,{icon:'users',value:String(p.seats||1),compact:true})),
  h(Button,{shape:'pill',icon:'search',fullWidth:true,onClick:p.onSearch},'Pesquisar viagens'));}
function RouteCard(p){return h('button',{type:'button',className:'bl-route',onClick:p.onClick},
  h('span',{className:'bl-route-line label'},h('span',null,p.from),h(Icon,{name:'chevron-right',size:20,className:'bl-muted'}),h('span',null,p.to)),
  h('span',{className:'caption bl-muted'},p.hint||'Toque para usar esta rota'));}
function EmptyState(p){return h('div',{className:'bl-empty body bl-muted'},p.children);}
function SectionHeader(p){return h('div',{className:'bl-section'},h('h2',{className:'section'},p.title),p.action?h('a',{href:p.href||'#',className:'caption bl-subtle bl-plain'},p.action):null);}
function ResultsBar(p){return h('div',{className:'bl-results'},
  h('span',{className:'body-sm bl-subtle'},p.count+' viagens encontradas'),
  h('button',{type:'button',className:'bl-tool card-title',onClick:p.onMap},h(Icon,{name:'map-pin',size:18}),'Mapa de recolha'),
  h('button',{type:'button',className:'bl-tool bl-accent card-title',onClick:p.onFilter},h(Icon,{name:'funnel',size:18}),'Filtrar e ordenar'));}
function Avatar(p){return h('span',{className:'bl-avatar','aria-hidden':'true'},p.initials);}
function GreetingHeader(p){return h('header',{className:'bl-greet'},h(Avatar,{initials:p.initials}),
  h('span',{className:'bl-greet-text'},h('span',{className:'body-sm bl-subtle'},p.greeting||'Boa noite'),h('span',{className:'section'},p.name)),
  h('button',{type:'button',className:'bl-bell','aria-label':'Notificações'},h(Icon,{name:'bell',size:24})));}
var NAV=[['house','Início'],['map-pin','Viagens'],['message-circle','Mensagens'],['user','Perfil']];
function BottomNav(p){var a=p.active==null?0:p.active;return h('nav',{className:'bl-nav','aria-label':'Principal'},
  (p.items||NAV).map(function(it,i){return h('a',{key:i,href:'#',className:cx('bl-nav-item tab',i===a&&'bl-nav-on'),'aria-current':i===a?'page':undefined},h(Icon,{name:it[0],size:24}),h('span',null,it[1]));}));}
function PageIndicator(p){var n=p.count||3;var out=[];for(var i=0;i<n;i++)out.push(h('span',{key:i,className:cx('bl-dot',i===p.active&&'bl-dot-on')}));
 return h('div',{className:'bl-dots',role:'img','aria-label':'Página '+((p.active||0)+1)+' de '+n},out);}
function Toast(p){return h('div',{className:'bl-toast',role:'alert'},h('strong',{className:'body bl-toast-title'},p.title||'Erro'),h('span',{className:'body-sm bl-muted'},p.message));}
function OnboardingSlide(p){return h('section',{className:'bl-slide'},
  h('div',{className:'bl-slide-photo'},h('img',{src:p.image,alt:p.alt||''})),
  h('h1',{className:'display-onboarding bl-slide-title'},p.title),h('p',{className:'body bl-subtle bl-slide-body'},p.body));}
function BrandLockup(p){return h('span',{className:'bl-lockup'},h('img',{src:p.pinSrc,alt:'',width:30,height:36}),h('span',{className:'app-bar'},'Boleia'));}
var C={Button:Button,IconButton:IconButton,Link:Link,TextField:TextField,LocationField:LocationField,FieldButton:FieldButton,Checkbox:Checkbox,LanguageOption:LanguageOption,TripSearchCard:TripSearchCard,RouteCard:RouteCard,EmptyState:EmptyState,SectionHeader:SectionHeader,ResultsBar:ResultsBar,GreetingHeader:GreetingHeader,Avatar:Avatar,BottomNav:BottomNav,PageIndicator:PageIndicator,Toast:Toast,OnboardingSlide:OnboardingSlide,BrandLockup:BrandLockup,Icon:Icon};
window.Boleia=window.Boleia||{};for(var k in C)window.Boleia[k]=C[k];
})();
