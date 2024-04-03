const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();


async function main() {

//  let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire un (HOWTO) model gantt-chart pour projet de machine learning pour les IA et le domaine du développement Web la création de site web avec bootstrap et groq, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
    const dataSource = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css` rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'> javascript('<script src=`https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js` integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>')"

const chatCompletion = await groq.chat.completions.create({
  
    "messages": [
      {role: "system", content: "groq `/.package.Json`" },
      {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[brainstorming(session.timestamp)]"},
      {role: "assistant",name:"[📔.codex]", content:"phase[01-1]:[RUN]:[ini dataSource)]"},
      {role: "system",content: dataSource},
      {role: "assistant",name:"[📔.codex]", content:"phase[02]:[RUN]:[création d'un tutoriel étape par étape sur la création d'un site Web avec la technologie groq traduit en lang:Fr. français]"},
      {role: "assistant",name:"[📔.codex]", content:"initialisation du répertoire Bootstrap de référence ./Bstrap link CDN {a hrel src/css `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css` rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'> javascript('<script src=`https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js` integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>')}"},
      {role: "system", content: "" },
      
      {role: "assistant",name:"[📔.codex]", content:"phase[03]:[RUN]:[dial:conversation(message/response)entre(user/assistant))]"},
      {role: "user",name:"[🌴.Groq]", content:  "borderChars_{topLeft: '╔',topRight: '╗',bottomLeft: '╚',bottomRight: '╝',horizontal: '═',vertical: '║',intersectionLeft: '╠',intersectionRight: '╣',intersectionTop: '╦',intersectionBottom: '╩',intersectionCross: '╬',"},
      {role: "user",name:"[🌴.Groq]", content: "groq`[📔.codex]`+`BorderChars`framWork.response" },
      {role: "assistant",name:"[💬.cloud]", content:"[start]:Makefile Trainning mode}"},
      {role: "user",name:"[🌴.Groq]", content: "`groq`" },

      
      {role: "assistant",name:"[📔.codex]", content: "création d'un modèle de page avec groq optimisé avec bootstrap CDN" },
      {role: "system", content: "groq exemple.html " },
      {role: "system", content: "groq exemple.css" },
  //  {
  //    "role": "system",
  //    "content": "[zira]",
  //  },
  //  {
  //    "role": "user",
  //    "content": "[content]:template.response",
  //  },
  //  {
  //    "role": "assistant",
  //    "content": "groq response",
  //  },
  //  {role: "assistant",name:"[📔.codex]", content:"phase[01]:[END]:[brainstorming(session.timestamp)]"},
  //  {role: "system",name:"[📔.codex]", content:"`systemContent` genetation de la documention et traduction de la documentation en lang:Fr, Français:stp!"},
  //  {role: "system",name:"[🌌.systemDream]", content:"groq"},
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.7,
    max_tokens: 4096,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "data/codex_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();