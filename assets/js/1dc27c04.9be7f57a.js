"use strict";(self.webpackChunkstardust_website=self.webpackChunkstardust_website||[]).push([[881],{3905:function(A,j,I){I.d(j,{Zo:function(){return n},kt:function(){return s}});var e=I(7294);function O(A,j,I){return j in A?Object.defineProperty(A,j,{value:I,enumerable:!0,configurable:!0,writable:!0}):A[j]=I,A}function M(A,j){var I=Object.keys(A);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(A);j&&(e=e.filter((function(j){return Object.getOwnPropertyDescriptor(A,j).enumerable}))),I.push.apply(I,e)}return I}function B(A){for(var j=1;j<arguments.length;j++){var I=null!=arguments[j]?arguments[j]:{};j%2?M(Object(I),!0).forEach((function(j){O(A,j,I[j])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(I)):M(Object(I)).forEach((function(j){Object.defineProperty(A,j,Object.getOwnPropertyDescriptor(I,j))}))}return A}function t(A,j){if(null==A)return{};var I,e,O=function(A,j){if(null==A)return{};var I,e,O={},M=Object.keys(A);for(e=0;e<M.length;e++)I=M[e],j.indexOf(I)>=0||(O[I]=A[I]);return O}(A,j);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(A);for(e=0;e<M.length;e++)I=M[e],j.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(A,I)&&(O[I]=A[I])}return O}var Y=e.createContext({}),r=function(A){var j=e.useContext(Y),I=j;return A&&(I="function"==typeof A?A(j):B(B({},j),A)),I},n=function(A){var j=r(A.components);return e.createElement(Y.Provider,{value:j},A.children)},a={inlineCode:"code",wrapper:function(A){var j=A.children;return e.createElement(e.Fragment,{},j)}},u=e.forwardRef((function(A,j){var I=A.components,O=A.mdxType,M=A.originalType,Y=A.parentName,n=t(A,["components","mdxType","originalType","parentName"]),u=r(I),s=O,i=u["".concat(Y,".").concat(s)]||u[s]||a[s]||M;return I?e.createElement(i,B(B({ref:j},n),{},{components:I})):e.createElement(i,B({ref:j},n))}));function s(A,j){var I=arguments,O=j&&j.mdxType;if("string"==typeof A||O){var M=I.length,B=new Array(M);B[0]=u;var t={};for(var Y in j)hasOwnProperty.call(j,Y)&&(t[Y]=j[Y]);t.originalType=A,t.mdxType="string"==typeof A?A:O,B[1]=t;for(var r=2;r<M;r++)B[r]=I[r];return e.createElement.apply(null,B)}return e.createElement.apply(null,I)}u.displayName="MDXCreateElement"},7514:function(A,j,I){I.r(j),I.d(j,{frontMatter:function(){return t},contentTitle:function(){return Y},metadata:function(){return r},toc:function(){return n},default:function(){return u}});var e=I(7462),O=I(3366),M=(I(7294),I(3905)),B=["components"],t={sidebar_position:3},Y="Use",r={unversionedId:"getting-started/run",id:"getting-started/run",isDocsHomePage:!1,title:"Use",description:"Server",source:"@site/docs/getting-started/run.md",sourceDirName:"getting-started",slug:"/getting-started/run",permalink:"/docs/getting-started/run",editUrl:"https://github.com/StardustXR/website/edit/main/docs/getting-started/run.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting-started/install"},next:{title:"Technical Overview",permalink:"/docs/getting-started/tech-overview"}},n=[{value:"Server",id:"server",children:[{value:"Images",id:"images",children:[]},{value:"Help screen",id:"help-screen",children:[]}]}],a={toc:n};function u(A){var j=A.components,t=(0,O.Z)(A,B);return(0,M.kt)("wrapper",(0,e.Z)({},a,t,{components:j,mdxType:"MDXLayout"}),(0,M.kt)("h1",{id:"use"},"Use"),(0,M.kt)("h2",{id:"server"},"Server"),(0,M.kt)("p",null,"The server has a flatscreen mode where it pops open a window for you to interact on a 2D screen and XR mode where it becomes an OpenXR client."),(0,M.kt)("h3",{id:"images"},"Images"),(0,M.kt)("p",null,"Flatscreen mode upon initial startup:\n",(0,M.kt)("img",{alt:"A pitch black window representing Stardust in flatscreen mode",src:I(544).Z})),(0,M.kt)("p",null,"XR mode when OpenXR somehow fails:\n",(0,M.kt)("img",{alt:"A black void representing Stardust in XR mode with a hand skeleton in the middle",src:I(8488).Z})),(0,M.kt)("p",null,"Flatscreen mode when ",(0,M.kt)("inlineCode",{parentName:"p"},"~/.config/stardust/skytex.hdr")," is ",(0,M.kt)("a",{parentName:"p",href:"https://polyhaven.com/a/zhengyang_gate"},"Zhengyang Gate"),":\n",(0,M.kt)("img",{alt:"A pitch black window representing Stardust in flatscreen mode",src:I(6515).Z})),(0,M.kt)("h3",{id:"help-screen"},"Help screen"),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre"},"Stardust XR\nUsage: stardustxr [OPTIONS]\n\nOptions:\n  -h,--help                   Print this help message and exit\n  -F,--flatscreen             Run Stardust in flatscreen mode\n  --field-debug               Draw translucent meshes around fields\n")))}u.isMDXComponent=!0},544:function(A,j){j.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABRwAAAMICAYAAACq9SnGAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV/TSkupONhBxCFDdbIgKsVRq1CECqFWaNXB5NIvaNKSpLg4Cq4FBz8Wqw4uzro6uAqC4AeIm5uToouU+L+k0CLGg+N+vLv3uHsHCK0q08zABKDplpFJJcVcflUMviKECMJIICAzsz4nSWl4jq97+Ph6F+dZ3uf+HP1qwWSATySeZXXDIt4gTmxadc77xFFWllXic+Jxgy5I/Mh1xeU3ziWHBZ4ZNbKZeeIosVjqYaWHWdnQiKeJY6qmU76Qc1nlvMVZqzZY5578hZGCvrLMdZojSGERS5AgQkEDFVRhIU6rToqJDO0nPfzDjl8il0KuChg5FlCDBtnxg//B727N4tSkmxRJAn0vtv0xCgR3gXbTtr+Pbbt9AvifgSu966+1gJlP0ptdLXYEDGwDF9ddTdkDLneAoae6bMiO5KcpFIvA+xl9Ux4YvAXCa25vnX2cPgBZ6ip9AxwcAmMlyl73eHeot7d/z3T6+wFIunKWEmSFnwAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+UIDAo2Ho5//SgAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAgAElEQVR42uzdfZQddX3H8e/dXQIJDwtJjCQk5EEh0Yg8CGKL2tpiRS0Q2qpQQSzW+li1FC2CKKBYpbYoWEGoAta21taSEKKtaGvbAAbw0AItsEmpQtiQZEOEPLLJ7u0fmyybzW5I4icY6Ot1zpw7s3fuzOzu/HHP+/5mbhUAAAAAAAAAAAAAAAAAAAAAAAAAAE+n8XN+PQAAAACw+2nu7AsbwfXFRwAAAAB49mru5HNbaPwM6zV24HkAAAAAYPfSfJqfNbfzNVvYnijYGGa5McTzjZ3YPgAAAADwzGpuY7k5zONwr93C0wXBoWJiYxvzQ21TdAQAAACA3cdwAXHg43Dzw22jX9t2HsTgwLitaeD6g+cBAAAAgJ+v4UYzDjUNXK9RP+Ml1UONXGxUVcugx8HzNWgeAAAAANj9DDWSsXeI+d4aeqTjkPFxuBGOQ10WvTkstlRVyz7t7SceNOngy9r22GO8/w0AAAAAPDds3LBhySMPP/Sh1Y8/flP1xcYa8DgwMg454nG4UYhDXULdMnCacsihHWvXrRvf29vrvwAAAAAAzxEtLS01auTIzh8v7JhefaFx4DT4cuutguP23MNxqOjYum79erERAAAAAJ5jent7a9369ROqqnXAjzffw3Hz/LCGCo7DfQP15vs0tlZVa09Pj78+AAAAADwHbWp/m4Njs/ra4OaRjQPD41aXVbdsx/aHHOHozw4AAAAAz2mt9VQPHNgIt+npgmOjBEcAAAAA+P9ouOC4zei4reDYGDTfMmgCAAAAAJ67BvfAwb1wSE/3pTGNGn6UIwAAAACwG9h/xIiaNWFivXz0mJqw16iqqnpk3dq6feWKmtO5uH7a3b0zmx1udONW920caLjg2BhiWXAEAAAAgN3Mq8aOq7MPnVEjW7dMfS/YZ996wT771qwJE+tPO+6v+V3LdnTTT3f/xiHDY9t2bLgxaCeboyMAAM+A9vb96sy3n1kve9lRNXKvkXXvvffW1VdfU48+unSX7O/0M95ab37zm+qb3/y7+vpf/tUu2cdpp51ap/32qdXV1VXvOOud1Ww266PnnVu/8AuvqAULbq/rr/tafenKL/avv37d+vqfBx+sa796bXV0LHRSAABs8qqx4+q8F71kmzdVHNnaVue/6CV1yX337mh0HKoF/sxfGjNwQ40h5gEA2MXO/ei5dfzxv1rNZrMef+LxOvqYo+uiiy+s1ra+7/H7m2/8dd04d3YdcMABu9Vxb+u45s37dnV3d9fYsWPryCOPqPb2/erlxxxTVVWzZ8/pX6/ZbFbHAx3108d/WjNnvrguuvjC2n///Z0UAADVdxn12YfO6A91a3p6tlpn7caNVdUX884+ZEa17zFiR3axU02wZTs3ONQOAADYxcaNe17NnPni6u7urve+9/31nne/r7q6VtT48ePrJTNn/szbb2n5+Vy48sQTT9T3v//PVVX12tceX6/5lddUa1trLVq4qP7r3v/qX+/JJ5+sc875SL3r995TixYuqr333ruOPvplTgwA4FmjtbW1TjppVp1z9ofrnLM/XG9765mxbc+aMHGLy6jfctu/1ecX3le9zWb1Npt1xcIH6rd++O/9z49qa6uTJxy0I7sYLjZuMz627MCGh1sGAGCXvUHtewPZaDRq1MhRtXHjxrr0s5fWJy/+VC1e/Eh98c8vr7337rsp+PVfu7bGjx9fVVVHHXVkfeHyy+rvv/XN+sLll9XMl/TFycOPOLxunDu7PnvpZ+ryKz5f7/jds6qq6vWvP6Guu/6rdfU1V9UhhxzSv/9XvOLYunHu7Lrwok9UVdWZZ76tbpw7u04/461VVXX88b9a1/zFl+vv/v5v648/8+maOnVKVdWwxzXQnNk3VrPZrGNfcWy94Q2vr6qqGwaMbhyo2WzWTx56qKqqxowZ48QAAJ4l7+Vaq6enp+bNm1sdi/puCzPu+eNi23/56LFbLL9l0pT6x0eX1GUL76/PL7y/5j36SP3mQZO2WOfYQa/ZDjvcBnf2I23REQDgGfDoo49WR8fC2mOPPerzX/izmnXKyfXjH/+k7rjjzlqxYkV973vfrw0bNlRV1Xe+/Y+1evXqGjt2TJ13/kdr4sSJddddd9WUKVPq3HM/Uq2trf3bfdGLZtSkSZNqw4YN9fznP7/e/Z531ejRo+uJJ1bVSw87bLuObfLkg+v3P/D+GjFiRN1yy601c+aL62MXnF9VNeRxDdbZ2VkLFtxebW1tdeCBB9by5cvr1ltuHfpNa0tLTZ06taqqli5b6sQAAHbK5lGGg6ddodFo1Mknzqq2TdFx7tw5df/990f3MX6vvbZYPmPy1Dp10uS6eemS+u7SJfWbBx1c75j6wi3WmTBy5A79GjtzXC07uHH3bwQAeAY1m8265FOfrnvuubf222+/Ouus36lr/uLL/SMWZ98wp7q7+8LeN77xt7Vq1aoaMWLP+ta3/qGu/NJV9elLPlPLly2v9vb2et645/Vvt6trRb3tjDPrumuvr6OOOrIajUbdMv+WOucPP1w3zZu3Xcc2ceLEajQa9dBPHqorrvhiXXPNV+qmufNqxIgRQx7XUG679bb++TvuuLN6Bt13aM8996zPfe7Suvrqq2ratKnV1dVVC354uxMDAHhWmDZtWp20KTo2m82a952b4tFxoN5ms1Y82d2/vPzJ9dXTbA56f7nDm93h2yy2+dcDAOzeVq5cWeef97E6/PCX1ulnvLWmT59e5513br3zne+qtWvWbrV+Z2dnrXxsZb35LW+q9//++/rv07jniKduEL58+bJatapv1OEBo/u+1OWRzs6q6rtv4va4++57asWKFXX4EYfXNdd8uW6cM7fmzr2pNm66Mfn2eM1rfrl//rjjfrG++pVrq7v7qTfJjUajDp1+aP/yJy/+VK1bt85JAQDslM/92Z884/ucNm1aveGNJ9a8eXOrp6envvNP345te8n6dTVt7337l7+w6IG6edmSOn1y35UhX//J/9ZeC9vq7ENnbPGaXa3FqQYAsPuaPn16nfbbp9Zxrzyu/vM/764/+shHa9nSZbXvvvvWjBkzhnzNjBnT673ve081Go264IJPVFfXim3uo7Hpg+pm74593L1q1ar60Af/oGbfMKf22WefOusdv1Mf//jHtvv1U6ZMqSOOPKLWrl1bixYuqvb29vrlAQGyqmr9+vV10omz6sEHH6yqqhcHvigHAOCZ0Gw2a/myZVVVdegLD6k3vvHE/ns6pix4bMWg5a56+5QX1OkHT63TD55ab5/ygrp9ZdcW6/zwsa5d/rsb4QgAsBsbPfqAOu20U+vhhx6u2269rXp7e6t7Q98IwGZv76Y3s32Pra19nyVvHhF4113/UffcfU9t3Lhhm/tYsaLvjeqYMaOr6qkAWVW1bv36qqoaNarvC2D22mvP/ueOOeboOuyww2r+/Pl1ww2z68qr/ryOOPKIam9vr8cff3yr4xrslN+YVVVV8+ffUh0dC+v9h7ywZs06qW7+7s1brXvzd79X73r379UJJ7yu5t00z4kBADwrXP/163fp9ud0Lt7im6q/cewrt3j+1EmT69RJk/uX1/T01JzOxbv89zbCEQBgN3bnnT+qxYsX16SDJ9WXr76yrvji5TVx4sRauXJlPdDRUVVVXV19n1JfdPFFNX78+OrsXFJVVa985XH18U9cUAceeGDfG78BXxoz0F13/Uc1m8169S+9uj74oQ/UCa8/of+5hx96uHp7e2v69EPrs5d+ZovnWlpaa9YpJ9cHP/iBetObfqtGjhxZq1at6r9f4+DjGmjMmDH16le9qqqqvv+9f6758+dXd3d3TZw4sY455uitjvEHP/jX6u7ursmTD64ZM6Y7MQAAquqn3d31px331/Zcp9Ksqss6/rue2LBhlx+X4AgAsBvbsGFDnX/+BfWDf/lBjRq1d40b97y6++6768ILL+6/f+PXvvb1WrlyZe2/f3s1Go268447a+6Nc6vRaKn99tuvOh7oC5PjN4XHwZYuXVpXfumqWr16db30pYfVj370o/7nHnvssbruuutr9eo1NXr0AXXnnU89t2DBgvrqV66tkaNG1a+97rW1sGNhffLiT1XvppGXg49roBNP+vVqbWutJUuW1H333Vdr16ytBT9cUFVVp5wya6tjXLNmTd2y6RusTzjhdU4MAIBN5nctq0vuu7fWbuM+2mt6euqS++6p+V3Ln5Fjagzzs0b1xciWqmqtvkuv26pqxOZp7ISDFvmXAgAAAMDPX/seI+rkCQfVy0ePrYNG9t0O55F1a2vBY101p3PxTo1s7Op85IVV1T1g2rhp6qmq3k1Tc9PUT3AEAAAAALays8HRJdUAAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADEtO3sC7s6H/HXAwAAAAC2YIQjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIj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"},8488:function(A,j,I){j.Z=I.p+"assets/images/flatscreen_2-e6b8d0d87b94c10eaa4c054d0a8d0093.png"},6515:function(A,j,I){j.Z=I.p+"assets/images/flatscreen_3-32635eb512ffadfc0237c2417669a969.png"}}]);