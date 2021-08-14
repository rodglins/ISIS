function gotoPage(varItem)
{
  if (varItem != "null") {
	window.open(document.destaques.menu.value)
   }
   else {
   	alert("Selecione uma opção válida")
   }

}

/***********************************************
* AnyLink Drop Down Menu- © Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

var menu1=new Array()
menu1[0]='<a href="c_crianc.html">Criança e Adolescente</a>'
menu1[1]='<a href="c_dconsum.html">Direitos do Consumidor</a>'
menu1[2]='<a href="c_docum.html">Documentos (RG, CNH, Titulo de Eleitor,...)</a>'
menu1[3]='<a href="c_educ.html">Educação</a>'
menu1[4]='<a href="c_empr.html">Emprego e Renda</a>'
menu1[5]='<a href="c_pdef.html">Portadores de Deficiência</a>'
menu1[6]='<a href="c_saude.html">Saúde</a>'
menu1[7]='<a href="c_tidade.html">Terceira Idade</a>'

var menu2=new Array()
menu2[0]='<a href="l_doe.html">Diário Oficial do Estado</a>'
menu2[1]='<a href="l_leg02.html">Legislação Estadual</a>'
menu2[2]='<a href="l_leg03.html">Legislação Federal</a>'
menu2[3]='<a href="l_leg04.html">Legislação dos Municípios</a>'
menu2[4]='<a href="l_res.html">Resoluções, Portarias e Normas</a>'

var menu3=new Array()
menu3[0]='<a href="g_acessa.html">Acessa SP</a>'
menu3[1]='<a href="g_guia.html">Cidadão.SP - Serviços Públicos</a>'
menu3[2]='<a href="g_libras.html">Dicionário de Libras</a>'
menu3[3]='<a href="g_econ.html">Economia e Desenvolvimento</a>'
menu3[4]='<a href="g_lic.html">Licitações e Compras Públicas</a>'
menu3[5]='<a href="g_ouv.html">Ouvidorias do Governo</a>'
menu3[6]='<a href="g_poupatempo.html">Poupatempo</a>'

var menu4=new Array()
menu4[0]='<a href="t_bibl.html">Bibliotecas Digitais</a>'
menu4[1]='<a href="t_biblp.html">Bibliotecas Públicas</a>'
menu4[2]='<a href="t_cult.html">Cultura</a>'
menu4[3]='<a href="t_dic.html">Dicionários e Enciclopédias</a>'
menu4[4]='<a href="t_mapas.html">Mapas e Estatísticas</a>'
menu4[5]='<a href="t_meioamb.html">Meio Ambiente</a>'
menu4[6]='<a href="t_nneg.html">Novos Negócios</a>'
menu4[7]='<a href="t_pesq.html">Pesquisa Escolar</a>'
menu4[8]='<a href="t_trans.html">Transportes</a>'

var menu5=new Array()
menu5[0]='<a href="sp_geog.html">Aspectos Geográficos</a>'
menu5[1]='<a href="sp_folc.html">Folclore e Cultura</a>'
menu5[2]='<a href="sp_hist.html">História</a>'
//menu5[2]='<a href="#">Municípios Paulistas</a>'
menu5[3]='<a href="sp_simb.html">Símbolos Paulistas</a>'
menu5[4]='<a href="sp_turcap.html">Turismo (Capital)</a>'
menu5[5]='<a href="sp_tur.html">Turismo (Interior)</a>'


		
var menuwidth='165px' //default menu width
var menubgcolor='white'  //menu bgcolor
var disappeardelay=500  //menu disappear speed onMouseout (in miliseconds)
var hidemenu_onclick="yes" //hide menu when user clicks within menu?

/////No further editting needed

var ie4=document.all
var ns6=document.getElementById&&!document.all

if (ie4||ns6)
document.write('<div id="dropmenudiv" style="visibility:hidden;width:'+menuwidth+';background-color:'+menubgcolor+'" onMouseover="clearhidemenu()" onMouseout="dynamichide(event)"></div>')

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}


function showhide(obj, e, visible, hidden, menuwidth){
if (ie4||ns6)
dropmenuobj.style.left=dropmenuobj.style.top=-500
if (menuwidth!=""){
dropmenuobj.widthobj=dropmenuobj.style
dropmenuobj.widthobj.width=menuwidth
}
if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover")
obj.visibility=visible
else if (e.type=="click")
obj.visibility=hidden
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
var edgeoffset=0
if (whichedge=="rightedge"){
var windowedge=ie4 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth
}
else{
var topedge=ie4 && !window.opera? iecompattest().scrollTop : window.pageYOffset
var windowedge=ie4 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure){ //move up?
edgeoffset=dropmenuobj.contentmeasure+obj.offsetHeight
if ((dropmenuobj.y-topedge)<dropmenuobj.contentmeasure) //up no good either?
edgeoffset=dropmenuobj.y+obj.offsetHeight
}
}
return edgeoffset
}

function populatemenu(what){
if (ie4||ns6)
dropmenuobj.innerHTML=what.join("")
}


function dropdownmenu(obj, e, menucontents, menuwidth){
if (window.event) event.cancelBubble=true
else if (e.stopPropagation) e.stopPropagation()
clearhidemenu()
dropmenuobj=document.getElementById? document.getElementById("dropmenudiv") : dropmenudiv
populatemenu(menucontents)

if (ie4||ns6){
showhide(dropmenuobj.style, e, "visible", "hidden", menuwidth)
dropmenuobj.x=getposOffset(obj, "left")
dropmenuobj.y=getposOffset(obj, "top")
dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
}

return clickreturnvalue()
}

function clickreturnvalue(){
if (ie4||ns6) return false
else return true
}

function contains_ns6(a, b) {
while (b.parentNode)
if ((b = b.parentNode) == a)
return true;
return false;
}

function dynamichide(e){
if (ie4&&!dropmenuobj.contains(e.toElement))
delayhidemenu()
else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
delayhidemenu()
}

function hidemenu(e){
if (typeof dropmenuobj!="undefined"){
if (ie4||ns6)
dropmenuobj.style.visibility="hidden"
}
}

function delayhidemenu(){
if (ie4||ns6)
delayhide=setTimeout("hidemenu()",disappeardelay)
}

function clearhidemenu(){
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}

if (hidemenu_onclick=="yes")
document.onclick=hidemenu
