const showc=()=>{
    document.getElementById('c').style="display:block"
}
const hidec=()=>{
    document.getElementById('c').style="display:none"
}
const showcpp=()=>{
    document.getElementById('cpp').style="display:block"
}
const hidecpp=()=>{
    document.getElementById('cpp').style="display:none"
}
const showjs=()=>{
    document.getElementById('js').style="display:block"
}
const hidejs=()=>{
    document.getElementById('js').style="display:none"
}
const showpython=()=>{
    document.getElementById('python').style="display:block"
}
const hidepython=()=>{
    document.getElementById('python').style="display:none"
}
const showhtml=()=>{
    document.getElementById('html').style="display:block"
}
const hidehtml=()=>{
    document.getElementById('html').style="display:none"
}
const showcss=()=>{
    document.getElementById('css').style="display:block"
}
const hidecss=()=>{
    document.getElementById('css').style="display:none"
}
const showjavascript=()=>{
    document.getElementById('JavaScript').style="display:block"
}
const hidejavascript=()=>{
    document.getElementById('JavaScript').style="display:none"
}
const showreact=()=>{
    document.getElementById('react').style="display:block"
}
const hidereact=()=>{
    document.getElementById('react').style="display:none"
}
const showtailwind=()=>{
    document.getElementById('tailwind').style="display:block"
}
const hidetailwind=()=>{
    document.getElementById('tailwind').style="display:none"
}
const showbootstrap=()=>{
    document.getElementById('bootstrap').style="display:block"
}
const hidebootstrap=()=>{
    document.getElementById('bootstrap').style="display:none"
}
const showsaas=()=>{
    document.getElementById('saas').style="display:block"
}
const hidesaas=()=>{
    document.getElementById('saas').style="display:none"
}
const shownode=()=>{
    document.getElementById('node').style="display:block"
}
const hidenode=()=>{
    document.getElementById('node').style="display:none"
}
const showexpress=()=>{
    document.getElementById('express').style="display:block"
}
const hideexpress=()=>{
    document.getElementById('express').style="display:none"
}
const showfirebase=()=>{
    document.getElementById('firebase').style="display:block"
}
const hidefirebase=()=>{
    document.getElementById('firebase').style="display:none"
}
const showopencv=()=>{
    document.getElementById('opencv').style="display:block"
}
const hideopencv=()=>{
    document.getElementById('opencv').style="display:none"
}
const showmysql=()=>{
    document.getElementById('mysql').style="display:block"
}
const hidemysql=()=>{
    document.getElementById('mysql').style="display:none"
}
const showgit=()=>{
    document.getElementById('git').style="display:block"
}
const hidegit=()=>{
    document.getElementById('git').style="display:none"
}
const showgithub=()=>{
    document.getElementById('github').style="display:block"
}
const hidegithub=()=>{
    document.getElementById('github').style="display:none"
}
const shownetlify=()=>{
    document.getElementById('netlify').style="display:block"
}
const hidenetlify=()=>{
    document.getElementById('netlify').style="display:none"
}
const shownpm=()=>{
    document.getElementById('npm').style="display:block"
}
const hidenpm=()=>{
    document.getElementById('npm').style="display:none"
}
const showvim=()=>{
    document.getElementById('vim').style="display:block"
}
const hidevim=()=>{
    document.getElementById('vim').style="display:none"
}
const showvscode=()=>{
    document.getElementById('vscode').style="display:block"
}
const hidevscode=()=>{
    document.getElementById('vscode').style="display:none"
}
const runanimation=()=>{
   card= document.getElementsByClassName('card')
   card.style=
    {
    "animation-duration": "3s",
    "animation-iteration-count":"infinite",
    "animation-name": "float"
    }
   
}
const sr=ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2500,
    delay:400,
})
console.log(sr)
sr.reveal(`.header`)
sr.reveal(`.header`,{delay:400})
sr.reveal(`.about`,{delay:400})
sr.reveal(`.skills`,{delay:400})
sr.reveal(`.skill-icon`,{delay:400})
sr.reveal(`.main-of-project`,{delay:400})
sr.reveal(`.contact-me`,{delay:200})
sr.reveal(`.social-icons`,{delay:200})