const languageData = {
    en: { name: "English", flagClass: "fi-gb" },
    es: { name: "Español", flagClass: "fi-es" },
    fr: { name: "Français", flagClass: "fi-fr" },
    de: { name: "Deutsch", flagClass: "fi-de" },
    jp: { name: "Japanese", flagClass: "fi-jp" }
};

const translations = {
    en: {
        title: "NMS Leyline Calculator",
        calculator: "Calculator",
        info: "Info",
        firstCoords: "First Coordinates:",
        secondCoords: "Second Coordinates:",
        distanceTravelled: "Distance Travelled:",
        latPlaceholder: "lat",
        longPlaceholder: "long",
        distPlaceholder: "distance (u)",
        clearAll: "clear all",
        locate: "Locate",
        tip: "tip: press enter to move to the next input field",
        leylinesHeader: "Leylines will appear here",
        leylinesResult: "Leylines at these longitudes:",

        infoTitle1: "How to use the calculator",
        infoTitle2: "What are 3-star deposits?",
        infoTitle3: "What are deposit leylines?",

        infoStep1: "Land on any planet and get a point of reference. This can be your starship, a save beacon, or navigational marker.",
        infoStep2: "Record your current coordinates in the first set of input fields labeled \"lat\" and \"long.\" Remember to use positive or negative decimal numbers.",
        infoStep3: "Walk or drive <b>at least 1000u</b> from your reference point and record your new position in the second set.",
        infoStep4: "Use your visor to find the distance between your current position and the reference point. Record this in the \"Distance\" field.",
        infoNote: "NOTE: Distance shown when you point at your marker switches from <b>units</b> to <b>minutes</b> somewhere between 1100u and 1200u.",
        infoVideo: "There is also a <a class='info-link' target='_blank' href='https://www.youtube.com/watch?v=Ec8QN39GNB8'>video guide</a> in case you need more detailed instructions :)",

        deposits3StarIntro: "3-star deposits are a type of resource found on every planet. <br>Here are the different types of deposits:",
        curiousDeposit: "Curious Deposit:",
        curiousDesc1: "• These drop large amounts of <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/raw52'>Runaway Mould</a>, which <b>refines 5:1 into nanites.</b>",
        curiousDesc2: "• Requires the <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech70'>advanced mining laser</a> tech installed.",
        curiousDesc3: "• It's recommend that you <b>build walls</b> around them as they will roll away after being hit.",
        curiousDesc4: "• Having the <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech71'>Optical Drill</a> installed increases the yield.",
        curiousDesc5: "• <em><b>This is usually what people are looking for.</b></em>",
        metalFingers: "Metal 'Fingers':",
        metalDesc1: "• Will drop large amounts of either <b>Uranium</b> or <b>Gold.</b>",
        metalDesc2: "• Requires the <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech70'>advanced mining laser</a> multitool tech installed.",
        venomSac: "Sac Venom:",
        venomDesc1: "• Drops <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/cur24'>Sac Venom.</a>",
        venomDesc2: "• Getting too close will damage you and picking them up will <b>alert sentinels to level 3</b> (quad spawns).",
        venomDesc3: "• Also obtainable via the <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/prod173'>Venom Urchin</a> plant.",
        venomDesc4: "• Sac Venom sells for 60,800 units.",

        leylinesExplain: "Leylines are lines of longitude (vertical lines that go from north to south) that will spawn 3 star deposits. <br><br>If you find a leyline - either by yourself or by using this tool - all you have to do is to go straight North or South to find deposits. <br><br>Leylines found using this calculator are valid between 45°N and 45°S. That doesn't mean there will be no deposits. It means that leylines aren't fully certain outside of that range."
    },

    es: {
        title: "Calculadora de Líneas Ley NMS",
        calculator: "Calculadora",
        info: "Información",
        firstCoords: "Primeras Coordenadas:",
        secondCoords: "Segundas Coordenadas:",
        distanceTravelled: "Distancia Recorrida:",
        latPlaceholder: "lat",
        longPlaceholder: "long",
        distPlaceholder: "distancia (u)",
        clearAll: "borrar",
        locate: "Localizar",
        tip: "consejo: presiona enter para ir al siguiente campo",
        leylinesHeader: "Las líneas ley aparecerán aquí",
        leylinesResult: "Líneas ley en estas longitudes:",

        infoTitle1: "Cómo usar la calculadora",
        infoTitle2: "¿Qué son los depósitos de 3 estrellas?",
        infoTitle3: "¿Qué son las líneas ley de depósitos?",

        infoStep1: "Aterriza en cualquier planeta y obtén un punto de referencia. Puede ser tu nave espacial, una baliza de guardado o un marcador de navegación.",
        infoStep2: "Registra tus coordenadas actuales en el primer conjunto de campos de entrada etiquetados como \"lat\" y \"long\". Recuerda usar números decimales positivos o negativos.",
        infoStep3: "Camina o conduce <b>al menos 1000u</b> desde tu punto de referencia y registra tu nueva posición en el segundo conjunto.",
        infoStep4: "Usa tu visor para encontrar la distancia entre tu posición actual y el punto de referencia. Regístrala en el campo \"Distancia\".",
        infoNote: "NOTA: La distancia mostrada cuando apuntas a tu marcador cambia de <b>unidades</b> a <b>minutos</b> en algún punto entre 1100u y 1200u.",
        infoVideo: "También hay una <a class='info-link' target='_blank' href='https://www.youtube.com/watch?v=Ec8QN39GNB8'>guía en vídeo</a> (en Inglés) por si necesitas instrucciones más detalladas :)",

        deposits3StarIntro: "Los depósitos de 3 estrellas son un tipo de recurso que se encuentra en todos los planetas. <br>Estos son los diferentes tipos de depósitos:",
        curiousDeposit: "Depósito Curioso:",
        curiousDesc1: "• Estos sueltan grandes cantidades de <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/raw52'>Moho desenfrenado</a>, que <b>se refina 5:1 en nanites.</b>",
        curiousDesc2: "• Requiere la tecnología <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech70'>Láser de Extracción avanzado</a> instalado.",
        curiousDesc3: "• Se recomienda <b>construir paredes</b> alrededor de ellos ya que rodarán después de ser golpeados.",
        curiousDesc4: "• Tener el <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech71'>Taladro Óptico</a> instalado aumenta el rendimiento.",
        curiousDesc5: "• <em><b>Esto es normalmente lo que la gente busca.</b></em>",
        metalFingers: "Dedos Metálicos:",
        metalDesc1: "• Soltarán grandes cantidades de <b>Uranio</b> u <b>Oro.</b>",
        metalDesc2: "• Requiere la tecnología <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech70'>Láser de Extracción avanzado</a> instalado en la multiherramienta.",
        venomSac: "Saco de Veneno:",
        venomDesc1: "• Suelta <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/cur24'>Saco de veneno.</a>",
        venomDesc2: "• Acercarse demasiado te dañará y recogerlos <b>alertará a los centinelas al nivel 3</b> (aparición de cuádruples).",
        venomDesc3: "• También se puede obtener a través de la planta <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/prod173'>Erizo de Veneno</a>.",
        venomDesc4: "• El Saco de veneno se vende por 60,800 unidades.",

        leylinesExplain: "Las líneas ley son líneas de longitud (líneas verticales que van de norte a sur) que generarán depósitos de 3 estrellas. <br><br>Si encuentras una línea ley - ya sea por ti mismo o usando esta herramienta - todo lo que tienes que hacer es ir directamente al Norte o Sur para encontrar depósitos. <br><br>Las líneas ley encontradas usando esta calculadora son válidas entre 45°N y 45°S. Eso no significa que no habrá depósitos. Significa que las líneas ley no son completamente ciertas fuera de ese rango."
    },

    fr: {
        title: "Calculateur de lignes tellurique",
        calculator: "Calculateur",
        info: "Information",
        firstCoords: "Premières Coordonées:",
        secondCoords: "Deuxièmes Coordonées:",
        distanceTravelled: "Distance Parcouru:",
        latPlaceholder: "lat",
        longPlaceholder: "long",
        distPlaceholder: "distance (u)",
        clearAll: "Éffacer",
        locate: "Localiser",
        tip: "astuce: appuyez sur Entrée pour passer au champ de saisie suivant",
        leylinesHeader: "Les lignes telluriques apparaîtront ici",
        leylinesResult: "Lignes telluriques à ces longitudes :",

        infoTitle1: "Comment utiliser la calculatrice",
        infoTitle2: "Que sont les dépôts à 3 étoiles?",
        infoTitle3: "Que sont les lignes telluriques?",

        infoStep1: "Atterrissez sur n'importe quelle planète et obtenez un point de référence. Il peut s'agir de votre vaisseau spatial, d'une balise de sauvegarde ou d'un repère de navigation.",
        infoStep2: "Enregistrez vos coordonnées actuelles dans les premiers champs de saisie intitulés « lat » et « long ». N'oubliez pas d'utiliser des nombres décimaux positifs ou négatifs.",
        infoStep3: "Marchez ou conduisez sur <b>au moins 1000u</b> à partir de votre point de référence et enregistrez votre nouvelle position dans les deuxième champs.",
        infoStep4: "Utilisez votre visière pour déterminer la distance entre votre position actuelle et le point de référence. Notez cette distance dans le champ « Distance ».",
        infoNote: "REMARQUE : la distance affichée lorsque vous pointez vers votre marqueur passe de <b>unités</b> à <b>minutes</b> entre 1100u et 1200u.",
        infoVideo: "On a aussi fait un <a class='info-link' target='_blank' href='https://www.youtube.com/watch?v=Ec8QN39GNB8'>guide vidéo</a> (en Anglais) si vous avez besoin d'instructions plus détaillées :)",

        deposits3StarIntro: "Les dépôts a 3 étoiles sont un type de ressource que l'on trouve sur toutes les planètes. <br>Voici les différents types de dépôts :",
        curiousDeposit: "Dépôs Curieux:",
        curiousDesc1: "• Ceux-ci produisent de grandes quantités de <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/raw52'>Moisissure Fugueuse</a>, qui se <b>purifient (5:1) en nanites<b>",
        curiousDesc2: "• Nécessite l'installation de la technologie <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech70'>Laser d'Extraction Avancé</a>.",
        curiousDesc3: "• Il est recommandé de <b>construire des murs</b> autour d'eux, car ils rouleront après avoir été touchés.",
        curiousDesc4: "• L'installation de la <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech71'>perceuse optique</a> augmente le rendement.",
        curiousDesc5: "• <em><b>Cette ressource est généralement ce que les gens cherchent.</b></em>",
        metalFingers: "Doigts de Métal:",
        metalDesc1: "• Produit de grandes quantités d'<b>uranium</b> ou d'<b>or</b>.",
        metalDesc2: "• Nécessite l'installation de la technologie <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech70'>Laser d'Extraction Avancé</a>.",
        venomSac: "Sac de Venin:",
        venomDesc1: "• Produit des <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/cur24'>Sacs de Venin.</a>",
        venomDesc2: "• Si vous vous approchez trop près, vous serez blessé, et si vous les ramassez, cela <b>alertra les sentinelles au niveau 3</b> (apparition de sentinelles quadrupèdes).",
        venomDesc3: "• Également disponible via la plante <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/prod173'>Venom Urchin</a>.",
        venomDesc4: "• Les sacs de venin se vendent pour 60 800 unités",

        leylinesExplain: "Les lignes telluriques sont des lignes de longitude (lignes verticales allant du nord au sud) qui génèrent des dépôts de 3 étoiles. <br><br>Si vous trouvez une ligne tellurique, que ce soit par vous-même ou à l'aide de cet outil, il vous suffit de vous diriger vers le nord ou le sud pour trouver des dépôts.<br><br>Les lignes telluriques trouvées à l'aide de ce calculateur sont valables entre 45°N et 45°S. Cela ne signifie pas qu'il n'y aura pas de dépôts. Cela veut simplement dire que les lignes telluriques ne sont pas tout à fait certaines en dehors de cette région."
    },

    de: {
        title: "NMS Ley-Linien Rechner",
        calculator: "Rechner",
        info: "Info",
        firstCoords: "Erste Coordinates:",
        secondCoords: "Zweite Coordinates:",
        distanceTravelled: "Gereiste Entfernung:",
        latPlaceholder: "Breite",
        longPlaceholder: "Länge",
        distPlaceholder: "Entfernung (u)",
        clearAll: "Alles löschen",
        locate: "Lokalisieren",
        tip: "Tipp: Drücke Enter, um zum nächsten Eingabefeld zu gelangen",
        leylinesHeader: "Ley-Linien erscheinen hier",
        leylinesResult: "Ley-Linien bei diesen Längengraden:",

        infoTitle1: "Wie man den Rechner benutzt",
        infoTitle2: "Was sind 3-Sterne Vorkommen?",
        infoTitle3: "Was sind Vorkommens-Ley-Linien?",

        infoStep1: "Lande auf einem beliebigen Planeten und finde einen Referenzpunkt. Dies kann dein Raumschiff, ein Speichersignal oder eine Navigationsmarkierung sein.",
        infoStep2: "Gib deine aktuellen Koordinaten in die ersten beiden Eingabefelder mit den Bezeichnungen „Länge“ und „Breite“ ein. Denk daran, positive oder negative Dezimalzahlen zu verwenden.",
        infoStep3: "Gehe oder fahre <b>mindestens 1000u</b> von deinem Referenzpunkt entfernt und schreibe deine neue Position in den zweiten Satz von Eingabefeldern.",
        infoStep4: "Verwende das Analysevisier, um die Entfernung zwischen deiner aktuellen Position und dem Referenzpunkt zu ermitteln. Trage diese in das Feld Entfernung ein.",
        infoNote: "ANMERKUNG: Die angezeigte Entfernung, wenn du auf deine Markierung zeigst, wechselt zwischen 1100u und 1200u von <b>Units</b> zu <b>Minuten</b>.",
        infoVideo: "Es gibt auch eine <a class='info-link' target='_blank' href='https://www.youtube.com/watch?v=Ec8QN39GNB8'>Videoanleitung</a>, falls du detailliertere Anweisungen benötigst :)",

        deposits3StarIntro: "3-Sterne Vorkommen sind eine Art Ressource, die auf jedem Planeten gefunden werden können. <br>Hier sind die unterschiedlichen Arten von Vorkommen:",
        curiousDeposit: "Merkwürdiges Vorkommen:",
        curiousDesc1: "• Diese lassen große Mengen an <a class='info-link' target='_blank' href='https://app.nmsassistant.com/link/de/raw52.html?lang=de'>unkontrollierbarem Schimmel</a> fallen, der <b>im Verhältnis 5:1 zu Naniten raffiniert wird.</b>",
        curiousDesc2: "• Erfordert die Installation der Technologie <a class='info-link' target='_blank' href='https://app.nmsassistant.com/link/de/tech70.html?lang=de'>Fortgeschrittener Minenlaser</a>.",
        curiousDesc3: "• Es wird empfohlen, <b>Wände um dich herum zu bauen</b>, da sie nach einem Treffer wegrollen.",
        curiousDesc4: "• Durch die Installation des <a class='info-link' target='_blank' href='https://app.nmsassistant.com/link/de/tech71.html?lang=de'>optischen Bohrers</a> lässt sich der Ertrag steigern.",
        curiousDesc5: "• <em><b>Das ist in der Regel das, worauf die Leute hinauswollen.</b></em>",
        metalFingers: "Metall-„Finger“:",
        metalDesc1: "• Lässt große Mengen an entweder <b>Uran</b> oder <b>Gold</b> fallen.",
        metalDesc2: "• Erfordert die Installation der Technologie <a class='info-link' target='_blank' href='https://app.nmsassistant.com/link/de/tech70.html?lang=de'>Fortgeschrittener Minenlaser</a>.",
        venomSac: "Beutelgift:",
        venomDesc1: "• <a class='info-link' target='_blank' href='https://app.nmsassistant.com/link/de/cur24.html?lang=de'>Beutelgift</a> kann eingesammelt werden.",
        venomDesc2: "• Wenn du zu nahe kommst, wirst du Schaden nehmen, und wenn du sie aufhebst, werden <b>die Wächter auf Stufe 3 alarmiert</b> (vierbeinige Wächter Spawnen).",
        venomDesc3: "• Auch über die Pflanze <a class='info-link' target='_blank' href='https://app.nmsassistant.com/link/de/prod173.html?lang=de'>Giftigel</a> erhältlich.",
        venomDesc4: "• Beutelgift kann für 60.800 Units verkauft werden.",

        leylinesExplain: "Ley-Linien sind Längengrade (vertikale Linien, die von Norden nach Süden verlaufen), an denen sich 3-Sterne-Vorkommen bilden. <br><br>Wenn du eine Ley-Linie findst - entweder selbst oder mithilfe dieses Tools - musst du nur gerade nach Norden oder Süden gehen, um Vorkommen zu finden. <br><br>Mit diesem Rechner gefundene Ley-Linien sind zwischen 45° N und 45° S gültig. Das bedeutet nicht, dass es außerhalb dieses Bereichs keine Vorkommen gibt. Es bedeutet lediglich, dass Ley-Linien außerhalb dieses Bereichs nicht vollständig sicher sind."
    },

    jp: {
        title: "NMSレイライン計算機",
        calculator: "計算機",
        info: "情報",
        firstCoords: "1番目の座標:",
        secondCoords: "2番目の座標:",
        distanceTravelled: "移動距離:",
        latPlaceholder: "緯度",
        longPlaceholder: "経度",
        distPlaceholder: "距離 (u)",
        clearAll: "すべて消去",
        locate: "見つける",
        tip: "ヒント: 次の入力フィールドに移動するには、「Enter」を押します",
        leylinesHeader: "ここにレイラインが現れる",
        leylinesResult: "レイラインは次の経度にあります:",

        infoTitle1: "計算機の使い方",
        infoTitle2: "3スターデポジットとは何ですか?",
        infoTitle3: "堆積レイラインとは何ですか?",

        infoStep1: "どの惑星に着陸しても、基準点を確保できます。スターシップ、セーブビーコン、航法マーカーなど、様々なものが利用可能です。",
        infoStep2: "最初の入力フィールド「緯度」と「経度」に現在の座標を記録します。正または負の小数を使用することを忘れないでください。",
        infoStep3: "基準点から <b>少なくとも 1000u</b> 離れた場所まで歩くか車で移動し、2 番目のセットに新しい位置を記録します。",
        infoStep4: "バイザーを使って、現在位置と基準点間の距離を測定します。「距離」欄に記録してください。",
        infoNote: "注意: マーカーをポイントしたときに表示される距離は、1100u と 1200u の間のどこかで <b>単位</b> から <b>分</b> に切り替わります。",
        infoVideo: "さらに詳しい説明が必要な場合は、<a class='info-link' target='_blank' href='https://www.youtube.com/watch?v=Ec8QN39GNB8'>ビデオガイド</a>もあります^^",

        deposits3StarIntro: "3スター鉱床は、あらゆる惑星に存在する資源の一種です。<br>鉱床の種類は次のとおりです:",
        curiousDeposit: "好奇心の預金:",
        curiousDesc1: "• これらは大量の<a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/raw52'>逃げ出したカビ</a>をドロップし、<b>5:1 でナノマシンに精錬します</b>",
        curiousDesc2: "• これには、<a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech70'>高度な採掘レーザー</a>技術をインストールする必要があります。",
        curiousDesc3: "• 型の周囲に<b>壁を作る</b>ことをお勧めします。型の周囲は、叩かれた後に転がってしまうからです。",
        curiousDesc4: "• <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech71'>光学ドリル</a>を設置すると獲得できる資源量が増加します。",
        curiousDesc5: "• <em><b>これは人々から非常に求められています。</b></em>",
        metalFingers: "金属の「指」：",
        metalDesc1: "• 大量の<b>ウラン</b>または<b>金</b>がドロップされます。",
        metalDesc2: "• これには、<a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech70'>高度な採掘レーザー</a>技術をインストールする必要があります。",
        venomSac: "サックヴェノム:",
        venomDesc1: "• <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/cur24'>サックヴェノム</a>をドロップします。",
        venomDesc2: "• これに近づきすぎると怪我をします。また、これを拾うと、<b>レベル 3 のセンチネルに警告</b> されます (クワッド ウィルが出現します)。",
        venomDesc3: "• <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/prod173'>毒ウニ</a>植物からも入手できます。",
        venomDesc4: "• サックベノムを60,800ユニット販売できます。",

        leylinesExplain: "レイラインとは、経線（北から南へ伸びる垂直線）を指し、3つ星の資源鉱床が出現します。<br><br>レイラインを発見した場合（自分で発見した場合も、このツールを使用した場合も）、資源鉱床を見つけるには、まっすぐ北または南へ移動する必要があります。<br><br>この計算機で発見されたレイラインは、北緯45度から南緯45度までの範囲で有効です。これは、資源鉱床が存在しないという意味ではありませんが、その範囲外ではレイラインが完全に確認されていないことを意味します。"
    },
};

let currentLang = 'en';

function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0];

    if (translations[langCode]) {
        return langCode;
    }
    return 'en'; // Default to English
}

function createLanguageSelector() {
    const langOptions = document.querySelector('.lang-options');
    const currentLangCode = document.getElementById('current-lang-code');

    langOptions.innerHTML = '';

    Object.entries(languageData).forEach(([code, data]) => {
        const option = document.createElement('div');
        option.className = `lang-option ${code === currentLang ? 'active' : ''}`;
        option.dataset.lang = code;
        option.innerHTML = `
            <span class="fi ${data.flagClass}"></span>
            <span>${data.name}</span>
        `;

        option.addEventListener('click', () => {
            setLanguage(code);
            closeLanguageDropdown();
        });

        langOptions.appendChild(option);
    });

    updateCurrentLanguageButton();
}

function updateCurrentLanguageButton() {
    const langCodeSpan = document.getElementById("current-lang-code");
    const flagSpan = document.querySelector(".lang-current .fi");

    langCodeSpan.textContent = currentLang.toUpperCase();
    flagSpan.className = `fi ${languageData[currentLang].flagClass}`;
}

function toggleLanguageDropdown() {
    const dropdown = document.querySelector('.lang-dropdown');
    dropdown.classList.toggle('active');
}

function closeLanguageDropdown() {
    const dropdown = document.querySelector('.lang-dropdown');
    dropdown.classList.remove('active');
}

document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.lang-dropdown');
    if (!dropdown.contains(e.target)) {
        closeLanguageDropdown();
    }
});

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('nms-lang', lang);
    updateUI();
    updateCurrentLanguageButton();
    createLanguageSelector();
}

function updateUI() {
    const t = translations[currentLang];

    document.querySelector('h1').textContent = t.title;

    document.querySelectorAll('h2')[0].textContent = t.calculator;
    document.querySelectorAll('h2')[1].textContent = t.info;

    document.querySelectorAll('.input-row .para')[0].textContent = t.firstCoords;
    document.querySelectorAll('.input-row .para')[1].textContent = t.secondCoords;
    document.querySelectorAll('.input-row .para')[2].textContent = t.distanceTravelled;

    document.getElementById('lat1').placeholder = t.latPlaceholder;
    document.getElementById('long1').placeholder = t.longPlaceholder;
    document.getElementById('lat2').placeholder = t.latPlaceholder;
    document.getElementById('long2').placeholder = t.longPlaceholder;
    document.getElementById('dist').placeholder = t.distPlaceholder;

    document.getElementById('btn-clear').textContent = t.clearAll;
    document.getElementById('btn-locate').innerHTML = `<strong>${t.locate}</strong>`;

    document.querySelector('.tiptext').textContent = t.tip;

    document.getElementById('results-header').textContent = t.leylinesHeader;

    document.querySelector('#info-head-1 h3').textContent = t.infoTitle1;
    document.querySelector('#info-head-2 h3').textContent = t.infoTitle2;
    document.querySelector('#info-head-3 h3').textContent = t.infoTitle3;

    const infoBody1 = document.getElementById('info-body-1');
    infoBody1.innerHTML = `
        <ol class="textdark">
            <li>${t.infoStep1}</li>
            <li>${t.infoStep2}</li>
            <li>${t.infoStep3}</li>
            <li>${t.infoStep4}</li>
        </ol>
        <p class="textdark">${t.infoNote}</p>
        <p class="textdark">${t.infoVideo}</p>
    `;

    const infoBody2 = document.getElementById('info-body-2');
    infoBody2.innerHTML = `
        <p class="textdark">${t.deposits3StarIntro}</p>
        <dl class="textdark">
            <dt>${t.curiousDeposit}</dt>
            <dd>${t.curiousDesc1}</dd>
            <dd>${t.curiousDesc2}</dd>
            <dd>${t.curiousDesc3}</dd>
            <dd>${t.curiousDesc4}</dd>
                <dd>${t.curiousDesc5}</dd> <br>
            <dt>${t.metalFingers}</dt>
            <dd>${t.metalDesc1}</dd>
                <dd>${t.metalDesc2}</dd> <br>
            <dt>${t.venomSac}</dt>
            <dd>${t.venomDesc1}</dd>
            <dd>${t.venomDesc2}</dd>
            <dd>${t.venomDesc3}</dd>
            <dd>${t.venomDesc4}</dd>
        </dl>
    `;

    const infoBody3 = document.getElementById('info-body-3');
    infoBody3.innerHTML = `
        <p class="textdark">${t.leylinesExplain}</p>
    `;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.toggle('active', option.dataset.lang === currentLang);
    });
}

function initLanguage() {
    const savedLang = localStorage.getItem('nms-lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    } else {
        currentLang = detectLanguage();
    }

    createLanguageSelector();

    document.querySelector('.lang-current').addEventListener('click', toggleLanguageDropdown);

    updateUI();
}

initLanguage();