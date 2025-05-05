import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Star, StarOff } from "lucide-react";
import { motion } from "framer-motion";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import icon5 from "./assets/icon5.png";
// 🧬 Dados dos personagens
const personagens = [
  {
    id: "1",
    nome: "Emi Hayashi - Militar",
    foto: icon1,
    biografia:
      "Yuji, japonês de 37 anos, é um jornalista muito bom, premiado diversas vezes, em uma de suas matérias ele teve contato com o paranormal onde seu câmera Man morreu, porém ele sobreviveu e foi recrutado pela Ordo Realitas, com o passar do tempo ele ganhou a confiança do Senhor Veríssimo e passou a ser considerado uma espécie de filho por ele, herdando assim a sua jaqueta. Desde então ele faz missões para a Ordo Realitas no Japão com os agentes Emi e Paul..",
    bons: [
      { habilidade: "Luta", estrelas: 5 },
      { habilidade: "Agilidade", estrelas: 5 },
      { habilidade: "Força", estrelas: 5 },
    ],
    ruins: [
      { habilidade: "Investigação", estrelas: 1 },
      { habilidade: "Tecnologia", estrelas: 1 },
    ],
  },
  {
    id: "2",
    nome: "Yuji Hisaka - Jornalista",
    foto: icon2,
    biografia:
      "Yuji, japonês de 37 anos, é um jornalista muito bom, premiado diversas vezes, em uma de suas matérias ele teve contato com o paranormal onde seu câmera Man morreu, porém ele sobreviveu e foi recrutado pela Ordo Realitas, com o passar do tempo ele ganhou a confiança do Senhor Veríssimo e passou a ser considerado uma espécie de filho por ele, herdando assim a sua jaqueta. Desde então ele faz missões para a Ordo Realitas no Japão com os agentes Emi e Paul.",
    bons: [
      { habilidade: "Socialização", estrelas: 5 },
      { habilidade: "Ocultismo", estrelas: 4 },
      { habilidade: "Pontaria", estrelas: 3 },
    ],
    ruins: [
      { habilidade: "Atletismo", estrelas: 2 },
      { habilidade: "Acobracia", estrelas: 2 },
    ],
  },
  {
    id: "3",
    nome: "Akari Takamura - Militar",
    foto: icon3,
    biografia:
      "Akari é uma ex-militar das Forças de Autodefesa do Japão, especializada em missões de infiltração e neutralização de ameaças biológicas. Após uma operação fracassada nos arredores de Hiroshima, onde sua unidade encontrou uma anomalia que deformava a realidade, ela começou a ter visões recorrentes de figuras humanas queimadas e sombras que sussurram em línguas extintas. O trauma não a quebrou — despertou nela uma fúria silenciosa e um senso de dever maior: impedir que o paranormal consuma o mundo. Ela foi recrutada pela Ordo Realitas após eliminar um cultista que invocava horrores em uma cidade do Japão. Desde então, ela atua como um dos braços armados da Ordem no Japão, enfrentando o oculto.",
    bons: [
      { habilidade: "Luta", estrelas: 5 },
      { habilidade: "Cura", estrelas: 4 },
      { habilidade: "Força", estrelas: 5 },
    ],
    ruins: [
      { habilidade: "Investigação", estrelas: 1 },
      { habilidade: "Tecnologia", estrelas: 1 },
    ],
  },
  {
    id: "4",
    nome: "Paul Goldberg - Religioso",
    foto: icon4,
    biografia:
      "Ele começou a pesquisar a origem de seus pais, entretanto não encontrava nada, era como se quisessem esconder a origem deles e a vida que eles tinham, depois de bastante esforço ele encontrou um comerciante dos suburbios do Japão que poderia ter informações sobre seus pais, indo lá, viu que ele não tinha especificamente informações dos seus pais, mas sim de toda ordem que os envolvia. Estudando sobre essa ordem viu que existia um outro lado, com seres monstruosos que jamais poderia imaginar, mas não sentiu medo, pelo contrário, se encantou por esse outro lado. Decidido a estudar esse outro lado, vagou pelos suburbios do Japão atrás de estudar esse outro lado, mas não parecia suficiente decidiu então ir para o mesmo caminho que seus pais trilharam, mas que também os matou. Até que em 09/04/2045 entrou para a ordem, e logo depois recebeu sua primeira missão.",
    bons: [
      { habilidade: "Ocultismo", estrelas: 5 },
      { habilidade: "Investigação", estrelas: 4 },
      { habilidade: "Inteligencia", estrelas: 5 },
    ],
    ruins: [
      { habilidade: "Combate", estrelas: 2 },
      { habilidade: "Enganar", estrelas: 2 },
    ],
  },
  {
    id: "5",
    nome: "Marcos Gomes - Acadêmico",
    foto: icon5,
    biografia:
      "Durante sua infância, Marcos era uma criança feliz, crescendo em um lar amoroso com seus dois pais e sua irmã mais nova. A vida parecia normal e serena, mas seus pais guardavam um segredo sombrio: eram caçadores de criaturas paranormais. Essa perigosa ocupação era cuidadosamente escondida dos filhos, preservando sua inocência e segurança.",
    bons: [
      { habilidade: "Ocultismo", estrelas: 5 },
      { habilidade: "Investigação", estrelas: 4 },
      { habilidade: "Inteligencia", estrelas: 5 },
    ],
    ruins: [
      { habilidade: "Combate", estrelas: 2 },
      { habilidade: "Agilidade", estrelas: 2 },
    ],
  },
];

// ⭐ Componente de estrelas
function Estrelas({ quantidade }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) =>
        i < quantidade ? (
          <Star key={i} className="w-4 h-4 text-green-400 fill-green-400" />
        ) : (
          <StarOff key={i} className="w-4 h-4 text-zinc-600" />
        )
      )}
    </div>
  );
}

// 🧪 Card detalhado do agente
function AgenteCard({ agente }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col md:flex-row gap-12 items-start text-green-300 font-mono px-6 md:px-20 py-10"
    >
      {/* 📸 Foto */}
      <div className="w-full md:w-1/3 max-w-md flex-shrink-0">
        <img
          src={agente.foto}
          alt={agente.nome}
          className="w-full h-auto rounded-3xl border-4 border-green-500 shadow-[0_0_40px_#00ff7f66]"
        />
      </div>

      {/* 🧾 Info */}
      <div className="flex-1 space-y-8">
        <h2 className="text-5xl md:text-6xl font-bold text-green-200 uppercase tracking-widest">
          {agente.nome}
        </h2>

        <p className="text-green-400 text-lg leading-relaxed italic break-words w-full">
          {agente.biografia ||
            "Dados confidenciais registrados nos arquivos da Ordo Realitatis."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ⭐ Fortes */}
          <div>
            <h3 className="text-2xl font-semibold text-green-400 mb-4 border-b border-green-700 pb-2">
              Pontos Fortes
            </h3>
            {agente.bons
              .filter((item) => item.habilidade)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center mb-3"
                >
                  <span
                    className={`text-lg ${
                      item.estrelas === 5 ? "text-green-200 font-bold" : ""
                    }`}
                  >
                    {item.habilidade}
                  </span>
                  <Estrelas quantidade={item.estrelas} />
                </div>
              ))}
          </div>

          {/* ⚠️ Fracos */}
          <div>
            <h3 className="text-2xl font-semibold text-red-400 mb-4 border-b border-red-700 pb-2">
              Fraquezas
            </h3>
            {agente.ruins
              .filter((item) => item.habilidade)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center mb-3"
                >
                  <span className="text-red-400 text-lg">
                    {item.habilidade}
                  </span>
                  <Estrelas quantidade={item.estrelas} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// 🌐 Página individual do personagem
function PersonagemPage() {
  const { id } = useParams();
  const personagem = personagens.find((p) => p.id === id);

  if (!personagem)
    return (
      <div className="h-screen bg-zinc-950 text-red-500 flex items-center justify-center font-mono text-xl">
        Agente não encontrado.
        <Link to="/" className="ml-2 underline text-green-400">
          Voltar
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-zinc-950 text-green-400 p-6 overflow-hidden">
      <Link to="/" className="text-green-500 underline mb-6 inline-block">
        ← Voltar
      </Link>
      <AgenteCard agente={personagem} />
    </div>
  );
}

// 🏠 Página Inicial
function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-green-300 font-mono p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-widest">
          ORDO REALITATIS
        </h1>
        <p className="text-green-500 mt-2 text-sm md:text-base uppercase">
          Arquivos confidenciais da OSI — Nível 7
        </p>
      </header>

      <main className="grid gap-8 max-w-6xl mx-auto">
        {personagens.map((p) => (
          <Link
            to={`/personagem/${p.id}`}
            key={p.id}
            className="group bg-zinc-900 border border-green-700 rounded-xl p-4 hover:bg-zinc-800 transition shadow-md hover:shadow-green-500/10"
          >
            <div className="flex items-center gap-4">
              <img
                src={p.foto}
                alt={p.nome}
                className="w-20 h-full object-cover rounded-lg border border-green-500"
              />
              <div>
                <h2 className="text-2xl font-bold group-hover:text-green-300 transition">
                  Agente {p.nome}
                </h2>
                <p className="text-sm text-green-500">
                  Clique para acessar o dossiê
                </p>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}

// 🌐 App Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personagem/:id" element={<PersonagemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
