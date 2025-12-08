export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    label: string;
    category?: string; // Optional for compatibility with legacy mock data structure or just sync label/category
    image: string;
    content: string; // HTML enabled for now for simplicity
    discussionUrl?: string; // Optional link to specific discord channel/thread
}

export const blogPosts: BlogPost[] = [
    {
        title: "GDG Christmas Cup: 5v5 For Fun!",
        category: "Tornei",
        date: "06 Dic 2025",
        image: "/tournament-christmas.jpg", // Using uploaded image
        slug: "gdg-christmas-cup-2025",
        excerpt: "Festeggia con noi! Un torneo 5v5 gratuito e aperto a tutti per chiudere l'anno in bellezza.",
        author: "GDG Staff",
        label: "Tornei",
        content: `
            <p class="lead">È arrivato il momento di rilassarsi e sparare qualche colpo in compagnia prima delle feste. La <strong>GDG Christmas Cup</strong> è qui!</p>

            <hr class="my-8 border-white/10" />

            <h2>🎄 Dettagli Evento</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div class="bg-zinc-900 p-6 rounded-sm border-l-4 border-secondary-red">
                    <h3 class="text-white font-bold uppercase text-sm mb-2">Quando</h3>
                    <p class="text-zinc-300">22 Dicembre, ore 15:00</p>
                </div>
                <div class="bg-zinc-900 p-6 rounded-sm border-l-4 border-secondary-green">
                    <h3 class="text-white font-bold uppercase text-sm mb-2">Formato</h3>
                    <p class="text-zinc-300">5v5 Tournament Mode</p>
                </div>
            </div>

            <h2>🎁 Nessun Trofeo, Solo Gloria (e Divertimento)</h2>
            <p>Questo torneo è <strong>For Fun</strong>. L'iscrizione è completamente <strong>gratuita</strong> e aperta a tutti, dai Ferro ai Radiant. Non ci sono premi in denaro o coppe luccicanti, solo il piacere di giocare insieme alla community e farsi gli auguri in lobby.</p>

            <h3>Regole Veloci:</h3>
            <ul>
                <li>Map Pool: Tutte le mappe competitive attive.</li>
                <li>Bracket: Eliminazione diretta (BO1).</li>
                <li>Toxicity: Zero tolleranza. È Natale!</li>
            </ul>

            <hr class="my-8 border-white/10" />

            <h2>Come Iscriversi</h2>
            <p>Raduna i tuoi amici o cerca team nel canale <strong>#lft-christmas</strong> sul nostro Discord. Le iscrizioni chiudono il 21 Dicembre alle 23:59.</p>
        `
    },
    {
        slug: "patch-11-11-valorant",
        title: "Note della Patch 11.11 di Valorant: Regali, Aggiornamenti UI e una Pioggia di Bug Fix",
        excerpt: "Scopri come cambia il meta con l'ultimo aggiornamento del 2025. Nerf, Rework UI e nuove feature.",
        author: "GDG Staff",
        date: "10 Dic 2025",
        label: "Patch Notes",
        category: "Patch Notes",
        image: "/patch-notes-11-11.png",
        content: `
            <p class="lead">La patch 11.11 di VALORANT è arrivata, segnando l'ultimo aggiornamento del 2025 prima della pausa festiva di Riot Games. Nonostante l'assenza di grandi cambiamenti di bilanciamento, questa patch si concentra in modo massiccio sulla stabilità del gioco e sull'introduzione di importanti miglioramenti alla qualità della vita (QoL).</p>
            
            <p>Gli sviluppatori hanno anche lasciato intendere che ci sarà una <em>"piccola sorpresa festiva"</em> in arrivo, non ancora elencata nelle note ufficiali.</p>

            <hr class="my-8 border-white/10" />

            <h2>1. Nuove Funzionalità e Aggiornamenti Generali</h2>
            <p>L'attenzione principale di questo aggiornamento è sulle funzionalità per i giocatori su PC:</p>
            <ul>
                <li><strong>VP Gifting è Live:</strong> Finalmente è possibile. I giocatori hanno ora la possibilità di regalare Valorant Points (VP) ai propri amici. Questa funzione viene lanciata in modo graduale ed è attiva nella pagina di acquisto VP all'interno del Negozio. Un'aggiunta perfetta in vista del periodo natalizio.</li>
                <li><strong>Restyling UI Pagina Agenti:</strong> La pagina degli Agenti ha ricevuto un aggiornamento visivo, presentando ora l'intero roster in una visualizzazione a griglia più pulita e intuitiva, facilitando la navigazione e la selezione dei personaggi.</li>
            </ul>

            <hr class="my-8 border-white/10" />

            <h2>2. Una Montagna di Correzioni di Bug</h2>
            <p>Il cuore della patch 11.11 risiede in un lungo elenco di correzioni, specialmente per gli Agenti che hanno avuto interazioni problematiche o sono stati introdotti di recente:</p>

            <h3>Focus sugli Agenti Nuovi e Complessi</h3>
            <ul>
                <li>
                    <strong>Clove:</strong> Molti problemi sono stati risolti per il Controller più recente, in particolare quelli legati alla sua Ultimate (Not Dead Yet). 
                    <br/><span class="text-zinc-400 text-sm">Fix: Animazioni fini erratiche, icona non aggiornata, respawn in spawn errato.</span>
                </li>
                <li>
                    <strong>Harbor:</strong> Sono state corrette diverse interazioni con le sue abilità. 
                    <br/><span class="text-zinc-400 text-sm">Fix: Storm Surge colpiva Yoru in ulti, schermi colorati spettatori.</span>
                </li>
                <li>
                    <strong>Iso:</strong> Risolti problemi relativi al Kill Contract.
                    <br/><span class="text-zinc-400 text-sm">Fix: Clove/Reyna perdevano salute/scudi entrando nell'arena.</span>
                </li>
                <li>
                    <strong>Cypher:</strong> Fix cruciale per la minimappa.
                    <br/><span class="text-zinc-400 text-sm">Fix: Nemici rivelati in Cyber Cage.</span>
                </li>
            </ul>

            <h3>Correzioni Rilevanti per Altri Agenti</h3>
            <ul>
                <li><strong>Jett:</strong> Corretto bug blocco a mezz'aria.</li>
                <li><strong>Phoenix & Reyna:</strong> Risolti report cura imprecisi e UI persistenti.</li>
                <li><strong>Skye:</strong> Regrowth non cura più le abilità schierabili.</li>
            </ul>

            <h3>Mappa Haven</h3>
            <p>Risolto un bug nel <strong>link A</strong> che permetteva la penetrazione dei muri indesiderata.</p>

            <hr class="my-8 border-white/10" />

            <h2>3. Ultimi Avvisi e La Pausa Festiva</h2>
            <p>Questa patch è la chiusura per l'anno. Riot Games andrà in pausa e l'appuntamento è fissato per il 2026.</p>

            <div class="bg-zinc-900/50 p-6 border-l-4 border-yellow-500 rounded-r-sm my-6">
                <h4 class="text-white font-bold uppercase mb-2 text-sm tracking-wide">Problema Noto</h4>
                <p class="text-zinc-400 text-sm m-0">
                    C'è un piccolo difetto estetico temporaneo: le Gun Buddy classificate <strong>V25A3</strong> vengono mostrate con il nome errato "V25A6". Verrà risolto con la patch 12.00.
                </p>
            </div>

            <p>Con l'ultima patch del 2025 in campo, i giocatori possono godersi un gioco più stabile durante le feste, in attesa del ritorno degli sviluppatori e delle nuove sorprese del 2026.</p>
        `
    },

    {
        title: "GDG Recruitment: Cerchiamo Players e Streamers per il 2026",
        category: "Team",
        date: "05 Dic 2025",
        image: "/recruitment-2026.jpg", // Using a generic gaming/setup image
        slug: "gdg-recruitment-2026",
        excerpt: "Vuoi entrare a far parte del governo? Apriamo le candidature per i team competitivi e il programma content creators.",
        author: "GDG Management",
        label: "Team",
        discussionUrl: "https://discord.com/channels/1147679093828112394/1436156392515047434",
        content: `
            <p class="lead">Il 2026 è alle porte e la community GDG ha grandi piani. Stiamo espandendo i nostri ranghi e siamo alla ricerca di nuovi talenti da inserire nei nostri roster competitivi e nel nostro team di content creation.</p>

            <hr class="my-8 border-white/10" />

            <h2>🔥 Competitive Roster</h2>
            <p>Siamo alla ricerca di giocatori ambiziosi per completare le nostre formazioni Academy e Main team. Se hai la mentalità giusta per competere e vuoi migliorare in un ambiente strutturato, questa è la tua occasione.</p>
            
            <h3>Requisiti Minimi:</h3>
            <ul>
                <li><strong>Rank:</strong> Ascendant+ (in base al team di destinazione)</li>
                <li><strong>Disponibilità:</strong> Almeno 3 sere a settimana per pracc e tornei.</li>
                <li><strong>Mentalità:</strong> Voglia di imparare, no toxicity, capacità di ricevere feedback.</li>
            </ul>

            <p>Cerchiamo in particolare i ruoli: <strong>Controller</strong> e <strong>Sentinel</strong>, ma valutiamo candidati forti in ogni ruolo.</p>

            <hr class="my-8 border-white/10" />

            <h2>📹 Content Creators & Streamers</h2>
            <p>Il brand GDG sta crescendo e vogliamo dare voce ai creatori di contenuti. Se streammio regolarmente Valorant o crei contenuti su TikTok/YouTube, vogliamo collaborare con te.</p>

            <h3>Cosa Offriamo:</h3>
            <ul>
                <li>Supporto grafico e overlay ufficiali.</li>
                <li>Visibilità attraverso i canali social della community.</li>
                <li>Accesso a eventi esclusivi e merchandise.</li>
                <li>Possibilità di castare i tornei ufficiali GDG.</li>
            </ul>

            <hr class="my-8 border-white/10" />

            <h2>Come Candidarsi</h2>
            <p>Per inviare la tua candidatura, entra nel nostro server Discord e apri un ticket nella sezione dedicata <strong>#recruitment</strong>. Assicurati di includere il tuo tracker.gg e, se ti candidi come streamer, i link ai tuoi canali.</p>
            
            <p><strong>Non aspettare, unisciti al governo oggi stesso!</strong></p>
        `
    },

];
