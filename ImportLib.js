// import { useCounterStore } from "@/stores/counter";

// const Store = useCounterStore();

const LIB = (function () {

    const CONFIG = {
        origem: "",
        token: "",
        url: "",
    }

    function initLib(p) {
        CONFIG.origem = p.origem !== undefined ? p.origem : "";
        CONFIG.token = p.token !== undefined ? p.token : "";
        CONFIG.url = p.url !== undefined ? p.url : "";
        console.log(CONFIG.origem);
        console.log(CONFIG.token);
        console.log(CONFIG.url);

        const j = document.createElement('script');
        j.type="module"; 
        j.crossorigin;
        j.src="https://berrielucas.github.io/RBImportLib/assets/rbImportLib.js";
        document.head.appendChild(j);

        const c = document.createElement('link');
        c.rel="stylesheet";
        // c.crossorigin;
        c.href="https://berrielucas.github.io/RBImportLib/assets/rbImportLib.css";
        document.head.appendChild(c);

        const s = document.createElement('link');
        s.rel="stylesheet";
        s.crossorigin;
        s.href="https://berrielucas.github.io/RBImportLib/assets/Main-CNHLfuV-.css";
        document.head.appendChild(s);

        const f = document.createElement('link');
        f.rel="preconnect";
        f.href="https://fonts.googleapis.com";
        document.head.appendChild(f);

        const g = document.createElement('link');
        g.rel="preconnect";
        g.href="https://fonts.gstatic.com";
        document.head.appendChild(g);

        const h = document.createElement('link');
        h.rel="stylesheet";
        h.href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap";
        document.head.appendChild(h);
    }

    function config(obj) {
        const params = {
            origem: obj.origem,
            token: obj.token,
            url: obj.url,
        }

        initLib(params)   
    }

    return {
        CONFIG: CONFIG,
        config: config,
    }
})();