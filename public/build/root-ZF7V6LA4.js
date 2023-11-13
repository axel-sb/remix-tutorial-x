import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData,
  useNavigation,
  useSubmit
} from "/build/_shared/chunk-XDA55CGT.js";
import {
  createHotContext
} from "/build/_shared/chunk-USNPOF7D.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/root.tsx
var import_node = __toESM(require_node());

// app/images/icons/logo-ff.svg
var logo_ff_default = "/build/_assets/logo-ff-N5RMYL4P.svg";

// app/images/icons/read.svg
var read_default = "/build/_assets/read-55KSDCYR.svg";

// app/app.css
var app_default = "/build/_assets/app-CAYDWNHG.css";

// app/root.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: app_default
}];
function App() {
  _s();
  const {
    articles,
    q
  } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();
  const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");
  (0, import_react2.useEffect)(() => {
    const searchField = document.getElementById("q");
    if (searchField instanceof HTMLInputElement) {
      searchField.value = q || "";
    }
  }, [q]);
  const handleScroll = (event) => {
    const scroller2 = document.querySelector(".scroller-lg");
    const scrollPos = Math.round(event.currentTarget.scrollLeft / 85 * 390);
    scroller2.scrollTo({
      left: scrollPos,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "de", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "page-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { id: "logo", src: logo_ff_default, alt: "logo" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 108,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Juni 2023" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 109,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "search-form", onChange: (event) => {
            const isFirstSearch = q === null;
            submit(event.currentTarget, {
              replace: !isFirstSearch
            });
          }, role: "search", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "q", "aria-label": "Search articles", className: searching ? "loading" : "", defaultValue: q || "", placeholder: "Search", type: "search", name: "q" }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 119,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "search-spinner", "aria-hidden": true, hidden: !searching }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 121,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/root.tsx",
            lineNumber: 112,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "New" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 123,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { id: "tn", children: articles.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "scroller", onScroll: handleScroll, children: articles.map((article) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: ({
          isActive,
          isPending
        }) => isActive ? "active" : isPending ? "pending" : "", to: `articles/${article.page}#detail`, children: [
          article.page ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: `${article.author} ${article.title} articleImage`, src: article.articleImage, id: article.index }, article.articleImage, false, {
            fileName: "app/root.tsx",
            lineNumber: 136,
            columnNumber: 39
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "No Name" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 136,
            columnNumber: 178
          }, this),
          " ",
          article.favorite ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 138,
            columnNumber: 43
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 131,
          columnNumber: 21
        }, this) }, article.index, false, {
          fileName: "app/root.tsx",
          lineNumber: 130,
          columnNumber: 42
        }, this)) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 129,
          columnNumber: 32
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "No articles" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 142,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 141,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "read", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "link", children: [
          " ",
          "Artikeltext ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: read_default }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 149,
            columnNumber: 27
          }, this),
          " "
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 147,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { id: "lg", children: articles.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "scroller-lg", children: articles.map((article) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: ({
          isActive,
          isPending
        }) => isActive ? "active" : isPending ? "pending" : "", to: `articles/${article.page}#detail`, children: [
          article.page ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: `${article.author} ${article.title} articleImage`, src: article.articleImage, id: article.index, width: 390, height: 453 }, article.articleImage, false, {
            fileName: "app/root.tsx",
            lineNumber: 160,
            columnNumber: 39
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "No Name" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 160,
            columnNumber: 203
          }, this),
          " ",
          article.favorite ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 162,
            columnNumber: 43
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 155,
          columnNumber: 21
        }, this) }, article.index, false, {
          fileName: "app/root.tsx",
          lineNumber: 154,
          columnNumber: 42
        }, this)) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 153,
          columnNumber: 32
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "No articles" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 166,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 165,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 152,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: navigation.state === "loading" && !searching ? "loading" : "", id: "detail", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 174,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 172,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 97,
    columnNumber: 10
  }, this);
}
_s(App, "+U57vEnvaF2Dw8zTvIPmw5otbMg=", false, function() {
  return [useLoaderData, useNavigation, useSubmit];
});
_c = App;
var Favorite = ({
  article
}) => {
  _s2();
  const fetcher = useFetcher();
  const favorite = article.favorite;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { "aria-label": favorite ? "Remove from favorites" : "Add to favorites", name: "favorite", value: favorite ? "false" : "true", children: favorite ? "\u2605" : "\u2606" }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 193,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 192,
    columnNumber: 10
  }, this);
};
_s2(Favorite, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c2 = Favorite;
var _c;
var _c2;
$RefreshReg$(_c, "App");
$RefreshReg$(_c2, "Favorite");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-ZF7V6LA4.js.map
