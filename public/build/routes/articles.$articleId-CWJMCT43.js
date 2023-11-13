import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-XDA55CGT.js";
import {
  createHotContext
} from "/build/_shared/chunk-USNPOF7D.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/articles.$articleId.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/articles.$articleId.tsx"' + id);
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
    "app/routes/articles.$articleId.tsx"
  );
  import.meta.hot.lastModified = "1699265544500.6614";
}
function Article() {
  _s();
  const {
    article
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "article", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    article.articleImage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { id: "larger-image", alt: `${article.author} ${article.title} articleImage`, src: article.articleImage }, article.articleImage, false, {
      fileName: "app/routes/articles.$articleId.tsx",
      lineNumber: 58,
      columnNumber: 33
    }, this) : null,
    article.author || article.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: article.author }, void 0, false, {
        fileName: "app/routes/articles.$articleId.tsx",
        lineNumber: 61,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Favorite, { article }, void 0, false, {
        fileName: "app/routes/articles.$articleId.tsx",
        lineNumber: 62,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
        " ",
        article.title,
        " "
      ] }, void 0, true, {
        fileName: "app/routes/articles.$articleId.tsx",
        lineNumber: 63,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/articles.$articleId.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/articles.$articleId.tsx",
      lineNumber: 59,
      columnNumber: 44
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "No Name" }, void 0, false, {
      fileName: "app/routes/articles.$articleId.tsx",
      lineNumber: 65,
      columnNumber: 17
    }, this),
    " ",
    article.articleContent ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: article.articleContent }, void 0, false, {
      fileName: "app/routes/articles.$articleId.tsx",
      lineNumber: 66,
      columnNumber: 35
    }, this) : null,
    article.notes ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: article.notes }, void 0, false, {
      fileName: "app/routes/articles.$articleId.tsx",
      lineNumber: 67,
      columnNumber: 26
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "edit-wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Edit" }, void 0, false, {
        fileName: "app/routes/articles.$articleId.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/articles.$articleId.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "destroy", method: "post", onSubmit: (event) => {
        const response = confirm("Please confirm you want to delete this record.");
        if (!response) {
          event.preventDefault();
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Delete" }, void 0, false, {
        fileName: "app/routes/articles.$articleId.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/articles.$articleId.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/articles.$articleId.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/articles.$articleId.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/articles.$articleId.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s(Article, "AOF5du6QPMiNL6WJwDKD16sKsYw=", false, function() {
  return [useLoaderData];
});
_c = Article;
var Favorite = ({
  article
}) => {
  _s2();
  const fetcher = useFetcher();
  const favorite = article.favorite;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { "aria-label": favorite ? "Remove from favorites" : "Add to favorites", name: "favorite", value: favorite ? "false" : "true", children: favorite ? "\u2605" : "\u2606" }, void 0, false, {
    fileName: "app/routes/articles.$articleId.tsx",
    lineNumber: 96,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/articles.$articleId.tsx",
    lineNumber: 95,
    columnNumber: 10
  }, this);
};
_s2(Favorite, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c2 = Favorite;
var _c;
var _c2;
$RefreshReg$(_c, "Article");
$RefreshReg$(_c2, "Favorite");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Article as default
};
//# sourceMappingURL=/build/routes/articles.$articleId-CWJMCT43.js.map
